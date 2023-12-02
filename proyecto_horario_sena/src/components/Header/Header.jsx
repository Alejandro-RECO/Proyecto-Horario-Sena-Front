import React from 'react'
import { Link } from 'react-router-dom';

import { ModalSignOff } from './components/modalLogout';

import { 
  RiAccountCircleLine,
  RiLogoutCircleRLine
} from "react-icons/ri";

const Header = () => {

  const [openModalDelet, setOpenModalSignOff]= React.useState(false)


  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false)
  };


  const handleopenModalSignOff = ()=>{
    setOpenModalSignOff(true)
    handleClose();
  }



  return (
    <header className=' h-[7vh] md:h-[10vh] xl:ml-1 bg-primary p-8 flex items-center justify-between xl:rounded-bl shadow-xl'>
      <Link to="/">
        <img className='object-cover h-12' src="/logoSenaCort.png" alt="Logo Sena" />
      </Link>
        <div className='flex items-center gap-4 text-3xl text-secondary-100'>
          <Link to='/'>
           <RiAccountCircleLine/>
          </Link>
          <button onClick={handleopenModalSignOff}>
           <RiLogoutCircleRLine/>
          </button>
          <ModalSignOff
            open={openModalDelet}
            handleClose={()=> setOpenModalSignOff(false)}
          />
        </div>
    </header>
  )
}

export default Header