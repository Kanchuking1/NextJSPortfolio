import React, {useRef} from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';


const workDetails = [
    {
        position: "Software Engineer",
        company: "Google",
        companyLink: 'www.google.com',
        time: "2022-Present",
        address: "Mountain View, CA",
        work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
    },
    {
        position: "Software Engineer",
        company: "Google",
        time: "2022-Present",
        address: "Mountain View, CA",
        work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
    },
    {
        position: "Software Engineer",
        company: "Google",
        time: "2022-Present",
        address: "Mountain View, CA",
        work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
    }
]

const Details = ({key, position, company, companyLink, time, address, work}) => {
    const liRef = useRef();
    return <li ref={liRef} key={key} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col item-center justify-between'>
        <LiIcon liReference={liRef} />
        <div>
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;
                <a 
                    href={companyLink}
                    target="_blank"
                    className='text-primary'>@{company}</a>
            </h3>
            <span className='capitalize font-medium text-dark/75'>{time} | {address}</span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    }); 
  return (
    <div className='my-64'>
        <h2 className='text-8xl font-bold mb-32 w-full text-center'>
            Experience
        </h2>
        <div ref={ref} className='w-[75] mx-auto relative'>
            <motion.div style={{
                scaleY: scrollYProgress
            }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                {workDetails.map((workex, index) => {
                    return <Details key={`${index}`} {...workex} />
                })}
            </ul>
        </div>
    </div>
  )
}

export default Experience