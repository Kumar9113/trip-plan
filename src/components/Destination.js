import './Destination.css'
import React from 'react'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import DestinationData from './DestinationData'

const Destination = () => {
  return (
    <div className='destination'>
        <h1>Popular Destination</h1>
        <p>Tours give you the opportunity</p>
         <DestinationData 
         className="first-des"
          header="Taal Volcano, Batangas"
          text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
          img1={img1}
          img2={img2}
          ></DestinationData>
           <DestinationData 
           className="first-des-reverse"
          header="Mt. Daguldul, Batangas"
          text="If you're looking for a hike that's a little more challenging but still good for a beginner mountaineer, check out Mt. Daguldul in San Juan, Batangas. You'll start your hike from the beach and pass through tropical forest, different ock formations, and small streams. There's a small store halfway up the trail where you can takea break and drink buko juice, and though the summit itself may not have the best view, the breeze is fantastic. Once you've made it back down, head straight to the beach for a refreshing, well-deserved swim."
          img1={img3}
          img2={img4}
          ></DestinationData>
    </div>
  )
}

export default Destination