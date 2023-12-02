"use client";


import { useState } from 'react'
import { InputLabel } from '../../../../../../components/input/inputUpdate';
import { actualizarJornada } from '../../../data/sendRequest';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Divider from '@mui/material/Divider';

export const ModalJornada = ({
  open, 
  handleClose,
  id, 
  nombreJornada,
  diaIniJor,
  diaFinJor,
  estadoJornada,
}) => {
  
  // ALmacenamos la informacion que actualizaremos en un estado para luego enviarla al metodo PUT
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [jornadaData, setJornadaData] = useState({
    nombreJornada: nombreJornada,
    diaIniJor: diaIniJor,
    diaFinJor:diaFinJor,
    estadoJornada: estadoJornada,
  });


//  Almacenamos la informacion de los input en su respectiva constante
const handleInputChange = (e) => {
  if (e && e.target && e.target.name) {
    const { name, value } = e.target;
    setJornadaData({
      ...jornadaData,
      [name]: value,
    });
  }
};
  // Metodo PUT para acutializar lainformacion del instructor
  const handleActualizar = async () => {
    setLoading(true);

    try {
      await actualizarJornada(id, jornadaData, handleClose);
      window.location.reload()
    } catch (error) {
      console.error("Error al actualizar la instructor:", error.message);
      setError(error.message || 'Error al actualizar la instructor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ACTUALIZAR</DialogTitle>
        <Divider/>
        <DialogContent>
          <h1 className='text-xl text-center font-semibold uppercase text-gray-500 pb-4'>{nombreJornada} | ID: {id}</h1>
          <div className='flex items-center justify-center py-4 gap-4'>
            <div className='grid grid-cols-4 py-4 gap-4'>
              <InputLabel
                col={2}
                htmlId="nombre"
                label="Nombre"
                name="nombreJornada"
                value={jornadaData.nombreJornada}
                onChange={handleInputChange}
              />
              <InputLabel
                col={2}
                htmlId="diaIni"
                label="Dia Inicio"
                name="diaIni"
                value={jornadaData.diaIniJor}
                onChange={handleInputChange}
              />
              <InputLabel
                col={4}
                htmlId="diaFin"
                label="Dia Fin"
                name="numDocInst"
                value={jornadaData.diaFinJor}
                onChange={handleInputChange}
              />
              <select
                className='shadow-lg col-span-2 p-2 border rounded-md focus:outline-none appearance-none'
                name="estadoInstructor"
                value={jornadaData.estadoJornada}
                onChange={handleInputChange}
              >
                <option value="1">Activo</option>
                <option value="0">Inactivo</option>
              </select>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button 
            className='p-2 border rounded-md hover:shadow-lg transition-all'
            onClick={handleActualizar} disabled={loading}>Actualizar</button>
          <button 
            className='p-2 bg-red-500 text-white border rounded-md hover:shadow-lg transition-all'
            onClick={handleClose}>Cerrar</button>
        </DialogActions>
        {loading && <p className='text-center'>Actualizando...</p>}
        {error && <p className='text-center text-red-500'>Error: {error}</p>}
      </Dialog>
    </>

  )
}
