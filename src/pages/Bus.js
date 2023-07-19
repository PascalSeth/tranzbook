import React from 'react'
import second from '../picture files/busIlustration 1.svg'
import './bus.css'
import FormNew from './FormNew'

function Bus() {
  return (
    <div className='Bus'>
      <div className='title'>
      <h4 className='orange'>Book A Bus, Journey With Ease...</h4>
      <h5 className='normal'> Check Bus Schedules, Compare Prices and Book Ticket Online</h5>
    </div>
  <div className='fill'>
<FormNew/>
<div className='fill-in'>
<img src={second} alt=''/>
</div>
</div>
    </div>
  )
}

export default Bus
