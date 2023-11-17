import Header from "./components/Header"
import Form from "./components/Form"
import PatientsList from "./components/PatientsList"
import {useState, useEffect} from "react"


function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient ] = useState({}); 

  useEffect(()=>{
    const savedPatients = () => {
      // Recupere el arreglo del LocalStorage, si no existe esa clave (se ha limpiado LS ó se borró el historial)
      // retorne un arreglo vacío para instanciar el SetPatients correctamente
      const patientsLocalStorage = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPatients(patientsLocalStorage)
    }
    savedPatients();
  }, [])

  useEffect(() => {
    // Cada vez que cambie la dependencia, patients, va a convertir el 
    // arreglo en un string y lo va guardar en local Storage. Puesto que se 
    // guarda con la misma clave, se actualiza directamente sin que sea
    // necesario agregar más código
    console.log('Componente listo ó cambio pacientes. Guardando...');
    localStorage.setItem('pacientes', JSON.stringify(patients))
  }, [patients]) 

  // Bajo esta implementación es posible compartir información del hijo al padre
  // en este caso desde el Header hacia App
  const informationHeader = (valor) => {
    console.log(valor);
  }

  const removePatient = (id) => {
    // Se retorna el arreglo de pacientes actuales del State, removiendo aquellos que
    // no tengan el id seleccionado y se recarga el state usando SetPatients
    const latestpatient = patients.filter((lastpatient) =>  lastpatient.id !== id)
    setPatients(latestpatient)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header
        informationHeader={informationHeader}
      />
      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients} 
          patient={patient}
        />
        <PatientsList 
          patients={patients}
          setPatient={setPatient}
          removePatient={removePatient}
        />
      </div>
    </div>
  )
}

export default App
