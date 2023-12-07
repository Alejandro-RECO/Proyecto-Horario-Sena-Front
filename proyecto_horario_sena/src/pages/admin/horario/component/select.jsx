import { useState } from "react";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { 
    RiMoreLine,
    RiPencilLine,
    RiDeleteBin7Line
  } from "react-icons/ri";
  
export const MenuHorario = ({

}) => {

const [open, setOpen] = useState(false)
const [openModal, setOpenModal]= useState(false)

const [openModalDelet, setOpenModalDelet]= useState(false)

const [anchorEl, setAnchorEl] = useState(null);

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
  setOpen(true)
};

const handleClose = () => {
  setAnchorEl(null);
  setOpen(false)
};

const handleopenModal = ()=>{
  setOpenModal(true)
  handleClose();
}

const handleopenModalDelet = ()=>{
  setOpenModalDelet(true)
  handleClose();
}

return (
  <div>
    <Button
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
    >
      <RiMoreLine className='text-2xl text-primary'/>
    </Button>
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem onClick={handleopenModal}><span className='mx-2'><RiPencilLine/></span>Actualizar</MenuItem>
      <MenuItem onClick={handleopenModalDelet}><span className='mx-2 text-red-500'><RiDeleteBin7Line/></span>Eliminar</MenuItem>
    </Menu>
  </div>
);
}
