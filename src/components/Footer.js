import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className="w-full border-t-2 !bg-dark text-light border-solid border-dark font-medium text-lg">
        <Layout className='py-8 flex items-center justify-between !bg-dark'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <Link href="https://kanchuking1.github.io/myPortfolio/" target="_blank">Wahib Kapdi</Link>
            <Link href="mailto:wahibkapdi2212@gmail.com">Get In Touch</Link>
        </Layout>
    </footer>
  )
}

export default Footer