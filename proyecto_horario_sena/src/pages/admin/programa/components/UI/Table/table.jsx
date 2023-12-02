"use client";

import {useState, useEffect} from 'react';
import { fetchData } from '../../../data/sendRequest';
import {MenuPrograma} from '../select/select';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export const TablePrograma = ()=> {
  // Almacena la informacion traida desde la peticion get
  const [data, setData] = useState({ programas: [] })


  useEffect(() => {
    const fetchDataOnMount = async () => {
      try {
        const response = await fetchData();
        setData(response);
        console.log("Response correcto")
      } catch (error) {
        console.error('Error en la petición:', error);
      }
    };

    fetchDataOnMount();
  }, []); 

  return (
    <div className='pt-2 border border-gray-200 rounded-lg'>
      <TableContainer component={Paper} className="overflow-x-auto">
        <Table sx={{ minWidth: 1030}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <p className='text-base font-bold '>Id Programa</p>
              </TableCell>
              <TableCell align='center'>
                <p className='text-base font-bold '>Nombre Programa</p>
              </TableCell>
              <TableCell align='center'>
                <p className='text-base font-bold '>Descripcion Programa</p>
              </TableCell>
              <TableCell align='center'>
                <p className='text-base font-bold '>Version Programa</p>
              </TableCell>
              <TableCell align='center'>
                <p className='text-base font-bold '>Estado Programa</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* mapeamos la informacion retornada desde el get y las mostramos cada una  */}
            {data.programas.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.idPrograma}
                </TableCell>
                <TableCell align="center">{row.nombrePrograma}</TableCell>
                <TableCell align="center">{row.descripcionProgram}</TableCell>
                <TableCell align="center">{row.versionPrograma}</TableCell>
                <TableCell align="center">{row.estadoPrograma === 1 ? "Activo": (row.estadoPrograma === 0 ? "Inactivo" : "undefined")}</TableCell>

                <TableCell align="center">
                  {/* Modal que nos permie actualizar y eliminar la informacion del instructor mediante el id */}
                  <MenuPrograma
                    id={row.idPrograma}
                    nombrePrograma={row.nombrePrograma}
                    descripcionProgram={row.descripcionProgram}
                    versionPrograma={row.versionPrograma}
                    estadoPrograma={row.estadoPrograma}
                    />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}