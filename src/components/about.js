'use client'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import './about.css'

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
     <div className='about'>
          <div className='bgImgs'>
            <img src="photoshop.png" className='phtotshop'/>
            <img src="css.png" className='css'/>
          </div>
          <div className='texts'>
            <div className='text1'>
              <div className='box'></div>
                     <p>
                     I am Olumide Nifemi,
          <br/>  A full stack developer who has  experience in a variety of technologies, I also have some knowledge about ui design and graphic <span>design.</span>
                     </p>
            </div>
            <div className='text2'>
            <div className='box'></div>
              <h1>
              How can i be 
              a benefit to you or 
              your company?
              </h1>
                  <p>
                  I possess exceptional time management skills and excel in adapting to diverse environments.
                  </p>
            </div>
          </div>
          <h1 className='headAbout'>
          ~Who am I?
          </h1>
        </div>

      </body>
    </>
  )
}
