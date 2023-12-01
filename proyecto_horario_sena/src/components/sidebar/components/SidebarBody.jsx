import { useState } from 'react'
import { Link } from 'react-router-dom'

import { items } from '../sidebarItems/items';


export const SidebarBody = () => {

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className='py-6 px-4 flex flex-col justify-between bg-primary h-full rounded-tr'>
      <div>
        <ul className='w-full flex flex-col gap-4'>
        {items.map((item) => (
          <Link key={item.title} to={item.to}>
            <li
              className={`flex py-2 px-3 items-center gap-5  text-[15px] rounded-md hover:bg-secondary-100 hover:text-primary transition-colors border-secondary-100 ${
                activeItem === item ? 'bg-secondary-100 text-primary' : 'text-secondary-100'
              }`}
              onClick={() => handleItemClick(item)}
            >
              {item.icono}
              {item.title}
            </li>
          </Link>
      ))}
        </ul>
      </div>
      <div className='text-center flex flex-col items-center justify-center gap-2 pt-5'>
        <img className='object-cover h-6 ' src="./logoSena.png" alt="" />
        <p className='text-[10px] text-secondary-100'>El SENA es nuestra estrella y tiene que seguir alumbrando</p>
        <a className='text-[12px] border-b-2 border-secondary-100/60 text-secondary-100/60 hover:text-secondary-100 hover:border-secondary-100 transition-colors' to="/">horariossena92@gmail.com</a>
      </div>
    </div>
  )
}
