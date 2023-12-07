import { TOKEN } from "../../../../utils/httpRequest";
import { getDataFromEndpoin } from "../../../../utils/httpRequest";
import { useEffect, useState } from 'react';

export const BloqueData = ()=>{

  if (!TOKEN){
    window.location.href = '/'

    return null
  }
  // Estados  que almacenan la infromación 
  const [datosBloque, setDatoBloque] = useState({ bloques: [] })
  const [datosAmbiente, setDatosAmbiente] = useState({ ambientes: [] })
  const [datosFicha, setDatosFicha] = useState({ fichas: [] })
  const [datosInstructor, setDatosInstructor] = useState({ instructores: [] })
  const [datosJornada, setDatosJornada] = useState({ tipoJornada: [] })
  const [datosSede, setDatosSede] = useState({ sedes: [] })
  const [datosTematica, setDatosTematica] = useState({ tematica: [] })
  const [datosTrimestre, setDatosTrimestre] = useState({ trimestres: [] })

  const token = TOKEN

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bloqueResponse = await getDataFromEndpoin('bloque', token)
        setDatoBloque(bloqueResponse)
        const ambienteResponse = await getDataFromEndpoin('ambiente', token)
        setDatosAmbiente(ambienteResponse)
        const fichaResponse = await getDataFromEndpoin('ficha', token)
        setDatosFicha(fichaResponse)
        const instructorResponse = await getDataFromEndpoin('instructor', token)
        setDatosInstructor(instructorResponse)
        const jornadaResponse = await getDataFromEndpoin('jornada', token)
        setDatosJornada(jornadaResponse)
        const sedeResponse = await getDataFromEndpoin('sede', token)
        setDatosSede(sedeResponse)
        const tematicaResponse = await getDataFromEndpoin('tematica', token)
        setDatosTematica(tematicaResponse)
        const trimestreResponse = await getDataFromEndpoin('trimestre', token)
        setDatosTrimestre(trimestreResponse)

      }catch (error) {
        console.log("[ERROR FETCH DATA]", error);
      }
    }

    fetchData()
  }, [])

  const bloqueConInfo = datosBloque.bloques.map((bloque) => {
    const ambienteInfo = datosAmbiente.ambientes.find((ambiente) => ambiente.idAmbiente === bloque.idAmbienteFK);
    const fichaInfo = datosFicha.fichas.find((ficha) => ficha.idFicha === bloque.idFichaFK);
    const instructorInfo = datosInstructor.instructores.find((instructor) => instructor.idInstructor === bloque.idInstructorFK);
    const jornadaInfo = datosJornada.tipoJornada.find((jornada) => jornada.idJornada === bloque.idJornadaFK);
    const sedeInfo = datosSede.sedes.find((sede) => sede.idSede === bloque.idSedeFK);
    const tematicaInfo = datosTematica.tematica.find((tematica) => tematica.idProgramaFK === bloque.idTematicaFK);
    const trimestreInfo = datosTrimestre.trimestres.find((trimestre) => trimestre.idTrimestre === bloque.idTrimestreFK);

    return {
      ...bloque,
      ambienteInfo,
      fichaInfo,
      instructorInfo,
      jornadaInfo,
      sedeInfo,
      tematicaInfo,
      trimestreInfo,
      
    };
  });
  return bloqueConInfo;
}

