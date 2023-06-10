import React from 'react'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Destination from '../components/Destination'
import Triprecent from '../components/Triprecent'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
    <NavBar></NavBar>
    <Hero
    cName='hero' 
    img="https://images.unsplash.com/photo-1556634202-129a046351c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    title='Your Journey Your Story'
    text="Choose Your Favotite Destination"
    buttonText="Traval Plan"
    url="/"
    btnClass='show'></Hero>
    <Destination></Destination>
    <Triprecent></Triprecent>
    <Footer></Footer>
    
    </>
  )
}

export default Home