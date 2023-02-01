import React from 'react'
import { useState, useEffect } from 'react'
import Error from './error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  //useEffect hace que espere aa que haya algun cambio en el objeto paciente para re-renderizar
  //si [] está vacío solo se ejecuta una vez
  useEffect(()=>{
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente]) 

  const generarId = () =>{
    const random = Math.random.toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre,propietario,email,fecha,sintomas].includes('')){
      console.log("Hay al menos un campo vacio")
      setError(true);
      return;
    }
    setError(false);

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      
    }

    if (paciente.id) {//editando el registro

      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === 
                                      paciente.id ? objetoPaciente : pacienteState)
      setPacientes(pacientesActualizados)
      setPaciente({})

    }else{//agregando un registro

      objetoPaciente.id = generarId()
      setPacientes([...pacientes,objetoPaciente])

    }

    //setPacientes([...pacientes, objetoPaciente]);

    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
    
  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>

      <h2 className='font-black text-3xl text-center'>Añadir paciente</h2>
      <p className='text-lg mt-4 text-center mb-10'>
        Añade pacientes y {''} <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>
      <form onSubmit = {handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5'>
        
        {error && <Error><p>Todos los campos son obligatorios</p></Error>  }

        <div className='mb-5'>
          <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
          <input 
            value={nombre} 
            onChange={ (e)=> setNombre(e.target.value)} 
            id='mascota' 
            type="text" 
            placeholder='Nombre del chobi' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
        </div>

        <div className='mb-5'>
          <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Nombre Propietario</label>
          <input 
            value={propietario} 
            onChange={ (e)=> setPropietario(e.target.value)} 
            id='propietario' 
            type="text" 
            placeholder='Nombre del dueño del chobi' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
        </div>

        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>email</label>
          <input 
            value={email} 
            onChange={ (e)=> setEmail(e.target.value)} 
            id='email' 
            type="email" 
            placeholder='Email propietario' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
        </div>

        <div className='mb-5'>
          <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>alta</label>
          <input 
            value={fecha} 
            onChange={ (e)=> setFecha(e.target.value)} 
            id='alta' 
            type="date" 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
        </div>

        <div className='mb-5'>
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>síntomas</label>
          <textarea 
            value={sintomas} 
            onChange={ (e)=> setSintomas(e.target.value)} 
            id='sintomas' 
            type="text" 
            placeholder='Describe los sintomas' 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
        </div>

        <input value={paciente.id ? 'Editar paciente': 'Agregar paciente'}
          type="submit" 

          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer' 
        />

      </form>
    </div>
  )
}

export default Formulario