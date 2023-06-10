import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import img from '../assets/2.jpg'
import Footer from '../components/Footer'

const Service = () => {
  return (
    <div>
       <NavBar></NavBar>
      <Hero cName='hero-mid' img={img}title='Service' btnClass='hide'></Hero>
    <Footer></Footer>
    </div>
  )
}

export default Service