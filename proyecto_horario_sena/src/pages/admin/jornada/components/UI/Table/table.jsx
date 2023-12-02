"use client";

import {useState, useEffect} from 'react';
import { fetchData } from '../../../data/sendRequest';
import { MenuJornada } from '../select/select';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export const TableJornada = ()=> {
  // Almacena la informacion traida desde la peticion get
  const [data, setData] = useState({ tipoJornada: [] })


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
                <p className='text-base font-bold '>Nombre jornada</p>
              </TableCell>
              <TableCell align='center'>
                <p className='text-base font-bold '>Id</p>
              </TableCell>
              <TableCell align='center'>
                <p className='text-base font-bold '>Inicio Jornada</p>
              </TableCell>
              <TableCell align='center'>
                <p className='text-base font-bold '>Fin Jornada</p>
              </TableCell>
              <TableCell align='right'>
                <p className='text-base font-bold '>Estado Jornada</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* mapeamos la informacion retornada desde el get y las mostramos cada una  */}
            {data.tipoJornada.map((row) => (
              <TableRow
                key={row.idJornada}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.nombreJornada}
                </TableCell>
                <TableCell align="center">{row.idJornada}</TableCell>
                <TableCell align="center">{row.diaIniJor}</TableCell>
                <TableCell align="center">{row.diaFinJor}</TableCell>
                <TableCell align="center">{row.estadoJornada === 1 ? "Activo": (row.estadoJornada === 0 ? "Inactivo" : "undefined")}</TableCell>
                <TableCell align="center">
                  {/* Modal que nos permie actualizar y eliminar la informacion del instructor mediante el id */}
                  <MenuJornada
                    id={row.idJornada}
                    nombreJornada={row.nombreJornada}
                    diaIniJor={row.diaIniJor}
                    diaFinJor={row.diaFinJor}
                    estadoJornada={row.estadoJornada}
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