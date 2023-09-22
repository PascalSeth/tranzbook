import React from 'react'
import five from '../picture files/5.png'

function About() {
  return (
    <div className='flex flex-col items-center p-[6vw]'>
    <div className='flex flex-col items-center'>
      <h4 className='text-[5vh] font-semibold pb-[3vh]'>About <u>Us</u></h4>
      <h5 className='text-[2vh] font-medium'>Everything About us and more...</h5>
    </div>
<div className='flex pt-[8vh] max-lg:flex-col'>    
<div className='pleft'>
<h5 className='h55'>TranzBook is a transportation and logistics technology solution that enables travelers to book bus tickets and cargo vehicles for their goods through web and mobile applications.</h5>
<h5 className='h55'>The platform allows travelers to search for available bus routes, view schedules, and book tickets online. They can also choose their preferred seat and pay for their ticket securely through the platform. The solution also provides real-time updates on the status of the bus and estimated arrival times. </h5>
<h5 className='h55'>For cargo vehicle booking, the platform enables businesses or individuals to identify the nearest available vehicles, and book transportation services for their goods. They can also track the movement of their goods in real-time, receive delivery notifications, and manage their shipments through the platform. </h5>
<h5 className='h55'>Our solution typically uses advanced logistics management software and GPS tracking technology to optimize routes and improve delivery efficiency. This helps to reduce costs and improve delivery times, while providing a seamless customer experience for both travelers and cargo shippers. </h5>

    </div>
<div className='pright max-lg:pt-[6vh]'>
<h5 className='h55'>1. Be the number one transportation and logistics partner in Africa</h5>
<h5 className='h55'>2. To create a community of travelers, shippers, and carriers who share our vision of a more connected and sustainable future, and work together to build a transportation ecosystem that is inclusive, transparent, and accessible to all</h5>
<h5 className='h55'>3. To become the go-to technology provider for transportation solutions in the country, by offering the most comprehensive, user-friendly, and efficient platform for online bus ticketing and cargo/truck booking services, while ensuring the highest standards of safety, security, and sustainability</h5>


</div>      
    
    </div>
<div>
<img src={five} alt=''/>
</div>
  </div>
  )
}

export default About
