import { useEffect, useState } from 'react'
import { fetchData } from './data/sendRequest';

import { Tab } from '@headlessui/react'
import LayoutPage from '../../../layouts/LayoutPage';
import { TableTematica } from './components/UI/Table/table';
import { FormTematica } from './components/UI/form/form';



export const TematicaPage = () => {
  const [data, setData] = useState({tematica: []})
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    let isMounted = true;
    const fetchDataOnMount = async () =>{
      try {
        const response = await fetchData();
        if (isMounted) {
          setData(response);
        }
      } catch (error) { 
        if (isMounted) {
          console.error('Error en la peticion', error);
          setError(error.message || 'Error en la peticion')
        }
      } finally{
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    fetchDataOnMount();
    return ()=>{
      isMounted = false;
    };
  },[])

  return (
    <LayoutPage 
      title={`TEMÁTICAS (${data.tematica.length})`}
      desc="Gestión de las Tematicas registradas"
      >
      <Tab.Panels>
        <Tab.Panel>
          <TableTematica/>
        </Tab.Panel>
        <Tab.Panel>
          <FormTematica />
        </Tab.Panel>
      </Tab.Panels>
    </LayoutPage>
  )
}
