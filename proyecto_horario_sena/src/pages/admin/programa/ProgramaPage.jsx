import { useEffect, useState } from 'react'
import { fetchData } from './data/sendRequest';

import LayoutPage from '../../../layouts/LayoutPage';
import { Tab } from '@headlessui/react'
import { TablePrograma} from './components/UI/Table/table';
import { ModalPrograma } from './components/UI/modal/modal';
import { FormPrograma } from './components/UI/form/form';


export const ProgramaPage = () => {
  // Informacion recolectada del metodo GET de nuestra bd 
  const [data, setData] = useState({ programas: [] })
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    let isMounted = true;

    const fetchDataOnMount = async () => {
      try {
        const response = await fetchData();
        if (isMounted) {
          setData(response);
        }
      } catch (error) {
        if (isMounted) {
          console.error('Error en la petición:', error);
          setError(error.message || 'Error en la petición');
        }
      } finally {
        // Indicar que la carga ha finalizado, independientemente del resultado
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchDataOnMount();

    // Función de limpieza para cancelar la solicitud si el componente se desmonta
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <LayoutPage 
      desc="Gestione los programas registrados"
      title={`PROGRAMAS (${data.programas.length})`}>
      <ModalPrograma/>
      <Tab.Panels>
        <Tab.Panel>
        {loading && <p>Cargando...</p>}
        {error && <p>Error: {error}</p>}
        {data && (
          <TablePrograma/>
        )}
        </Tab.Panel>
        <Tab.Panel>
          <FormPrograma/>
        </Tab.Panel>
      </Tab.Panels>
    </LayoutPage>
  )
}
