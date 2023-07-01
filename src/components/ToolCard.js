/* eslint-disable react/jsx-key */
'use client'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import { Col, Container, Nav,  Row, Tab } from 'react-bootstrap'
import "./toolCard.css"


const montserrat = Montserrat({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const ToolCard = ({imgUrl, tab}) => {
  return (
    <>
     <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}
      </style>
    <body>
        <Col sm={6} md={4}>
            <div className='img'>
                <Image src={imgUrl} alt='image' width={70} height={70}/>
            </div>
        </Col>
    </body>
    </>
  )
}
