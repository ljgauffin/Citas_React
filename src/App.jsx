import { useState, useEffect } from 'react'
import Header  from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';


function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] =useState({});

  // useEffect(()=>{
  //   const obtenerLS=()=>{
  //     const pacetesLS =  JSON.parse(localStorage.getItem('pacientes') ?? []);
  //     console.log(pacetesLS)
  //     setPacientes(pacetesLS)
  //   }

  //   obtenerLS();
  // },[])


  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])

  const eliminarPaciente =(id) =>{
    console.log(`Eliminando el paciente ${id}`)
    const pacientesActualizado = pacientes.filter((pacienteState)=>pacienteState.id !==id)
    console.log(pacientesActualizado)
    setPacientes(pacientesActualizado)
  }


  return (
    <div className='container mx-auto mt-20'>
      <Header


      />
      <div className=' mt-12 md:flex'>
          <Formulario
            pacientes = {pacientes}
            setPacientes = {setPacientes}
            paciente = {paciente}
            setPaciente={setPaciente}
          />
          <ListadoPacientes
            pacientes = {pacientes}

            setPaciente = {setPaciente}
            eliminarPaciente = {eliminarPaciente}
          />
      </div>

    </div>
  )
}

export default App
