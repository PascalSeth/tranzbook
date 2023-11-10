import React from 'react'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import dashprofile from '../../picture files/2.png'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

export default function AdminHeader() {
  return (
    <header className='flex flex-col items-center w-full '>
<div className='flex w-full items-center justify-between'>
   
    <div>
        <h2 className='font-bold text-[3vh] text-[#48A1FF]'>Home</h2>
    </div>
   
    <div className='w-[40vw] bg-[#F4FCFF] p-[1vh]'>
        <input className='outline-none bg-transparent' placeholder='Search'/>
    </div>
    
    <div className='flex  items-center space-x-[2vw]'>
        <NotificationsActiveOutlinedIcon/>
        <div className='flex items-center'>
    <img className='object-contain h-[6vh] rounded-[100%] w-[full]' src={dashprofile} alt=''/>
    <div className='flex  flex-col items-center w-fit max-lg:hidden'>
        <h1 className='text-[#48A1FF] text-[2.4vh] font-semibold'>Gabriel A</h1>
        <h2 className='text-orange-400 font-bold text-[2vh]'>LogOut</h2>
    </div></div>
    <MoreVertOutlinedIcon/>
    </div>
    </div>
    </header>
        
  )
}
