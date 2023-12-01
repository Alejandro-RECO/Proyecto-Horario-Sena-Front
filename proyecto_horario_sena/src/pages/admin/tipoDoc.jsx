import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const TipoDoc = () => {
  const [data, setData] = useState({ typesdocs: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pqddmp2g-5000.use2.devtunnels.ms/tipodoc/');
        console.log('Respuesta del servidor:', response.data); // Agregado para verificar la respuesta
        setData(response.data);
      } catch (error) {
        console.error("Error al obtener datos", error);
      }
    };

    fetchData();
  }, []);

  // Verifica si typesdocs es un array antes de mapearlo
  if (!Array.isArray(data.typesdocs)) {
    console.error("Los datos no son un array:", data.typesdocs);
    return null; // O muestra un mensaje de error o retorna algo adecuado para tu caso
  }

  return (
    <div>
      <button onClick={() => console.log(data.typesdocs)}>DATA</button>

      {/* Mapea los datos y crea un elemento h1 por cada respuesta */}
      {data.typesdocs.map((tipoIdentificacion) => (
        <h1 key={tipoIdentificacion.idTipoIdent}>{tipoIdentificacion.nombreTipoIdent}</h1>
      ))}
    </div>
  );
};
 