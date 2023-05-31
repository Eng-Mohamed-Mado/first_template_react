import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Overview from './components/Overview'
import WatchVideo from './components/WatchVideo'
const Home = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <About/>
        <Overview/>
        <WatchVideo/>
    </>
  )
}

export default Home
