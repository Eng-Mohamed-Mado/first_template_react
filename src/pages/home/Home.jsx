import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Overview from './components/Overview'
import WatchVideo from './components/WatchVideo'
import CreativeSpeakers from './components/CreativeSpeakers'
import OurPrograms from './components/OurPrograms'
import RegisterHere from './components/RegisterHere'
import Accordion from './components/Accordion'
import Venue from './components/Venue'
import OurSponsorsP from './components/OurSponsors/OurSponsorsP'
import Contact from './components/Contact'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <About/>
        <Overview/>
        <WatchVideo/>
        <CreativeSpeakers/>
        <OurPrograms/>
        <RegisterHere/>
        <Accordion/>
        <Venue/>
        <OurSponsorsP/>
        <Contact/>
    </>
  )
}

export default Home
