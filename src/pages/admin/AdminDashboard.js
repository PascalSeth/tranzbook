import React from 'react'
import AdminSidebar from './AdminSidebar'
import Dashinfo from './Dashinfo'

export default function AdminDashboard() {
  return (
    <div className='flex '>
      <div className='w-fit'>
<AdminSidebar/></div>
      <div className='w-[100%]'>
<Dashinfo/>
      </div>
    </div>
  )
}
