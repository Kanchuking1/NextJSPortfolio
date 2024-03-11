import React from 'react'
import Link from 'next/link'

import {motion} from "framer-motion"

// // const card = {
//     initial: {
//         opacity: 0
//     },
//     animate: {
//         opacity: 1,
//         transition: {
//             delay: 0.5
//         }
//     }
// }

const ProjectCard = ({ id, title, intro, target, alt, thumbnail, topics, tech }) => {

    return <motion.div id={`${id}`} 
        className="w-full h-[500px] flex flex-col border-2 border-dark items-center rounded-2xl relative bg-light"
        whileHover={{scale: 1.05}}>
        <figure className='h-3/5 p-4 w-full flex items-center justify-center overflow-hidden rounded-2xl'>
            <img src={thumbnail} alt={alt} className='w-full h-full object-cover rounded-2xl border-[1px] border-dark'/>
        </figure>
        <div className="flex flex-col bg-light px-4 justify-between w-full">
            <div className='w-full'>
                <div className='flex overflow-hidden whitespace-nowrap my-1'>
                    {topics.map((topic, index) => {
                        return <span key={`${index}_${topic}`} className='px-1 mr-1 rounded-md bg-primary/50 text-light text-xs'>{topic}</span>
                    })}
                </div>
                <div className='flex overflow-hidden whitespace-nowrap my-1'>
                    {tech.map((topic, index) => {
                        return <span key={`${index}_${topic}`} className='px-1 mr-1 rounded-md bg-primary text-light text-xs'>{topic}</span>
                    })}
                </div>
            </div>
            <h1 className='capitalize font-bold text-xl'>{title}</h1>
            <p>{intro}</p>
        </div>
        <div className='absolute bottom-5 right-5 bg-dark rounded-xl text-light px-4 py-2 font-bold'><Link href={target} target="_blank">Checkout</Link></div>
    </motion.div>
}

export default ProjectCard