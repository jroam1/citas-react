import { useState, useEffect } from "react"
import Error from "./Error";

function Form({patients, setPatients, patient}) {
    const [name, setName] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(patient).length > 0){
            setName(patient.name)
            setPropietario(patient.propietario)
            setEmail(patient.email)
            setDate(patient.date)
            setSintomas(patient.sintomas)
        } 
    }, [patient])

    const generarId = () => {
        const random = Math.random().toString(36);
        const fecha = Date.now().toString(36);

        return random + fecha
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validacion del formulario

        if ([name, propietario, email, date, sintomas].includes('')){
            console.log('Hay al menos un campo vacio')
            setError(true);
        } else {
            console.log('Todos los campos estan llenos')
            setError(false);
        }
        // Objeto de paciente
        const objectPatient = {
            name,
            propietario,
            email,
            date,
            sintomas,
        };

        // Validamos si se ha cargado el prop de patient verificando su id
        if (patient.id) {
            // Se está editando

            // Al presionar Editar Paciente se vuelve a cargar el objectPatient con la información nueva
            // Luego, debemos asignar el id del objeto viejo, esto es el que se pasa con Patient
            objectPatient.id = patient.id
            // Puesto que tenemos acceso al State de pacientes (la lista de pacientes agregados) entonces
            // iteramos buscando el paciente con el id del que se esta modificando y usando SetPatients actualizamos
            // la lista de pacientes reemplazando el paciente viejo con el paciente editado
            const UpdatePatients = patients.map(patientState => patientState.id === patient.id ? objectPatient : patientState )
            // Finalmente, recargamos el set del state
            setPatients(UpdatePatients)

        } else {
            // Registro nuevo ->
            // Le añadimos un id
            objectPatient.id = generarId()
            // Modificamos el State de Pacientes para ir guardando todos los pacientes que se van agregando
            // solamente podemos modificar el State Patient con su modificador SetPatients
            setPatients([...patients, objectPatient]);
        }

        // Luego de guardar el formulario, reiniciamos su información
        setName('');
        setPropietario('');
        setEmail('');
        setDate('');
        setSintomas('');
    }
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                {/* Sintaxis usando props */}
                {/* {error && <Error mensaje='Todos los campos son obligatorios'/>} */}
                {/* Sintaxis usando children */}
                {error && <Error><p>Todos los campos son obligatorios</p></Error>}
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input
                        id="mascota" 
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                    <input
                        id="propietario" 
                        type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        value={propietario}
                        onChange={(e)=> setPropietario(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                    <input
                        id="email" 
                        type="email"
                        placeholder="Email contacto propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Fecha de alta</label>
                    <input
                        id="alta" 
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        value={date}
                        onChange={(e)=> setDate(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>
                    <textarea 
                        id="sintomas" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los síntomas"
                        value={sintomas}
                        onChange={(e)=> setSintomas(e.target.value)}
                    ></textarea>
                </div>

                <input 
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors" 
                    value={ patient.id ? 'Editar Paciente' : 'Agregar paciente'}
                />
            </form>
        </div>
    )
}

export default Form
