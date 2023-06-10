import React from 'react'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Aboutus from '../components/Aboutus'

const About = () => {
  return (
    <div>
      <NavBar></NavBar>
     
      <Hero cName='hero-mid' img="https://images.unsplash.com/photo-1543430704-9b1f6dbcec76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"title='About' btnClass='hide'></Hero>
      <Aboutus></Aboutus>
      <Footer></Footer>
      </div>
  )
}

export default About