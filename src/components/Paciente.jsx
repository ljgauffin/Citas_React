import React, {useEffect} from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const handleEliminar = ()=> {
    const respuesta= confirm('Esta seguro que desea eliminar la paciente?')

    if(respuesta){
      eliminarPaciente(paciente.id)
    }
  
  }


  return (
    <div className=' bg-white shadow-md px-5 py-10 rounded-xl my-2'>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {' '}
      <span className=' font-normal normal-case'>{paciente.nombre}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {' '}
      <span className=' font-normal normal-case'>{paciente.propietario}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>email: {' '}
      <span className=' font-normal normal-case'>{paciente.email}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Alta: {' '}
      <span className=' font-normal normal-case'>{paciente.alta}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {' '}
      <span className=' font-normal normal-case'>{paciente.sintomas}</span>
    </p>
    <div className=' flex justify-between mt-10'>
      <button 
        className=' py-2 px-10 bg-indigo-700 text-white font-bold uppercase rounded-lg'
        type='button'
        onClick={() => setPaciente(paciente)}
      >Editar</button>
    
      <button 
        className=' py-2 px-10 bg-red-700 text-white font-bold uppercase rounded-lg'
        type='button'
        onClick={handleEliminar}
      >Eliminar</button>
    </div>
  </div>
  )
}

export default Paciente