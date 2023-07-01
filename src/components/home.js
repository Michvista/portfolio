'use client'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import './home.css'

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <>
     <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}
      </style>
      <body>
        <div className='hero'>
        <div className='textNdIcons'>
          <div className='icons'>
          <img src='html-5-removebg-preview 1.png' className='one'/>
          <img src='js 1.png' id='two'/>
          <img src='figma-removebg-preview 1.png' id='three'/>
          </div>
      <h1>Fullstack  web developer, designer</h1>
        </div>
        <div className='Image'>
          <img src='lovelooking .png' className='backdrop'/>
          <img src='web.png' className='svg'/>
          <img src='Vector 6.png' className='mobile'/>
        </div>
        </div>
      </body>
    </>
  )
}
