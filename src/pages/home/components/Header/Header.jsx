import React from 'react'
import { H3, HeaderWrapper, LearnMore, RegisterNow, Title } from './style_header'

const Header = () => {
  return (
    <HeaderWrapper>
      <H3>July 22 - 26 in San Francisco, CA</H3>
      <Title>Web Design Conference</Title>
      <LearnMore>LEARN MORE</LearnMore>
      <RegisterNow>REGISTER NOW</RegisterNow>
    </HeaderWrapper>
  )
}

export default Header
