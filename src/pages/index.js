import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'

import profilePic from '../../public/images/profile/ProfilePic.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Wahib Kapdi</title>
        <meta name="description" content="Welcome to Wahib Kapdi's Online portfolio." />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className='pt-0 w-[80%]'>
          <div className='flex items-center justify-between w-full border-solid border-2 border-dark'>
            <div className='w-1/2'>
              <Image src={profilePic} alt='Wahib Kapdi' className='w-full h-auto drop-shadow-2xl' />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Welcome to My World of Digital Ingenuity." className='text-left' />
              <p className='my-4 text-base font-medium'>
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link className="flex items-center bg-dark text-light p-2.5 px-6 
                rounded-lg text-lg font-semibold 
                hover:bg-light hover:text-dark border-2 border-solid border-transparent
                hover:border-dark" href='/dummy.pdf' target="_blank"
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link 
                  href='mailto:wahibkapdi2212@gmail.com' 
                  target="_blank"
                  className='ml-4 text-lg font-medium capitalize text-dark underline'>Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
