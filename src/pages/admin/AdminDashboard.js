import React from 'react'
import AdminSidebar from './AdminSidebar'
import Dashinfo from './Dashinfo'

export default function AdminDashboard() {
  return (
    <div className='flex overflow-hidden w-[100%] h-[100%] '>
      <div className='flex-[0.07] w-fit'>
<AdminSidebar/></div>
      <div className='flex-[0.9]'>
<Dashinfo/>
      </div>
    </div>
  )
}
