import { useEffect } from 'react'
import Paciente from './Paciente'

const PatientsList = ({ pacientes, setPaciente, eliminarPaciente}) => {

  
  return (
    <div className='md:w-1/2 lg:-3/5 md:h-screen md:overflow-y-scroll'>
      {pacientes && pacientes.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>Lista de pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
           Administra tus {''}
           <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
          </p>

      {pacientes.map((paciente) =>
        <Paciente
          key={paciente.id}
          paciente={paciente}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
          />
      )}
      </>
      ):(
        <>
          <h2 className='font-black text-3xl text-center'>Aún no hay pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
           Empieza agregando {''}
           <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
          </p>
        </>
      )}



    </div>
  )
}

export default PatientsList
