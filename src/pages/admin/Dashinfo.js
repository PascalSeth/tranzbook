import React from 'react'
import dashlogo from '../../picture files/L1 3.png'
import Dashinterface from './Dashinterface';
import AdminHeader from './AdminHeader';

export default function Dashinfo() {
  return (
    <div className='flex flex-[0.8] flex-col items-center w-full overflow-hidden '>
      <div className='p-[2vh] items-center justify-center'>
<img src={dashlogo} alt='' className='object-contain'/>
      </div>
      <div className='w-full'>
    <AdminHeader/>
    </div>
 <div className='w-full'>
    <Dashinterface/>
    </div>     
    </div>
  )
}
