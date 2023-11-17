const Patient = ({patient, setPatient, removePatient}) => {

    const {name, propietario, email, date, sintomas, id} = patient

    const handleRemove = () => {
        const confirm_remove = confirm('Deseas eliminar este paciente?')
        if (confirm_remove) {
            removePatient(id);
        }
    }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">{name}</span>
        </p>          
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
            <span className="font-normal normal-case">{propietario}</span>
        </p>          
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case">{email}</span>
        </p>          
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {''}
            <span className="font-normal normal-case">{date}</span>
        </p>          
        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
            <span className="font-normal normal-case">{sintomas}</span>
        </p>  
        <div className="flex justify-between mt-5">
            <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg" onClick={() => setPatient(patient)}>Editar</button>
            <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg" onClick={handleRemove}>Eliminar</button>
        </div>        
    </div>
  )
}

export default Patient
