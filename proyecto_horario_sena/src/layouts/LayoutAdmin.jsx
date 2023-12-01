import React from 'react'
import { Outlet } from 'react-router-dom'

// pages 
import Sidebar from '../components/sidebar/Sidebar'
import Header from '../components/Header/Header'

export const LayoutAdmin = () => {
  return (
    <div className='min-h-screen grid grid-cols-1 xl:grid-cols-6'>
      <Sidebar/>     
      <div className=' xl:col-span-5 '>
        <Header />
        <div className='h-[90vh] overflow-y-scroll p-8'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
