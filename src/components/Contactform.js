import './Contactform.css'
import React, { useState } from 'react'
import axios from 'axios'
const Contactform = () => {
  const[data,setData]=useState({
    Name:"",
    Email:"",
    Subject:"",
    Message:""
  })


  const{Name,Email,Subject,Message}=data;
  const ChangeHandler=(e)=>
  {
    setData({...data,[e.target.name]:e.target.value});
  }
  const SubmitHandler=(e)=>
  {
    e.preventDefault();
    console.log(data);
    try
    {
      axios.post("localhost:3000/user",data).then((res)=>
      {
  
      })

    }
    catch(err)
    {
      console.log(err.message)
    }
   
  }
  return (
    <div className='form-container'>
        <form onSubmit={SubmitHandler}>
        <h1>Send a messge to use</h1>
        <label for="Name">Name</label>
        <input type="text" id='Name' name='Name' value={Name} placeholder='Name' onChange={ChangeHandler}></input>
        <label for="Email">Email</label>
        <input type="Email" id='Email' name='Email' value={Email} placeholder='Email' onChange={ChangeHandler}></input>
        <label for="Subject">Subject</label>
        <input type="text" id='Subject'name='Subject' value={Subject} placeholder='Subject' onChange={ChangeHandler}></input>
        
        <textarea rows="5" name='Message' value={Message} placeholder='Message' onChange={ChangeHandler}></textarea>
        <button>Send Messge</button>
        </form>
    </div>
  )
}

export default Contactform