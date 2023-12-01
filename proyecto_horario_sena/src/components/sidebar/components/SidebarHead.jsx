import React from 'react'
import { Link } from 'react-router-dom';

import { 
  RiSearchLine,
  RiHome3Line } from "react-icons/ri";


export const SidebarHead = () => {
  return (
    <div className='p-8 flex flex-col items-start justify-center gap-6 bg-primary rounded-br'>
      <div className='flex items-center gap-6 text-xl text-secondary-100 font-semibold tracking-wider cursor-pointer'>
        <RiHome3Line className="w-7 h-7"/>
        <Link to="home">HOME</Link>
      </div>
    </div>  
  )
}
