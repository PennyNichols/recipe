import React from 'react'
import { AboutContainer, HeaderContainer, InfoContainer, StyledImage } from './AboutStyles'
import logo from '../../assets/logo.png'


const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={logo} />
      <HeaderContainer>
        <h1 className='first'>About Software Developer</h1>
        <span>Penny Nichols</span>
      </HeaderContainer>
      <InfoContainer>
        <h1> I'm Penny </h1>
        <p>I'm currently learning Full-Stack Development Languages.</p>
        <p> I already know HTML, CSS, JavaScript, ReactJS, ExpressJS, nodeJS, ClearDB, SQL, Python, Linux, etc. </p>
        <p><a href="mailto:pnichols789@gmail.com">Send Email</a> to pnichols789@gmail.com</p>
      </InfoContainer>
    </AboutContainer>
  )
}

export default About