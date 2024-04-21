import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import Head from 'next/head';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
});

const WarningBanner = () => {
  return (
    <div className='w-full bg-primary flex items-center justify-center text-white mb-4 border-1 border-b border-light'>
      <svg className="fill-current w-4 h-4 mr-2 animate-bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/>
      </svg>   
      <span className='py-4 text-bold text-lg'>This site is currently under works please go&nbsp; 
        <a className='underline' href="https://kanchuking1.github.io/myPortfolio/" target="_blank">here to look at my portfolio.</a>
      </span>
    </div>
  );
}

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, intial-scale=1"></meta>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
      <NavBar />
      {/* <WarningBanner /> */}
      <Component {...pageProps} />
      <Footer />
    </main>
  </>
}
