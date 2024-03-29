import React from 'react'
import buspic from '../picture files/busIlustration 1.svg'
import FormNew from './FormNew'
import {Cursor,useTypewriter} from 'react-simple-typewriter'

function Bus() {
  const [text,count]=useTypewriter({
    words:[
        'Check Bus Schedules, Compare Prices and Book Ticket Online'
    ],
    loop:false,
    delaySpeed:3000,
    

})
  return (
    <div className='flex flex-col items-center w-screen justify-center '>
    <div className='flex flex-col items-center text-center'>
    <h4 className='text-[#FDB022] text-[6vh] max-sm:text-[4vh] max-md:text-[4.4vh] font-semibold'>Book A Truck, Move Goods Easily</h4>
     <h5 className='text-[#475467] text-[2vh] max-lg:text-[1.9vh] w-full 
     font-medium'>  <span>  {text}<Cursor/></span></h5>
    
  </div> 
  <div>
      <FormNew/>
  </div>
  <div>
      <img
      src={buspic}
      alt=''
      />
  </div>
  </div>  )
}

export default Bus
