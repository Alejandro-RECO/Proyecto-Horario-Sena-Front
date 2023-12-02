// Url sin end Point
import { API_URL } from '../../../../utils/httpRequest';


import axios from 'axios'
import { TOKEN } from '../../../../utils/httpRequest';

const endpoint = 'programa';

let alertShow = false;


// GET
export const fetchData = async ()=>{

  if (!TOKEN){
    window.location.href = '/'

    return null
  }

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${TOKEN}`,
  }
  try{
    const response = await axios.get(`${API_URL}/${endpoint}/`, {headers})
    return response.data
  }catch (error){

    if (error.response && error.response.status === 401) {
      if (!alertShow) {
        // Aquí podrías intentar renovar el token o redirigir al usuario a la página de inicio de sesión
        // Si tu backend admite la renovación de tokens, podrías implementar esa lógica aquí
        alert('La sesión ha caducado. Serás redirigido al inicio de sesión.');
        alertShow = true; // Marcar que la alerta ha sido mostrada
        window.location.href = '/'; // Ajusta la URL según tu estructura de rutas
      }
      return null;
    }

    console.error("erro en el fetch", error)
    throw error;
  }
}


// Metodo PUT 
export const actualizarPrograma = async (id, programaData, handleClose) => {
  if (!TOKEN) {
    window.location.href = '/';
    return null;
  }

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${TOKEN}`,
  };

  try {
    // Validación de campos
    if (!programaData.nombrePrograma) {
      throw new Error("Nombre Programa requerido");
    }
    if (!programaData.descripcionProgram) {
      throw new Error("Descripcion Programa requerido");
    }
    if (!programaData.versionPrograma) {
      throw new Error("Version Programa requerido");
    }
    if (programaData.estadoPrograma === undefined || programaData.estadoPrograma === null) {
      throw new Error("estado requerido");
    }
    
    

    // Realizar la solicitud PUT
    await axios.put(`${API_URL}/${endpoint}/${id}`, programaData, { headers });

    // Cierre del modal u otra acción después de la actualización
    handleClose();

    console.log(`programa con ID ${id} actualizado correctamente`);
  } catch (error) {
    console.error("PROGRAMA_PATCH", error);

    // Manejo específico de errores
    if (error.response && error.response.status === 400) {
      // Errores de validación del servidor
      return new Error(error.response.data.message || "Error de validación");
    } else if (error.response && error.response.status === 500) {
      // Otros errores del servidor
      return new Error("Error interno del servidor");
    } else {
      // Otros errores
      return new Error("Error desconocido");
    }
  }
};

  
//   Metodo POST 
export const registrarPrograma = async (programaData) => {
  if (!TOKEN){
    window.location.href = '/'
    return null
  }

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${TOKEN}`,
  }

  try {
    // Validación de campos
    if (!programaData.nombrePrograma) {
      throw new Error("Nombre Programa requerido");
    }
    if (!programaData.descripcionProgram) {
      throw new Error("Descripcion Programa requerido");
    }
    if (!programaData.versionPrograma) {
      throw new Error("Version Programa requerido");
    }
    if (programaData.estadoPrograma === undefined || programaData.estadoPrograma === null) {
      throw new Error("estado requerido");
    }

    await axios.post(`${API_URL}/${endpoint}/`,
        programaData,
      {headers}
    );

    console.log("Programa registrado correctamente");
    window.location.reload(); // Recarga la página
  } catch (error) {
    console.error("REGISTER_PATCH", error);

    if (error.response && error.response.status === 400) {
      // Manejar errores de validación del servidor
      console.error("Error de validación del servidor:", error.response.data);
    } else if (error.request) {
      // Error de red (sin respuesta del servidor)
      console.error("Error de red:", error.message);
    } else {
      // Otros errores
      console.error("Error desconocido:", error.message);
    }
    throw new Error("Error al registrar el programa");
  }
};

// Metodo DELETE 
export const eliminarPrograma = (id) => {
  if (!TOKEN) {
    window.location.href = '/?error=no_token';
    return Promise.reject(new Error('No hay token disponible.'));
  }

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${TOKEN}`,
  };

  return axios.delete(`${API_URL}/${endpoint}/${id}`, { headers })
    .then(() => {
      console.log(`programa con ID ${id} eliminado correctamente`);
    })
    .catch((error) => {
      console.error(`Error al eliminar el programa con ID ${id}`, error);
      throw new Error(`Error al eliminar el programa: ${error.message}`);
    });
};


// GET Tipo de Dato
export const fetchDataTiposDoc = async ()=>{

  if (!TOKEN){
    window.location.href = '/'

    return null
  }

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${TOKEN}`,
  }
  try{
    const response = await axios.get(`${API_URL}/tipodoc/`, {headers})
    return response.data
  }catch (error){
    console.error("error en el fetch", error)
    throw error;
  }
}
