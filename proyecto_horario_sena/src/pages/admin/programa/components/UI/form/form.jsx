
import { useState, useEffect } from 'react'
import { fetchDataTiposDoc } from '../../../data/sendRequest';
import { registrarPrograma } from '../../../data/sendRequest';

import { InputLabel } from '../../../../../../components/input/input'

export const FormPrograma = () => {
  const [estadoPrograma, setEstadoPrograma] = useState('1'); // Valor predeterminado 1 para "Activo"
  const [versionPrograma, setVersionPrograma] = useState('');
  const [descripcionProgram, setDescripcionProgram] = useState(''); 
  const [idPrograma, setIdPrograma] = useState('');
  const [nombrePrograma, setNombrePrograma] = useState('');

  const [tiposDoc, setTipoDoc ] = useState({typesdocs: []})
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataTiposD = async () => {
      try {
        setLoading(true);
        const response = await fetchDataTiposDoc();
        setTipoDoc(response);
      } catch (error) {
        console.error('Error en la petición de tipos de documentos:', error);
        setError('Error al cargar tipos de documentos');
      } finally {
        setLoading(false);
      }
    };

    fetchDataTiposD();
  }, []);



  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const programaData = {
        estadoPrograma,
        versionPrograma,
        descripcionProgram,
        idPrograma,
        nombrePrograma,
      };
  
      await registrarPrograma(programaData);
  
      // Realizar acciones adicionales después de registrar el instructor, si es necesario.
      console.log('programa registrado exitosamente');
    } catch (error) {
      // Manejar errores, mostrando un mensaje o realizando alguna acción específica.
      console.error('Error al registrar el programa:', error.message);
    }
  }
  return (
    <>
      <h1 className='text-center text-2xl font-bold uppercase'>Registrar programa</h1>
      <form 
          className='flex flex-col items-center justify-center w-[880px]'
          onSubmit={handleSubmit}>
          <div className='grid grid-cols-8 p-4 items-center justify-center gap-x-2 gap-y-2 mb-4 w-[100%]'>
            <InputLabel
              col="4"
              label={"ID"}
              htmlId="idPrograma"
              value={idPrograma}
              onChange={setIdPrograma} 
              inputProps={{ id: "idPrograma" }}
              />
            <InputLabel 
              col="4"
              label={"Nombre Programa"}
              htmlId="nombrePrograma"
              value={nombrePrograma}
              onChange={setNombrePrograma} 
              inputProps={{ id: "nombrePrograma" }}
              />
              <InputLabel 
              col="4"
              label={"Descripcion Programa"}
              htmlId="descripcionProgram"
              value={descripcionProgram}
              onChange={setDescripcionProgram} 
              inputProps={{ id: "descripcionProgram" }}
              />
              <InputLabel 
              col="4"
              label={"Version Programa"}
              value={versionPrograma}
              htmlId="versionPrograma"
              onChange={setVersionPrograma} 
              inputProps={{ id: "versionPrograma" }}
              />
            <select
              className='appearance-none mt-4 col-span-4 text-lg text-gray-500 p-2 font-light rounded-sm shadow-md outline-none border'
              value={estadoPrograma}
              onChange={(e) => setEstadoPrograma(e.target.value, 10)}
            >
              <option value="1">Activo</option>
              <option value="0">Inactivo</option>
            </select>
            
          </div>
        <button className='bg-primary rounded-md text-center text-white shadow-md p-4' type="submit">Registrar Programa</button>
      </form>
    </>
  )
}

