
import * as React from 'react';
import { fichaData } from '../../../data/sendRequest';
import { MenuFicha } from '../select/select';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export const TableFicha = ()=> {
  // Almacena la informacion traida desde la peticion get
  const rows = fichaData()


  return (
    <div className='pt-2 border border-gray-200 rounded-lg'>
      <TableContainer component={Paper} className="overflow-x-auto">
        <Table sx={{ minWidth: 1030}} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* Cabecera de la informacion renderizada desde el GET */}
              <TableCell>
                <p className='text-base font-bold '>Numero Ficha</p>
              </TableCell>
              <TableCell align="left">
                <p className='text-base font-bold '>Id Ficha</p>
              </TableCell>
              <TableCell align="left">
                <p className='text-base font-bold '>Estado Ficha</p>
              </TableCell>
              <TableCell align="left">
                <p className='text-base font-bold '>Programa</p>
              </TableCell>
              <TableCell align="left">
              <p className='text-base font-bold '>Jornada</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* mapeamos la informacion retornada desde el get y las mostramos cada una  */}
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.nombreFicha}
                </TableCell>
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">{row.estadoFicha === "1" ? "Activo": "Inactivo"}</TableCell>
                <TableCell align="left">{row.programaInfo}</TableCell>
                <TableCell align="left">{row.jornadaInfo}
                </TableCell>
                <TableCell align="left">
                  {/* Modal que nos permie actualizar y eliminar la informacion de la Ficha mediante el id */}
                  <MenuFicha 
                    id={row.id}
                    nombreFicha={row.nombreFicha}
                    estadoFicha={row.estadoFicha}
                    idProgramaFK={row.idProgramaFK}
                    idJornadaFK={row.idJornadaFK}
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