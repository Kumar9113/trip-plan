import './Destination.css'
import React from 'react'


const DestinationData = (props) => {
  return (
  
    <div className={props.className}>
        <div className='des-text'>
            <h2>{props.header}</h2>
            <p>{props.text}</p>
        </div>
        <div className='image'>
            <img alt="" src={props.img1} />
            <img alt="" src={props.img2} />
        </div>
    </div>

  )
}

export default DestinationData