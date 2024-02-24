import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
        <span>Rights</span>
        <Link href="/" target="_blank">Wahib Kapdi</Link>
        <Link href="mailto:wahibkapdi2212@gmail.com">Get In Touch</Link>
    </footer>
  )
}

export default Footer