import Link from 'next/link';
import React from 'react';

import {motion} from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex item-center justify-center mt-2">
        <MotionLink 
        href="/"
        className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-xxl font-bold'
        whileHover={{
            scale: 1.5
        }}>
            WK
        </MotionLink>
    </div>
  )
}

export default Logo;