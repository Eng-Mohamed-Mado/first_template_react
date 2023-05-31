import React from 'react'
import { AboutWrapper, Div, DivImag, Pr, Span } from './style_about'
import aboutimg from 'images/img/overview-img.jpg'
const About = () => {
  return (
    <div className='container'>
        <AboutWrapper>
            <Div>
                <Span>New Event is a fully responsive one-page template for events, conferences or workshops.
                </Span>
                <Pr>This is a Bootstrap v3.3.6 layout that is responsive and mobile friendly. You may download and modify this template for your website. Please tell your friends about templatemo.
                </Pr>
                <Pr>Quisque facilisis scelerisque venenatis. Nam vulputate ultricies luctus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
                </Pr>
            </Div>
            <DivImag>
                <img width='100%' src={aboutimg} alt='img1'/>
            </DivImag>
        </AboutWrapper>
    </div>
  )
}

export default About
