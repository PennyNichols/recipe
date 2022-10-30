import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Logo, Hamburger, Menu, MenuLink } from './NavbarStyles'

const Navbar = ({setIsAuth, isAuth}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo to='/'>
        <i>{"<PennyNichols/>"}</i>
        <span>recipe</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span/>
        <span/>
        <span/>
      </Hamburger>
      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink as='a' href="https://github.com/PennyNichols" target="_blank" rel='noopener noreferrer'>GitHub</MenuLink>
        { isAuth && <MenuLink to="/login" onClick={()=> {setIsAuth(false); localStorage.removeItem('Auth')}}>Log Out</MenuLink>}
        {!isAuth && <MenuLink to="/login">Log In</MenuLink>}
      </Menu>
    </Nav>
  )
}

export default Navbar