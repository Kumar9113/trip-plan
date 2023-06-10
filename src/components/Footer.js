import './Footer.css'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div>
            <h1>Trippy</h1>
            <p>Choose your favorrite destination</p>
        </div>
        <div>
            <a href='/'>
                <i className='fa-brands fa-facebook-square'></i>
                <i className='fa-brands fa-instagram-square'></i>
                <i className='fa-brands fa-behance-square'></i>
                <i className='fa-brands fa-twitter-square'></i>
               
            </a>
        </div>
        </div>
        <div className='bottom'>
            <div>
                <h4>Project</h4>
                <a href='/'>Changelog</a>
                <a href='/'>Status</a>
                <a href='/'>License</a>
                <a href='/'>All versions</a>
            </div>
            <div>
                <h4>Project</h4>
                <a href='/'>Changelog</a>
                <a href='/'>Status</a>
                <a href='/'>License</a>
                <a href='/'>All versions</a>
            </div>
            <div>
                <h4>Project</h4>
                <a href='/'>Changelog</a>
                <a href='/'>Status</a>
                <a href='/'>License</a>
                <a href='/'>All versions</a>
            </div>
            <div>
                <h4>Project</h4>
                <a href='/'>Changelog</a>
                <a href='/'>Status</a>
                <a href='/'>License</a>
                <a href='/'>All versions</a>
            </div>

        </div>
    </div>
   
  )
}

export default Footer