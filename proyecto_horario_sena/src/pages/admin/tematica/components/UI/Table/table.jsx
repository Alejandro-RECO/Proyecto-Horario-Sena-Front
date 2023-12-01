"use client";

import { fetchData } from '../../../data/sendRequest';
import { MenuTematica } from '../select/select';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';



export const TableTematica = ()=> {
  // Almacena la informacion traida desde la peticion get
  const [data, setData] = useState({tematica: []})

  useEffect(() =>{
    const fetchDataOnMount = async ()=>{
      try {
        const response = await fetchData();
        setData(response);
        console.log("Response correcto");
      } catch (error) {
        console.error('Error en la peticion', error);
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
              {/* Cabecera de la informacion renderizada desde el GET */}
              <TableCell>
                <p className='text-base font-bold '>Nombre Tematica</p>
              </TableCell>
              <TableCell align="left">
                <p className='text-base font-bold '>Id Tematica</p>
              </TableCell>
              <TableCell align="left">
                <p className='text-base font-bold '>Descripción</p>
              </TableCell>
              <TableCell align="left">
                <p className='text-base font-bold '>Horas Maximas Mensuales</p>
              </TableCell>
              <TableCell align="left">
              <p className='text-base font-bold '>Horas Maximas Semanales</p>
              </TableCell>
              <TableCell align="left">
              <p className='text-base font-bold '>Trimestre</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* mapeamos la informacion retornada desde el get y las mostramos cada una  */}
            {data.tematica.map((row) => (
              <TableRow
              // Revisar como esta la key
                key={row.idTematica}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.nombreTematica}
                </TableCell>
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">{row.descripcionTematica}</TableCell>
                <TableCell align="left">{row.horasMaximasM} Horas</TableCell>
                <TableCell align="left">{row.horasMaximasS} Horas</TableCell>
                <TableCell align="left">Trimestre {row.trimestre}</TableCell>
                <TableCell align="left">
                  {/* Modal que nos permie actualizar y eliminar la informacion de la Tematica mediante el id */}
                  <MenuTematica 
                    id={row.id}
                    nombreTematica={row.nombreTematica}
                    descripcionTematica={row.descripcionTematica}
                    horasMaximasM={row.horasMaximasM}
                    horasMaximasS={row.horasMaximasS}
                    trimestre={row.trimestre}
                    estadoTematica={row.estadoTematica}
                    idProgramaFK={row.idProgramaFK}
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