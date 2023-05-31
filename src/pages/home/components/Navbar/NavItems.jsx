import React from 'react'
import { NavLinks } from './NavLinks';
import links from './DataLink';
import { useLocation } from 'react-router-dom';
import theme from 'design-system/config';

const NavItems = () => {
    const items = links();
    // Get Path Link
    const route = useLocation();
  return (
    items.map((link,idx)=>(
        <NavLinks color={route.pathname === link.navLink ? theme.active : theme.white} navLink={link.navLink} navText={link.navText} key={idx} />
      ))
  )
}

export default NavItems
