import React, {useEffect, useRef} from 'react'

const ConveyerBelt = ({
    items,
    colorComboClasses,
    className="",
    ...props
}) => {
    const viewPortRef = useRef(null)
    const leftOverFlow = useRef(null)
    const rightOverflow = useRef(null)

    useEffect(() => {
        updateOverflow();
    }, [viewPortRef])

    const updateOverflow = () => {
        const clientWidth = viewPortRef.current.clientWidth;
        const scrollWidth = viewPortRef.current.scrollWidth;

        if (clientWidth >= scrollWidth) {
            leftOverFlow.current.style.display = 'none';
            rightOverflow.current.style.display = 'none';
        } else {
            console.log(viewPortRef.current.scrollLeft, scrollWidth, clientWidth)
            const scrollPosition = viewPortRef.current.scrollLeft;

            leftOverFlow.current.style.display = scrollPosition == 0?'none':'block';
            rightOverflow.current.style.display = Math.abs(scrollPosition + clientWidth - scrollWidth) <= 3 ?'none':'block';
        }
    }
  return (
    <div className='relative w-full h-6 my-[1px]'>
        <div ref={rightOverflow} className='absolute bg-gradient-to-l from-dark/30 right-0 w-4 h-full'></div>
        <div ref={leftOverFlow} className='absolute bg-gradient-to-r from-dark/30 left-0 bottom-0 w-4 h-full'></div>
        <div 
            ref={viewPortRef} 
            className='whitespace-break-spaces overflow-scroll no-scrollbar h-full' 
            onWheel={updateOverflow}
            {...props}>
            {items.map((item, index) => {
                return <span key={`${index}_${item.split(' ').join('')}`} 
                className={`px-1 py-1 mr-1 rounded-md text-xs font whitespace-nowrap h-full ${colorComboClasses}`}>
                    {item}
                </span>
            })}
        </div>
    </div>
  )
}

export default ConveyerBelt