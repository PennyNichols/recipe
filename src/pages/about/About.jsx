import React from 'react'
import { AboutContainer, HeaderContainer, InfoContainer, StyledImage } from './AboutStyles'
import codeSvg from '../../assets/coding.svg'


const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={codeSvg} />
      <HeaderContainer>
        <h1>About Software Developer</h1>
        <span>Penny Nichols</span>
      </HeaderContainer>
      <InfoContainer>
        <h1> I'm Penny </h1>
        <h2>I'm currently learning Full-Stack Development Languages.</h2>
        <h2> I already know HTML, CSS, JavaScript, ReactJS, ExpressJS, nodeJS, ClearDB, SQL, Python, Linux, etc. </h2>
        <h2><a href="mailto:pnichols789@gmail.com">Send Email</a> to pnichols789@gmail.com</h2>
      </InfoContainer>
    </AboutContainer>
  )
}

export default About