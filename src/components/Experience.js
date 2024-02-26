import React, {useRef} from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';


const workDetails = [
    {
        position: "Software Developer",
        company: "Redwood Platform, Oracle",
        companyLink: 'https://redwood.oracle.com/',
        time: "Oct 2023 - Present",
        address: "Bengaluru, IN",
        work: "Developed user interface for the oj-sp-smart-search and added caching support to show suggestions based on recent searches. Using OJET, Preact with VDOM architecture."
    },
    {
        position: "Member of Technical Staff",
        company: "Oracle Content Cloud, Oracle",
        companyLink: "https://docs.oracle.com/en/cloud/index.html",
        time: "Jun 2022 - Oct 2023",
        address: "Hyderabad, IN",
        work: " Developed a B2B content marketing platform to help the business deliver personalised and engaging content and analyze their engagement also developed features for Oracle Content Cloud, including Video Transcription (viewing and editing) and importing/exporting site packages from the Content Cloud."
    },
    {
        position: "Automation Intern",
        company: "JP Morgan Chase",
        time: "Jan 2022 - Jun 2022",
        address: "Mumbai, IN",
        work: "The project involved the development of an email summarization solution using extractive summarization and OCR with Python and Alteryx, aimed at aiding analysts in handling large volumes of emails efficiently. This innovation resulted in approximately 140 hours of saved time annually, as per the company's evaluation. Additionally, worked on dashboards and automated report generation system were developed using Alteryx and Tableau for business units"
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