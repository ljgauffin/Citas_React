import {useState, useEffect} from "react";
import Error from "./Error";


function Formulario ({pacientes,setPacientes, paciente, setPaciente }){
    const [nombre, setNombre] = useState('');
    const [propietario , setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas , setSintomas] = useState('');

    const [error, setError]=useState(false);

    useEffect(() => {

        if(Object.keys(paciente).length>0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setSintomas(paciente.sintomas)
            setAlta(paciente.alta)

        }else{
            console.log('No hay paciente')
        }
    }, [paciente]) 



    const generarId = ()=>{
        const fecha = Date.now();
        const numero = Math.random().toString().substring(2);
        return(numero+fecha);
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();

        //validacion del formulario
        if([nombre, propietario, email, alta, sintomas].includes('')){
            setError(true);
        }else{
            setError(false);

            //objeto de paciente
            const objetoPaciente = {nombre, propietario, email, alta, sintomas}
            console.log(objetoPaciente)
            console.log(paciente)
            
            if(paciente.id){
                //editando el paciente
                objetoPaciente.id=paciente.id
                const pacientesActualizados = pacientes.map(pacienteState=>(objetoPaciente.id===pacienteState.id? objetoPaciente :pacienteState))

                setPacientes  (pacientesActualizados);
            }else{
                //agregando el paciente
                objetoPaciente.id = generarId()
                setPacientes([...pacientes,objetoPaciente])
            }
            
            
            
            
            //reiniciar el form
            setNombre('');setPropietario('');setAlta('');setEmail('');setSintomas('');

            //reiniciar paciente (editado)
            setPaciente({});

            
        }
        console.log('ENviando formiulario')
    }
    
    return(
        <div className=" md:w-1/2 lg:w-2/5 mx-5" >
            <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>
            <p className="text-xl mt-5 text-center mb-10">
                Añade pacientes y {' '}
                <span className=" text-indigo-600 font-bold ">Administralos</span>
            </p>
            <form 
                onSubmit={handleSubmit}
                className=" bg-white shadow-md rounded-lg py-10 px-5"
            >
                <div className=" mb-5">
                    <label htmlFor="mascota" className=" block text-gray-700 uppercase font-bold">
                        Nombre Mascota{' '}</label>
                    <input 
                        id="mascota"
                        className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="text" 
                        placeholder="Nombre de la Mascota"
                        value={nombre}
                        onChange={(e)=>setNombre(e.target.value)}
                    />
                </div>
                <div className=" mb-5">
                    <label htmlFor="propietario" className=" block text-gray-700 uppercase font-bold">
                        Nombre Dueño{' '}</label>
                    <input 
                        id="propietario"
                        className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="text" 
                        placeholder="Nombre del dueño"
                        value={propietario}
                        onChange={(e)=>setPropietario(e.target.value)}
                    />
                </div>
                <div className=" mb-5">
                    <label htmlFor="email" className=" block text-gray-700 uppercase font-bold">
                        Email{' '}</label>
                    <input 
                        id="email"
                        type='email'
                        className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className=" mb-5">
                    <label htmlFor="alta" className=" block text-gray-700 uppercase font-bold">
                        Alta{' '}</label>
                    <input 
                        id="alta"
                        type='date'
                        className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={alta}
                        onChange={(e)=>setAlta(e.target.value)}
                        
                    />
                </div>
                <div className=" mb-5">
                    <label htmlFor="sintomas" className=" block text-gray-700 uppercase font-bold">
                        Sintomas{' '}</label>
                    <textarea 
                        placeholder="Describe los sintomas"
                        id="sintomas" 
                        className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={sintomas}
                        onChange={(e)=>setSintomas(e.target.value)}
                    />
                </div>
                {error && <Error><p>Todos los campos son obligatorios</p></Error>  }
                <input 
                    type="submit" 
                    className=" bg-indigo-600 w-full p-3 text-white uppercase text-bold hover:bg-indigo-700
                     cursor-pointer transition-all "
                    value={paciente.id?'Editar paciente': 'Agregar Paciente'}               />
            </form>
        </div>
    )
}

export default Formulario;

