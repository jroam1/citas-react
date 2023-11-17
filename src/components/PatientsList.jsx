import Patient from "./Patient"
import { useEffect } from "react"

const PatientsList = ({patients,setPatient, removePatient}) => {

  console.log('esta es la validación', patients && patients.length)
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          { patients.map( patient => (
            <Patient
                key={patient.id}
                patient = {patient} 
                setPatient = {setPatient}
                removePatient={removePatient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Comienza agregando pacientes y {''}
            <span className="text-indigo-600 font-bold">aparecerán en este lugar</span>
          </p>
        </>
      )}
    </div>
  )
}

export default PatientsList
