import { API_URL } from "../../../../utils/httpRequest";
import { TOKEN } from "../../../../utils/httpRequest";
import axios from "axios";

const endpoint = 'bloque'

export const getDataHorario = async () => {
  if (!TOKEN) {
    window.location.href = '/login';
    return null;
  }

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${TOKEN}`,
  };

  try {
    const response = await axios.get(`${API_URL}/${endpoint}/`, { headers });
    return response.data;
  } catch (error) {

    console.error("Error en la solicitud:", error);
    throw error;
  }
};

export const getDataMismos = async (
  mismosData
) => {
  if (!TOKEN) {
    window.location.href = '/login';
    return null;
  }

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${TOKEN}`,
  };

  try {
    const response = await axios.get(`${API_URL}/${endpoint}/mismos/5/1`, { headers }, mismosData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      if (!alertShown) {
        // Podrías intentar renovar el token o redirigir al usuario a la página de inicio de sesión
        // Si tu backend admite la renovación de tokens, podrías implementar esa lógica aquí
        alert('La sesión ha caducado. Serás redirigido al inicio de sesión.');
        alertShown = true; // Marcar que la alerta ha sido mostrada
        window.location.href = '/login'; // Ajusta la URL según tu estructura de rutas
      }
      return null;
    }

    console.error("Error en la solicitud:", error);
    throw error;
  }
};