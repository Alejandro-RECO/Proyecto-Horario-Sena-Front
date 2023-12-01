import { API_URL } from '../../../../utils/httpRequest';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { getDataFromEndpoin } from '../../../../utils/httpRequest';


const endpoint = 'ficha'


// Metodo GET 
export const fichaData = () => {
  const [datosFicha, setDatosFicha] = useState([])
  const [datosPrograma, setDatosPrograma] = useState([])
  const [datosJornada, setDatosjornada] = useState([])

  useEffect( () => {
    const fetchData = async ()=>{
      try {
        const fichaResponse = await getDataFromEndpoin('ficha')
        setDatosFicha(fichaResponse)

        const programaResponse = await getDataFromEndpoin('programa')
        setDatosPrograma(programaResponse)

        const jornadaResponse = await getDataFromEndpoin('jornada')
        setDatosjornada(jornadaResponse)
      }catch (error) {
        console.log("[ERROR FETCH DATA]", error)
      }
    }

    fetchData()
  }, [])

  const fichaConPrograma = datosFicha.map((ficha) => {
    const programaInfo = datosPrograma.find((programa) => programa.id === ficha.idProgramaFK)
    const jornadaInfo = datosJornada.find((joranda) => joranda.id === ficha.idJornadaFK)
    return {
      ...ficha,
      programaInfo: programaInfo ? programaInfo.nombrePrograma : 'No se encontro ',
      jornadaInfo: jornadaInfo ? jornadaInfo.nombreJornada : 'No se econtro'
    }
  })

  return fichaConPrograma
  
};
// Metodo PUT 

export const actualizarFicha = async (id, fichaData, handleClose) => {
    try {
      await axios.put(`${API_URL}/${endpoint}/${id}`, {
        ...fichaData,
      });
      handleClose();
  
      // Manejo de errores
      if (!fichaData.nombreFicha) {
        throw new Error("Nombre requerido");
      }
      if (!fichaData.estadoFicha) {
        throw new Error("Estado requerido");
      }
      if (!fichaData.idProgramaFK) {
        throw new Error("Programa requerido");
      }
      if (!fichaData.idJornadaFK) {
        throw new Error("Jornada requerido");
      }
  
      console.log("Ficha actualizada correctamente");
      window.location.reload(); // Recarga la página
    } catch (error) {
      console.error("FICHA_PATCH", error);
      throw new Error("Internal error");
    }
};

// Metodo POST 
export const registrarFicha = async (data) => {
  try {
    await axios.post(`${API_URL}/${endpoint}`, data);

    // Manejo de error
    if (!data.nombreFicha) {
      throw new Error("Nombre requerido");
    }
    if (!data.estadoFicha) {
      throw new Error("Estado requerido");
    }
    if (!data.idProgramaFK) {
      throw new Error("id Programa requerido");
    }
    if (!data.idJornadaFK) {
      throw new Error("Id jornada requerido");
    }
    if (!data.id) {
      throw new Error("Id requerido");
    }

    console.log("Registrado");
    window.location.reload(); // Recarga la página
  } catch (error) {
    console.log("REGISTER_PATCH", error);
    throw new Error("Internal error");
  }
};



// Metodo DELETE
export const eliminarTematica = async (id) => {
  try {
    await axios.delete(`${API_URL}/${endpoint}/${id}`);
    console.log(`Tematica con ID ${id} eliminado correctamente`);

  } catch (error) {
    console.error(`Error al eliminar Tematica con ID ${id}`, error);
  }
};

export const programaData = () => {
    const [datos, setDatos] = useState([])
  
    useEffect(()=>{
        const endpoint = 'programa';
  
        getDataFromEndpoin(endpoint)
        .then((data)=>{
            setDatos(data)
        })
        .catch((error)=>{
            console.log("[ERRORFETCH DATA]", error)
        })
    }, []);
  
    return datos
  };

  export const jornadaData = () => {
    const [datos, setDatos] = useState([])
  
    useEffect(()=>{
        const endpoint = 'jornada';
  
        getDataFromEndpoin(endpoint)
        .then((data)=>{
            setDatos(data)
        })
        .catch((error)=>{
            console.log("[ERRORFETCH DATA]", error)
        })
    }, []);
  
    return datos
  };