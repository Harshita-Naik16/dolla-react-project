import React from 'react'
import { 
  CloseIcon,
  Icon, 
  SidebarContainer, 
  SidebarLink, 
  SidebarMenu, 
  SidebarRoute, 
  SidebarWrapper, 
  SideBtnWrap
} from './SidebarElements.jsx'

export default function Sidebar({ toggle, isOpen }) {

  return (
    <SidebarContainer onClick={toggle} isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon onClick={toggle}/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
          <SidebarLink to='discover' onClick={toggle}>Discover</SidebarLink>       
          <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
          <SidebarLink to='signup' onClick={toggle}>Sign up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}
