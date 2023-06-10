import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import img from '../assets/1.jpg'
import Footer from '../components/Footer'
import Contactform from '../components/Contactform'


const Contact = () => {
  return (
    <div>
       <NavBar></NavBar>
      <Hero cName='hero-mid' img={img} title='Contact' btnClass='hide'></Hero>
    <Contactform>
      

    </Contactform>
    <Footer></Footer>
    
    </div>
  )
}

export default Contact