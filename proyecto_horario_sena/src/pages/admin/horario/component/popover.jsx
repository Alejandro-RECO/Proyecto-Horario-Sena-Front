import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const BasicPopover =({
    ambiente,
    ficha,
    jornada,
    sede,
    tematica,
    trimestre

}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button sx={{color:'white', bgcolor:'success.main'}} aria-describedby={id} variant="contained" onClick={handleClick}>
        INFO
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
        }}
        
      >
      <div className='grid grid-cols-2 p-2 py-4 gap-2 rounded'>
      <h1 className='font-bold text-xl text-center pl-2'>INFORMACIÓN</h1>
      <div className='col-span-2 borde rounded-sm border-t-2 border-primary'>
        <Typography sx={{ p: 1 }} className='px-4 flex justify-between items-center' >
            <h1 className=''>AMBIENTE:</h1>
            <span className='font-bold'>{ambiente}</span>
        </Typography>
        <Typography sx={{ p: 1 }} className='px-4 flex justify-between items-center' >
            <h1 className=''>FICHA:</h1>
            <span className='font-bold'>{ficha}</span>
        </Typography>
        <Typography sx={{ p: 1 }} className='px-4 flex justify-between items-center' >
            <h1 className=''>JORNADA:</h1>
            <span className='font-bold'>{jornada}</span>
        </Typography>
        <Typography sx={{ p: 1 }} className='px-4 flex justify-between items-center' >
            <h1 className=''>SEDE:</h1>
            <span className='font-bold'>{sede}</span>
        </Typography>
        <Typography sx={{ p: 1 }} className='px-4 flex justify-between items-center ' >
            <h1 className=''>TEMATICA:</h1>
            <span className='font-bold'>{tematica}</span>
        </Typography>
        <Typography sx={{ p: 1 }} className='px-4 flex justify-between items-center' >
            <h1 className=''>TRIMESTRE:</h1>
            <span className='font-bold'>{trimestre}</span>
        </Typography>
      </div>

      </div>
      </Popover>
    </div>
  );
}
