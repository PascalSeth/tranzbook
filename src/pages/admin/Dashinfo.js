import React from 'react'
import dashlogo from '../../picture files/L1 3.png'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import dashprofile from '../../picture files/2.png'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Dashinterface from './Dashinterface';

export default function Dashinfo() {
  return (
    <div className='flex flex-col items-center '>
      <div className='p-[2vh] items-center justify-center'>
<img src={dashlogo} alt='' className='object-contain'/>
      </div>
      <div className='flex  items-center space-x-[8vw]'>
<div>
    <h2 className='font-bold text-[3vh] text-[#48A1FF]'>Home</h2>
</div>
<div className='w-[50vw] bg-[#F4FCFF] p-[1vh]'>
    <input className='outline-none bg-transparent' placeholder='Search'/>
</div>
<div className='flex space-x-4 items-center'>
    <NotificationsActiveOutlinedIcon/>
    <div className='flex items-center'>
<img className='object-contain h-[6vh] rounded-[100%] w-[full]' src={dashprofile} alt=''/>
<div className='flex flex-col items-center w-fit'>
    <h1 className='text-[#48A1FF] text-[2.4vh] font-semibold'>Gabriel A</h1>
    <h2 className='text-orange-400 font-bold text-[2vh]'>LogOut</h2>
</div></div>
<MoreVertOutlinedIcon/>
</div></div>

 <div className='w-100%'>
    <Dashinterface/>
    </div>     
    </div>
  )
}
