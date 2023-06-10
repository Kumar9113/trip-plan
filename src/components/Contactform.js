import './Contactform.css'
import React from 'react'

const Contactform = () => {
  return (
    <div className='form-container'>
        <form>
        <h1>Send a messge to use</h1>
        <label for="Name">Name</label>
        <input type="text" id='Name' placeholder='Name'></input>
        <label for="Email">Email</label>
        <input type="Email" id='Email' placeholder='Email'></input>
        <label for="Subject">Subject</label>
        <input type="text" id='Subject' placeholder='Subject'></input>
        
        <textarea rows="5"  placeholder='Message'></textarea>
        <button>Send Messge</button>
        </form>
    </div>
  )
}

export default Contactform