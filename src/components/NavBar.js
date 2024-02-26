import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import Logo from './Logo'
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons'

import {motion} from "framer-motion";

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();
    return <Link 
        href={href} 
        className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
            ${router.asPath == href ? 'w-full':'w-0'}
            `}>&nbsp;</span>
        </Link>
}

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav>
            <CustomLink href="/" title="Home" className='mr-4'/>
            <CustomLink href="/about" title="About" className='mx-4'/>
            {/* <CustomLink href="/projects" title="Projects" className='mx-4'/>
            <CustomLink href="/articles" title="Articles" className='ml-4'/> */}
        </nav>
        <Logo />
        <nav className='flex items-center justify-center flex-wrap'>
            <motion.a href="https://twitter.com/KapdiSabir" target='_blank' whileHover={{y: -2}} whileTap={{scale: 0.9}} className='w-10 mx-3'>
                <TwitterIcon />
            </motion.a>
            <motion.a href="https://github.com/Kanchuking1" target='_blank' whileHover={{y: -2}} whileTap={{scale: 0.9}} className='w-10 mx-3'>
                <GithubIcon />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/wahib-kapdi-00674316b/" target='_blank' whileHover={{y: -2}} whileTap={{scale: 0.9}} className='w-10 mx-3'>
                <LinkedInIcon />
            </motion.a>
        </nav>
    </header>
  )
}

export default NavBar