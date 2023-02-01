
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  
  const {nombre, propietario, email, fecha, sintomas, id} = paciente;
  
  const handleEliminar = () => {
    const respuesta = confirm ('Deseas eliminar este paciente?')
    if (respuesta) {
      eliminarPaciente(id)
    }
  }
  return (
    <div>
        <div className='mt-5 bg-white shadow-md mx-5 px-5 py-10 rounded-md'>
        <div >
          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Nombre: {''}
            <span className='font-normal normal-case'>{nombre}</span>
          </p>
        </div>
        <div >
          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Nombre Propietario: {''}
            <span className='font-normal normal-case'>{propietario}</span>
          </p>
        </div>
        <div >
          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Email: {''}
            <span className='font-normal normal-case'>{email}</span>
          </p>
        </div>
        <div >
          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Alta: {''}
            <span className='font-normal normal-case'>{fecha}</span>
          </p>
        </div>
        <div >
          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Sintomas: {''}
            <span className='font-normal normal-case'>{sintomas}</span>
          </p>
        </div>
        <div className="flex justify-between mt-10">
          <button 
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
            onClick={()=>setPaciente(paciente)}
          >Editar</button>
          <button 
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md"
            onClick = { handleEliminar}
          >Eliminar</button>

        </div>
      </div>
    </div>
  )
}

export default Paciente