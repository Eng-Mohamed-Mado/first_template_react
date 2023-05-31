import React from 'react'
import { Links } from './style_Navbar'

export const NavLinks = ({navLink,navText,color}) => {
  return (
    
      <Links style={{color:color}} href={navLink}>{navText}</Links>
  )
}
