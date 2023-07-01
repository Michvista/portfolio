'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { Montserrat } from 'next/font/google'
import HomePage from "../components/home"
import About from "../components/about"
import Tools from "../components/Tools"
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
     @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}
      </style>
      <body>
        <div>
        <Tools />
        </div>
      </body>
    </>
  )
}
