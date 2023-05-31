import React from 'react'
import { LinksWrapper, NavContainer, NavLogo, NavTitle, NavbarWrapper } from './style_Navbar';
import NavItems from './NavItems';
const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className='container'>
        <NavContainer>
            <div>
            <NavTitle>New <NavLogo>Event</NavLogo></NavTitle>
            </div>
            <LinksWrapper>
              <NavItems/>
            </LinksWrapper>
        </NavContainer>
      </div>
    </NavbarWrapper>
  )
}

export default Navbar
