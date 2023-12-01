"use client";

import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid' 

import { InputLabel } from '../../../../../../components/input/input'
import { fichaData } from '../../../data/sendRequest';
import { registrarFicha } from '../../../data/sendRequest';
import { jornadaData } from '../../../data/sendRequest';
import { programaData } from '../../../data/sendRequest';

export const FormFicha = () => {
  const [nombreFicha, setNombreFicha] = useState('');
  const [estadoFicha, setEstadoFicha] = useState('');
  const [idProgramaFK, setIdProgramaFK] = useState(''); // Valor predeterminado 1 para "Activo"
  const [idJornadaFK, setIdJornadaFK] = useState('');

  const programa = programaData()
  const jornada = jornadaData()

  const handleSubmit = async (event) => {
    event.preventDefault();

    // almacenamos la infromacion de registro en un arreglo
    const FichaData = {
      id: uuidv4(),
      nombreFicha,
      estadoFicha,
      idProgramaFK,
      idJornadaFK,
    };

    // Metodo POST que utilizamos para agregar el instructor a nuestra bd
    try{
      await registrarFicha(FichaData)
      console.log("Registrado")
    }catch{
      console.log("Error en el formulario:", error.message);
    }
   
  };

  return (
    <>
      <h1 className='text-center text-2xl font-bold uppercase'>Registrar Ficha</h1>
      <form 
          className='flex flex-col items-center justify-center w-[880px]'
          onSubmit={handleSubmit}>
          <div className='grid grid-cols-8 p-4 items-center justify-center gap-x-2 gap-y-2 mb-4 w-[100%]'>
            <InputLabel
              col="8"
              label={"Numero identificación ficha"}
              htmlId="nombreficha"
              value={nombreFicha}
              onChange={setNombreFicha} 
              inputProps={{ id: "nombreFicha" }}
              />
            <select
              className='appearance-none mt-4 col-span-2 text-lg text-gray-500 p-3 font-light rounded-lg shadow-md outline-none border'
              value={estadoFicha}
              onChange={(e) => setEstadoFicha(e.target.value)}
            >
              <option value="1">Activo</option>
              <option value="0">Inactivo</option>
            </select>
            <select
                className='appearance-none mt-4 col-span-2 text-lg text-gray-500 p-3 font-light rounded-lg shadow-md outline-none border'
                name="idProgramafk"
                value={idProgramaFK}
                onChange={(e) => setIdProgramaFK(e.target.value)}
              >
                {
                  programa.map((item)=>(
                    <option key={item.id} value={item.id}>{item.nombrePrograma}</option>
                  ))
                }
              </select>
              <select
                className='appearance-none mt-4 col-span-4 text-lg text-gray-500 p-3 font-light rounded-lg shadow-md outline-none border'
                name="idJornadaFk"
                value={idJornadaFK}
                onChange={(e) => setIdJornadaFK(e.target.value)}
              >
                {
                  jornada.map((item)=>(
                    <option key={item.id} value={item.id}>{item.nombreJornada}</option>
                  ))
                }
              </select>
              
          </div>
        <button className='bg-primary rounded-md text-center text-white shadow-md p-4' type="submit">Registrar Instructor</button>
      </form>
    </>
  )
}