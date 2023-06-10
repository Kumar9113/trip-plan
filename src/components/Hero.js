import './Hero.css'
import React from 'react'




const Hero = (props) => {
  return (
    <>
    <div className={props.cName}>
        <img className={props.mid} alt='helpimg'src={props.img}></img>
        <div className='hero-text'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href='' className={props.btnClass}>{props.buttonText}</a>
        </div>
        
    </div>
    </>
  )
}

export default Hero