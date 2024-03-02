import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = ({ id, title, intro, target, alt, thumbnail }) => {

    return <div id={`${id}`} className="w-full h-[500px] flex flex-col border-2 border-dark items-center rounded-2xl relative bg-light">
        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[1.5rem] bg-dark' />
        <figure className='h-3/5 p-4 w-full flex items-center justify-center overflow-hidden rounded-2xl'>
            <img src={thumbnail} alt={alt} className='w-full h-full object-cover rounded-2xl border-[1px] border-dark'/>
        </figure>
        <div className="flex flex-col bg-light px-4 justify-between">
            <h1 className='capitalize font-bold text-xl'>{title}</h1>
            <p>{intro}</p>
        </div>
        <div className='absolute bottom-5 right-5 bg-dark rounded-xl text-light px-4 py-2 font-bold'><Link href={target} target="_blank">Checkout</Link></div>
    </div>
}

export default ProjectCard