import React, { useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import { 
  Nav,
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  Navlinks,
  NavBtn,
  NavBtnLink 
} from './NavbarElements'

export default function Navbar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>dolla</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <Navlinks 
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >About</Navlinks>
            </NavItem>
            <NavItem>
              <Navlinks
                to='discover'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >Discover</Navlinks>
            </NavItem>
            <NavItem>
              <Navlinks 
                to='services'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >Services</Navlinks>
            </NavItem>
            <NavItem>
              <Navlinks 
                to='signup'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >Sign Up</Navlinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav> 
    </>
  )
}
