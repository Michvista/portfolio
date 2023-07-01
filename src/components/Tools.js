'use client'
/* eslint-disable react/jsx-key */
// import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import './tools.css'
import { Col, Carousel, Container, Image,  Nav,  Row, Tab, Tabs } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css"
import { ToolCard } from './ToolCard'


const montserrat = Montserrat({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
    const skills = [
        {
            tab: "Frontend",
            imgUrl: "Html.png"
        },
        {
            tab: "Frontend",
            imgUrl: "cssTools.png"
        },
        {
            tab: "Frontend",
            imgUrl: "js.png"
        },
        {
            tab: "Frontend",
            imgUrl: "react.png"
        },
        {
            tab: "Backend",
            imgUrl: "firebase.svg"
        },
        {
            tab: "Backend",
            imgUrl: "express.svg"
        },
        {
            tab: "Frontend",
            imgUrl: "svelte.png"
        },
        {
            tab: "Frontend",
            imgUrl: "svelteKit.png"
        },
        {
            tab: "Backend",
            imgUrl: "python.svg"
        },
        {
            tab: "Backend",
            imgUrl: "mongodb.svg"
        },
        {
            tab: "Backend",
            imgUrl: "mysql.svg"
        },
        {
            tab: "Frontend",
            imgUrl: "next-js.svg"
        },
        {
            tab: "Backend",
            imgUrl: "node-js.svg"
        },
        {
            tab: "Backend",
            imgUrl: "Promo-Facebook-Facebook_marketplace-removebg-preview.png"
        },
        {
            tab: "Ui",
            imgUrl: "figma.png"
        },
        {
            tab: "Graphic",
            imgUrl: "photoshop (2).png",
        },
        {
          tab: "Graphic",
          imgUrl: "corelDraw.png"
        },
        {
          tab: "Graphic",
          imgUrl: "adobeIlustator.png"
        },
        {
          tab: "Graphic",
          imgUrl: "indesign.png"
        },
    ]
      return (
        <>
     <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
        @media screen and (max-width: 1250px) {
          body{
              overflow-y: scroll;
          }
      }
        @media screen and (max-width: 600px) {
          .flex-row{
            width: 25rem;
            margin: 2rem;
          }
        }

      `}
      </style>
      <body style={{
    background: "#222"
  }}>
        {/* Tools I use */}
        <div className='tools'>
        <h1>~Tools I Use</h1>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first" fluid>
    <Row sm={3}>
      <Col>
                <Nav variant="pills" className="flex-row">
          <Nav.Item>
            <Nav.Link eventKey="first"><div className="link">Frontend</div></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second"><div className="link">Backend</div></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third"><div className="link">UI</div></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="fourth"><div className="link">Graphic Design</div></Nav.Link>
          </Nav.Item>
                </Nav>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                        <Row className="justify-content-center mt-4">
            {skills.map((skill, index) => {
              return (
                <>
                  {skill.tab === "Frontend" && (
                    <>
                      <img key={index} style={{
                                  width: 15 + "rem"
                                }} src={skill.imgUrl} className="img-fluid mt-2" fluid />
                    </>
                  )}
                </>
              );
            })}
                        </Row>
                </Tab.Pane>
        <Tab.Pane eventKey="second">
        <Row className="justify-content-center mt-4">
            {skills.map((skill, index) => {
              return (
                <>
                  {skill.tab === "Backend" && (
                    <>
                      <img key={index} style={{
                                  width: 15 + "rem"
                                }} src={skill.imgUrl} className="img-fluid mt-2" fluid />
                    </>
                  )}
                </>
              );
            })}
                        </Row>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        <Row className="justify-content-center mt-4">
            {skills.map((skill, index) => {
              return (
                <>
                  {skill.tab === "Ui" && (
                    <>
                      <img key={index} style={{
                                  width: 12 + "rem"
                                }} src={skill.imgUrl} className="img-fluid mt-2" fluid />
                    </>
                  )}
                </>
              );
            })}
                        </Row>
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
        <Row className="justify-content-center mt-4">
            {skills.map((skill, index) => {
              return (
                <>
                  {skill.tab === "Graphic" && (
                    <>
                      <img key={index} style={{
                                  width: 12 + "rem"
                                }} src={skill.imgUrl} className="img-fluid mt-2" fluid />
                    </>
                  )}
                </>
              );
            })}
                        </Row>
        </Tab.Pane>
              </Tab.Content>
            </Row>
          </Tab.Container>
        </div>
      </body>
</>    
  )
}
