// import { useEffect, useState } from 'react'
// import { getDataHorario, getDataMismos } from './data/sendRequest';

// export const HorarioPage = () => {

//   const [data, setData] = useState({ bloques: [] })
//   const [dataMismos, setDataMismos] = useState({mismos:[]})
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);


//   useEffect(() => {
//     let isMounted = true;

//     const fetchDataOnMount = async () => {
//       try {
//         const response = await getDataHorario();
//         if (isMounted) {
//           setData(response);
//         }
//       } catch (error) {
//         if (isMounted) {
//           console.error('Error en la petición:', error);
//           setError(error.message || 'Error en la petición');
//         }
//       } finally {
//         // Indicar que la carga ha finalizado, independientemente del resultado
//         if (isMounted) {
//           setLoading(false);
//         }
//       }
//     };

//     fetchDataOnMount();

//     // Función de limpieza para cancelar la solicitud si el componente se desmonta
//     return () => {
//       isMounted = false;
//     };
//   }, []);


//   useEffect(() => {
//     let isMounted = true;
    

//     const fetchDataOnMount = async () => {
//       try {
//         const response = await getDataMismos();
//         if (isMounted) {
//           setDataMismos(response);
//         }
//       } catch (error) {
//         if (isMounted) {
//           console.error('Error en la petición:', error);
//           setError(error.message || 'Error en la petición');
//         }
//       }
//     };

//     fetchDataOnMount();

//     return () => {
//       isMounted = false;
//     };
    
//   }, [])

//     const [gridContent, setGridContent] = useState(Array(36).fill({ mensajePrincipal: '', nombre: '' }));

//   const actualizarGrilla = (conjuntosPosiciones) => {
//     const mensajes = {
//       primerSetPosiciones: { mensajePrincipal: "lenguaje backend javaScript", nombre: "Andres", ficha:"2687378", aula:"403" },
//       segundoSetPosiciones: { mensajePrincipal: "fundamentos desarrollo movil nativo", nombre: "Uldarico", ficha:"2687378", aula:"403" },
//       tercerSetPosiciones: { mensajePrincipal: "Ingles", nombre: "Halan", ficha:"2687378", aula:"403" },
//       cuartoSetPosiciones: { mensajePrincipal: "Java", nombre: "Andres", ficha:"2687378", aula:"403" },
//     };
    
//     const nuevaGrilla = Array(36).fill({ mensajePrincipal: '', nombre: '' });

//     // Añadir fila de descanso tres filas arriba de la fila 11
//     nuevaGrilla.splice(12, 0, ...Array(6).fill({ mensajePrincipal: 'Descanso', nombre: '' }));
//     // Añadir fila de descanso tres filas arriba de la fila 18
//     nuevaGrilla.splice(24, 0, ...Array(6).fill({ mensajePrincipal: 'Descanso', nombre: '' }));
    
//     Object.keys(conjuntosPosiciones).forEach((conjunto) => {
//       conjuntosPosiciones[conjunto].forEach((posicion, i) => {
//         const fila = Math.floor((posicion - 1) / 5);
//         const columna = (posicion - 1) % 5;
//         const index = columna + fila * 5;
//         nuevaGrilla[index] = mensajes[conjunto] || { mensajePrincipal: '', nombre: '' };
//       });
//     });

//     setGridContent(nuevaGrilla);
//   };

//   useEffect(() => {
//     const conjuntosPosiciones = {
//       primerSetPosiciones: [1, 7, 19],
//       segundoSetPosiciones: [2, 8, 20],
//       tercerSetPosiciones: [3, 9, 21],
//       cuartoSetPosiciones: [4, 10, 22],
//     };
    
//     actualizarGrilla(conjuntosPosiciones);
//   }, []);

//   // buscar la manera de agregar los datos quemados de dias y horas al horarios, idea hacerun layout que tenga un children y dentro de ella se muestren el renderizado 
//   return (
//     <>
//       {/* {loading && <p>Cargando...</p>}
//           {error && <p>Error: {error}</p>}
//           {data && (
//             <button onClick={()=>console.log(data.bloques)}>Click me</button>
//           )}
//       {
//         data.bloques.map((item)=>(
//           <div key={item.idBloque}>
//             Hola
//           </div>
//         ))
//       }
//       <button onClick={()=> console.log(dataMismos.mismos)}>Click me mismos</button>
//       {
//         dataMismos.mismos.map((item)=>(
//           <div key={item.idBloque}>
//             <p>{item.idPosicion}</p>
//           </div>
//         ))
//       } */}
//         <div className="text-center text-xs grid grid-cols-6 grid-rows-7 gap-4 ">
//           {gridContent.map((contenido, index) => (
//             <div key={index} className="rounded-md py-3 col-span-1 row-span-1 bg-gray-200 flex flex-col items-center justify-center gap-2">
//               <p className='font-bold uppercase'>{contenido.mensajePrincipal}</p>
//               <p className='uppercase bg-blue-200 w-full'>{contenido.nombre}</p>
//               <p className='uppercase'>{contenido.ficha}</p>
//               <p className='uppercase'>{contenido.aula}</p>
//             </div>
//           ))}
//         </div>
//     </>
//   )
// }


import { BloqueData } from "./data/sendRequest";
import { MenuHorario } from "./component/select";
import { BasicPopover } from "./component/popover"; 

export const HorarioPage = () => {
  const datosBloque = BloqueData();
  
  return (
    <>
    <h1 className="py-5 text-4xl font-bold pl-5 text-primary">BLOQUES({datosBloque.length})</h1>
      <div className="border rounded-lg p-3 grid grid-cols-2 gap-4 ">
        {datosBloque.map((bloque) => ( // Cambio aquí
          <div className="flex items-center justify-around p-4 bg-gray-100 rounded shadow" key={bloque.idBloque}>
            <BasicPopover
              ficha={bloque.fichaInfo ? bloque.fichaInfo.nombreFicha : 'No se encontró'}
              ambiente={bloque.ambienteInfo ? bloque.ambienteInfo.numeroAmbiente : 'No se encontró'}
              jornada={bloque.jornadaInfo ? bloque.jornadaInfo.nombreJornada : 'No se encontró'}
              sede={bloque.sedeInfo ? bloque.sedeInfo.nombreSede : 'No se encontró'}
              tematica={bloque.tematicaInfo ? bloque.tematicaInfo.nombreTematica : 'No se encontró'}
              trimestre={bloque.trimestreInfo ? bloque.trimestreInfo.nombreTrimestre : 'No se encontró'}
            />
            <h1 className="font-semibold text-xl uppercase">Bloque {bloque.idBloque}</h1>  
          <MenuHorario/>
          </div>
        ))}
      </div>
    </>
  );
};