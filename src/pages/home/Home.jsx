import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Overview from './components/Overview'
import WatchVideo from './components/WatchVideo'
import CreativeSpeakers from './components/CreativeSpeakers'
import OurPrograms from './components/OurPrograms'
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
    </>
  )
}

export default Home
