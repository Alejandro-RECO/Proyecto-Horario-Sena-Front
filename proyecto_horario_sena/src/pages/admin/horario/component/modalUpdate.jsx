import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Divider from '@mui/material/Divider';

export const ModalInstructor = ({
  open, 
  handleClose,
  id,
  bloque,
  ambiente,
  ficha,
  jornada,
  sede,
  tematica,
  trimestre

}) => {
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ACTUALIZAR</DialogTitle>
        <Divider/>
        <DialogContent>
          <h1 className='text-xl text-center font-semibold uppercase text-gray-500 pb-4'>{bloque} | ID: {id}</h1>
          <div className='flex items-center justify-center py-4 gap-4'>
            <img 
              className='object-cover h-[150px] w-[150px] rounded-md shadow-lg '
              src={imagenInstructor} alt={nombreInstructor} />
            <div className='grid grid-cols-4 py-4 gap-4'>
              <InputLabel
                col={2}
                htmlId="nombre"
                label="Nombre"
                name="nombreInstructor"
                value={instructorData.nombreInstructor}
                onChange={handleInputChange}
              />
              <InputLabel
                col={2}
                htmlId="apellido"
                label="Apellidos"
                name="apellidoInstructor"
                value={instructorData.apellidoInstructor}
                onChange={handleInputChange}
              />
              <InputLabel
                col={4}
                htmlId="numDoc"
                label="Numero Documento"
                name="numDocInst"
                value={instructorData.numDocInst}
                onChange={handleInputChange}
              />
              <select
                className='shadow-lg col-span-2 p-2 border rounded-md focus:outline-none appearance-none'
                name="estadoInstructor"
                value={instructorData.estadoInstructor}
                onChange={handleInputChange}
              >
                <option value="1">Activo</option>
                <option value="0">Inactivo</option>
              </select>
              <select
                className='shadow-lg col-span-2 p-2 border rounded-md focus:outline-none appearance-none'
                name="idTpoIdentificacionFK"
                value={instructorData.idTpoIdentificacionFK}
                onChange={handleInputChange}
              >
                {
                  // Mapeo de la informacion que pertenece al parametro tipos doc en bd 
                  tiposDoc.typesdocs.map((tipo)=>(
                    <option key={tipo.idTipoIdent} value={(tipo.idTipoIdent)}>{tipo.nombreTipoIdent}</option>
                  ))
                }
              </select>
              <InputLabel
                col={2}
                htmlId="horas"
                label="Horas Semanales"
                name="horasSemanales"
                value={instructorData.horasSemanales}
                onChange={handleInputChange}
              />
              <InputLabel
                col={2}
                htmlId="Imagen"
                label="Url Imagen"
                name="imagenInstructor"
                value={instructorData.imagenInstructor}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button 
            className='p-2 border rounded-md hover:shadow-lg transition-all'
            onClick={handleActualizarInstructor} disabled={loading}>Actualizar</button>
          <button 
            className='p-2 bg-red-500 text-white border rounded-md hover:shadow-lg transition-all'
            onClick={handleClose}>Cerrar</button>
        </DialogActions>
        {loading && <p className='text-center'>Actualizando...</p>}
        {error && <p className='text-center text-red-500'>Error: {error}</p>}
      </Dialog>
    </>

  )
}