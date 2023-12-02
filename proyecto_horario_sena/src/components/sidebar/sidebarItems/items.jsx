import { 
  RiUser3Line,
  RiBookOpenLine,
  RiGroupLine,
  RiTv2Line,
  RiBuilding4Line,
  RiListOrdered,
  RiCalendarTodoLine,
  RiTimeLine
 } from "react-icons/ri";

export const items = [
  {icono: <RiUser3Line className='w-6 h-6'/> ,        title:'INSTRUCTOR',  to: 'instructor'},
  {icono: <RiBookOpenLine className='w-6 h-6'/> ,     title:'TEMATICA',    to: 'tematica'},
  {icono: <RiGroupLine className='w-6 h-6'/> ,        title:'FICHA',       to: 'ficha'},
  {icono: <RiTv2Line className='w-6 h-6'/> ,          title:'PROGRAMA',    to: 'programa'},
  {icono: <RiTimeLine className='w-6 h-6'/> ,          title:'JORNADA',    to: 'jornada'},
  {icono: <RiBuilding4Line className='w-6 h-6'/> ,    title:'SEDE',        to: 'sede'},
  {icono: <RiListOrdered className='w-6 h-6'/>,       title:'TRIMESTRE',   to: 'trimestre'},
  {icono: <RiCalendarTodoLine className='w-6 h-6'/>,  title:'HORARIO',     to: 'horario'},
]