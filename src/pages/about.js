import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Experience from '@/components/Experience'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        duration: 2000,
        damping: 10
    });
    const isInView = useInView(ref, {
        once: true
    });

    useEffect(() => {
        if(isInView) {
            motionValue.set(value);
        }
    }, [isInView, motionValue, value]);

    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current && latest.toFixed(0)) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value]);

    return <span ref={ref}>

    </span>
}

const About= () => {
  return (
    <>
        <Head>
            <title>Wahib Kapdi | About Page</title>
            <meta name="description" content="Learn About Wahib Kapdi's journey" />
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Passion Fuels Purpose" className='mb-16' />
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>
                            Biography
                        </h2>
                        <p className='font-medium'>
                            Hi, I'm Wahib, a software engineer with a passion for creating beautiful, functional, 
                            and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
                            new and innovative ways to bring my clients' visions to life.
                        </p>
                        <p className='my-4 font-medium'>
                            My experience lies in varied field of engineering including Machine Learning, Robotics,
                             Game Development and Web development. 
                        </p>
                        <p className='font-medium'>
                            Whether I'm working on a website, mobile app, ML model or 
                            game, I bring my commitment to design excellence and user-centered thinking to 
                            every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                        </p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                        <Image src={profilePic} alt="Wahib Kapdi" className='w-full h-auto rounded-2xl' />
                    </div>
                    <div className='col-span-2 flex flex-col items-end justify-between'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumbers value={10} />
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>satisfied clients</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumbers value={5} />
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>projects completed</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumbers value={(new Date().getFullYear()) - 2021} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>years of experience</h2>
                        </div>
                    </div>
                </div>
                <Experience />
            </Layout>
        </main>
    </>
  )
}

export default About  