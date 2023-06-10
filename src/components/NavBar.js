import './NavBar.css'
import MenuItem from './MenuItems'
import React, { useState } from 'react'
const NavBar = () => {
    const [clicked,setclicked]=useState(false);
    const clickHandler=()=>
    {
        setclicked(!clicked);
    }

  return (
    <nav className='NavBarItems' >
       <a href='/'className='link' > <h1 className='navBar-logo'>Trippy</h1></a>
        <div className='menu-icons' onClick={clickHandler} >
            <i className={clicked ?"fas fa-times":"fas fa-bars"}></i>
        </div>
        <ul className={clicked ?'nav-menu active':"nav-menu "}>
            {
                MenuItem.map((value,index)=>
                {
                    return(
                        <li key={index}>
                        <a className={value.cName} href={value.url}>
                        <i className={value.icon} ></i>{value.title}
                        </a>
                       </li> 
                    );
                  
                })
            }
            <button >Sign</button>
        </ul>
    </nav>
    
  )
}

export default NavBar