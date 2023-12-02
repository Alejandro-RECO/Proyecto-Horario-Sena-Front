
import { useState } from 'react'
import { registrarJornada } from '../../../data/sendRequest';

import { InputLabel } from '../../../../../../components/input/input'

export const FormInstructor = () => {
  const [nombreJornada, setNombreJornada] = useState('');
  const [diaIniJor, setDiaIniJor] = useState('');
  const [diaFinJor, setDiaFinJor] = useState(''); // Valor predeterminado 1 para "Activo"
  const [estadoJornada, setEstadoJornada] = useState(1);



  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const jornadaData = {
        nombreJornada,
        diaIniJor,
        diaFinJor,
        estadoJornada,
      };
  
      await registrarJornada(jornadaData);
  
      // Realizar acciones adicionales después de registrar el instructor, si es necesario.
      console.log('Jornada registrado exitosamente');
    } catch (error) {
      // Manejar errores, mostrando un mensaje o realizando alguna acción específica.
      console.error('Error al registrar el instructor:', error.message);
    }
  }
  return (
    <>
      <h1 className='text-center text-2xl font-bold uppercase'>Registrar Jornada</h1>
      <form 
          className='flex flex-col items-center justify-center w-[880px]'
          onSubmit={handleSubmit}>
          <div className='grid grid-cols-8 p-4 items-center justify-center gap-x-2 gap-y-2 mb-4 w-[100%]'>
            <InputLabel
              col="4"
              label={"Nombre Jornada"}
              htmlId="nombreJornada"
              value={nombreJornada}
              onChange={setNombreJornada} 
              inputProps={{ id: "nombreJornada" }}
              />
            <InputLabel 
              col="4"
              label={"Dia inicio"}
              htmlId="diaIniJor"
              value={diaIniJor}
              onChange={setDiaIniJor} 
              inputProps={{ id: "diaIniJor" }}
            />
              <InputLabel 
              col="4"
              label={"Dia fin"}
              htmlId="diaFinJor"
              value={diaFinJor}
              onChange={setDiaFinJor} 
              inputProps={{ id: "diaFinJor" }}
            />
            <select
              className='appearance-none mt-4 col-span-4 text-lg text-gray-500 p-2 font-light rounded-sm shadow-md outline-none border'
              value={estadoJornada}
              onChange={(e) => setEstadoJornada(e.target.value, 10)}
            >
              <option value="1">Activo</option>
              <option value="0">Inactivo</option>
            </select>
          </div>
        <button className='bg-primary rounded-md text-center text-white shadow-md p-4' type="submit">Registrar Instructor</button>
      </form>
    </>
  )
}

