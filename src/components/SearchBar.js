import React, {useCallback, useState} from 'react'
import { SearchIcon } from '@/components/Icons'

const FilterChip = ({value, onDelete, className="", ...props}) => {
    return <div key={props.key} className={`relative inline-block border-dark border rounded-lg px-2 mx-1 bg-light ${className}`}>
            <div className='absolute top-0 -right-1 -z-10 w-[102%] h-[103%] rounded-lg bg-dark' />
            {value}
            <span className='ml-2 font-bold hover:bg-dark/25 w-6 h-6 px-[3px] rounded-sm' onClick={(event) => {
                event.stopPropagation();
                onDelete?.(value);
            }}>X</span>
        </div>
}

/**
 * Search Suggestions Structure
 * searchSuggestions : [{
 *      categoryName: string,
 *      filters: [string]
 * }]
 * selectedSuggestions : [{
 *      value: string
 * }]
*/
const SearchBar = ({
    className, 
    searchSuggestions, 
    selectedFilters, 
    onRemoveSelectedFitler
}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const openDropDown = () => {
        setShowDropdown(true);
    }

    const closeDropDown = () => {
        setShowDropdown(false);
    }

    const onDeleteFilter = useCallback((value) => {
        onRemoveSelectedFitler?.(value);
    },[onRemoveSelectedFitler]);

    const renderFilters = () => {
        if ((!selectedFilters) || selectedFilters?.length < 1) {
            return undefined;
        }
        return <div id="chips-container" className='flex justify-center items-center px-4'>
            {selectedFilters.map((sf, index) => {
                return <FilterChip key={`${index}_${sf.value}`} value={sf.value} onDelete={onDeleteFilter} />
            })}
        </div>
    }

    const renderSuggestions = () => {
        if (!(searchSuggestions) || searchSuggestions.length < 1) {
            return;
        }

        return <div className='w-full h-full p-4'>
            {searchSuggestions.map((category, index) => {
                return <div key={index} className='w-full border-b border-dark/50 py-8 last:border-none '>
                    <h1 className='text-xl font-bold'>{category.categoryName}</h1>
                    {category.filters.map((filter, fi) => {
                        return <FilterChip value={filter} key={fi} className='my-1' />
                    })}
                </div>
            })}
        </div>
    }

    return (
        <div className='relative w-full mb-4 outline-[1px] outline-dark rounded-2xl flex outline focus-within:outline-2 focus-within:outline-dark'>
            {renderFilters()}
            <input 
                id="search-bar-projects"
                value={inputValue}
                placeholder='Search for projects of your interest . . .'
                className={`w-11/12 h-12 p-4 ${(!selectedFilters) || selectedFilters?.length < 1?'rounded-l-2xl':'border-x border-dark'} focus:border-none focus:outline focus:outline-x-[2px] focus:outline-dark`} 
                onFocus={openDropDown}
                onBlur={closeDropDown}
                onChange={(event) => {
                    setInputValue(event.detail.value);
                }} />
            <div className='w-1/12'>
                <SearchIcon className='!h-12' />
            </div>
            <div className={`absolute w-full bg-light outline-dark outline top-14 rounded-2xl z-10 drop-shadow-2xl ${
                showDropdown?'':'hidden'
            }`}>
                {renderSuggestions()}
            </div>
        </div>
    )
}

export default SearchBar