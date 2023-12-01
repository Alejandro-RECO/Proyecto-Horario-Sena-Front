"use client";

import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid' 
import { programaId } from '../../../data/sendRequest';
import { trimestreId } from '../../../data/sendRequest';

import { InputLabel } from '../../../../../../components/input/input'

export const FormTematica = () => {
  const [nombreTematica, setNombreTematica] = useState('');
  const [descripcionTematica, setDescripcionTematica] = useState('');
  const [horasMaximasM, setHorasMaximasM] = useState(""); // Valor predeterminado 1 para "Activo"
  const [horasMaximasS, setHorasMaximasS] = useState('');
  const [trimestre, setTrimestre] = useState('');
  const [estadoTematica, setEstadoTematica] = useState('');
  const [idProgramaFK, setIdProgramaFK] = useState('');

  const idPrograma = programaId()
  const idTrimestre = trimestreId()

  const handleSubmit = async (event) => {
    event.preventDefault();

    // almacenamos la infromacion de registro en un arreglo
    const tematicaData = {
      id: uuidv4(),
      nombreTematica,
      descripcionTematica,
      horasMaximasM,
      horasMaximasS,
      trimestre,
      estadoTematica,
      idProgramaFK
    };

    // Metodo POST que utilizamos para agregar la tematica a nuestra bd
    // Mejorar codigo para cumplir con buenas practicas
    try {
      await axios.post('http://localhost:3000/tematica', tematicaData);

        // Manejo de error
        if(!tematicaData.nombreTematica){
          return new error ("Nombre requerido", { status: 400 })
        }
        if(!tematicaData.descripcionTematica){
          return new error ("Descripcion requerida", { status: 400 })
        }
        if(!tematicaData.horasMaximasM){
          return new error ("Horas semanales requerido", { status: 400 })
        }
        if(!tematicaData.horasMaximasS){
          return new error ("Horas Mensuales requerido", { status: 400 })
        }
        if(!tematicaData.trimestre){
          return new error ("Trimestre requerido", { status: 400 })
        }
        if(!tematicaData.estadoTematica){
          return new error ("Estado requerido", { status: 400 })
        }
        if(!tematicaData.idProgramaFK){
          return new error ("Programa requerido", { status: 400 })
        }

        console.log("Registrado")
        window.location.reload(); // Recarga la página
    } catch (error) {
        console.log("REGISTER_PATCH", error)
        return new error("Internal error", {status: 500})
    }
  };

  return (
    <>
      <h1 className='text-center text-2xl font-bold uppercase'>Registrar Temática</h1>
      <form 
          className='flex flex-col items-center justify-center w-[880px]'
          onSubmit={handleSubmit}>
          <div className='grid grid-cols-8 p-4 items-center justify-center gap-x-2 gap-y-2 mb-4 w-[100%]'>
            <InputLabel
              col="4"
              label={"Nombre"}
              htmlId="nomTematica"
              value={nombreTematica}
              onChange={setNombreTematica} 
              inputProps={{ id: "nomTematica" }}
              />
            <InputLabel 
              col="2"
              label={"Horas Mensuales"}
              htmlId="horasMaximasM"
              value={horasMaximasM}
              onChange={setHorasMaximasM} 
              inputProps={{ id: "horasMaximasM" }}
              />
            <InputLabel 
              col="2"
              label={"Horas Semanales"}
              htmlId="horasMaximasS"
              value={horasMaximasS}
              onChange={setHorasMaximasS} 
              inputProps={{ id: "horasMaximasS" }}
              />
            <InputLabel 
              col="8"
              label={"Descripción"}
              htmlId="descrip"
              value={descripcionTematica}
              onChange={setDescripcionTematica} 
              inputProps={{ id: "descrip" }}
              />
            <select
                className='appearance-none mt-4 col-span-4 text-lg text-gray-500 p-2 font-light rounded-md shadow-md outline-none border'
                name="trimestre"
                value={trimestre}
                onChange={setTrimestre}
                >
                  {
                  // Mapeo de la informacion que pertenece al parametro tipos doc en bd 
                  idTrimestre.map((item)=>(
                    <option key={item.id} value={(item.id)}>{item.nombreTrimestre}</option>
                  ))
                  }
            </select>
            <select
              className='appearance-none mt-4 col-span-4 text-lg text-gray-500 p-2 font-light rounded-md shadow-md outline-none border'
              value={estadoTematica}
              onChange={(e) => setEstadoTematica(e.target.value, 10)}
            >
              <option value="1">Activo</option>
              <option value="0">Inactivo</option>
            </select>
            <select
                className='appearance-none mt-4 col-span-8 text-lg text-gray-500 p-2 font-light rounded-md shadow-md outline-none border'
                name="idTpoIdentificacionFK"
                value={idProgramaFK}
                onChange={(e) => setIdProgramaFK(e.target.value, 10)}
              >
                {
                  idPrograma.map((item) =>(
                    <option key={item.id} value={item.id}>{item.nombrePrograma}</option>
                  ))
                }
              </select>
          </div>
        <button className='bg-primary rounded-md text-center text-white shadow-md p-4' type="submit">Registrar</button>
      </form>
    </>
  )
}

