import React, {useCallback, useState} from 'react'
import { SearchIcon } from '@/components/Icons'

const FilterChip = ({
    value, 
    allowClose,
    isClickable, 
    onClick,
    onDelete, 
    className="", 
    ...props}) => {

        let outerDivProps = {
            className: `relative inline-block border-dark border rounded-lg px-2 m-1 bg-light ${className} cursor-default`
        }

        if (isClickable) {
            outerDivProps.className += "!cursor-pointer hover:bg-dark/50 hover:text-light",
            outerDivProps.onMouseDown = () => {
                onClick(value);
            }
        }

    return <div 
        key={props.key} 
        {...outerDivProps}>
            {value}
            {(allowClose)?<span className='ml-2 font-bold hover:bg-dark/25 w-6 h-6 px-[3px] rounded-sm' onClick={(event) => {
                event.stopPropagation();
                onDelete?.(value);
            }}>X</span>:undefined}
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
    onRemoveSelectedFitler,
    onSelectedFilterChip
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

    const generateSuggestions = () => {
        let validCategories = [];

        searchSuggestions.map((category) => {
            const categoryAvialableFilters = category.filters.filter((filter) => {
                const found = selectedFilters.find((f) => f.value == filter);
                if (found) return false;
                if ((!inputValue) || inputValue.length < 1) return true;
                if (inputValue && filter.toLowerCase().includes(inputValue.toLowerCase())) return true;
                return false;
            });

            if (categoryAvialableFilters.length > 0) {
                validCategories.push({
                    categoryName: category.categoryName,
                    filters: categoryAvialableFilters
                });
                return true;
            }

            return false;
        });

        return validCategories;
    }

    const renderFilters = () => {
        if ((!selectedFilters) || selectedFilters?.length < 1) {
            return undefined;
        }
        return <div id="chips-container" className='flex justify-center items-center px-4'>
            {selectedFilters.map((sf, index) => {
                return <FilterChip 
                    key={`${index}_${sf.value}`} 
                    value={sf.value} 
                    allowClose={true}
                    isClickable={false} 
                    onDelete={onDeleteFilter} />
            })}
        </div>
    }

    const renderSuggestions = () => {
        if (!(searchSuggestions) || searchSuggestions.length < 1) {
            return;
        }

        let validCategories = generateSuggestions();

        if (validCategories.length < 1) {
            return <h1 className='p-4 font-bold'>There are no suggestions for&nbsp;"{inputValue}"</h1>
        }

        return <div className={`w-full h-full p-4 pr-8 ${className}`}>
            {validCategories.map((category, index) => {
                
                if(category.filters.length < 1) return undefined;
                return <div key={index} className='w-full border-b border-dark/50 py-8 last:border-none '>
                    <h1 className='text-xl font-bold mb-2'>{category.categoryName}</h1>
                    {category.filters.map((filter, fi) => {
                        return <FilterChip 
                            value={filter} 
                            allowClose={false}
                            isClickable={true} 
                            onClick={onSelectedFilterChip}
                            key={fi} 
                            className='my-1' />
                    })}
                </div>
            })}
        </div>
    }

    return (
        <div className='relative w-full mb-4 outline-[1px] outline-dark rounded-2xl flex justify-between outline focus-within:outline-2 focus-within:outline-dark'>
            {renderFilters()}
            <input 
                id="search-bar-projects"
                value={inputValue}
                placeholder='Search for projects of your interest . . .'
                className={`grow h-12 p-4 rounded-2xl  ${(!selectedFilters) || selectedFilters?.length < 1?'!rounded-l-2xl':''} !border-r border-dark focus:border-none focus:outline focus:outline-x-2 focus:outline-dark`} 
                onFocus={openDropDown}
                onBlur={closeDropDown}
                onChange={(event) => {
                    setInputValue(event.target.value);
                }} />
            <SearchIcon className='cursor-pointer absolute !h-12 !w-12 right-1 z-10 pointer-events-none' />
            <div className={`absolute w-full bg-light outline-dark outline top-14 rounded-2xl z-10 drop-shadow-2xl ${
                showDropdown?'':'hidden'
            }`}>
                {renderSuggestions()}
            </div>
        </div>
    )
}

export default SearchBar