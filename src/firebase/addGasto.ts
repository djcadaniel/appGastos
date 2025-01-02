import { addDoc, collection } from "firebase/firestore"
import { db } from "./FirebaseConfig"

interface addGastoProps {
  categoria: string
  description: string
  cantidad: string
  fecha: number
  uidUsuario: string | undefined
}

const addGasto = ({categoria, description, cantidad, fecha, uidUsuario}: addGastoProps) => {

  return addDoc(collection(db, 'gastos'), {
    categoria: categoria,
    descripcion: description,
    cantidad: Number(cantidad),
    fecha: fecha,
    uidUsuario: uidUsuario
  })
}

export {addGasto}