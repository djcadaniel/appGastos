import { useEffect, useState } from "react"
import { db } from "../firebase/FirebaseConfig"
import { collection, doc, DocumentData, limit, onSnapshot, orderBy, query, QueryDocumentSnapshot, where } from "firebase/firestore"
import { useAuth } from "../context/AuthContext"

export const useGetGastos = () => {

  const {user} = useAuth()

  const [gastos, setGastos] = useState<{id: string; [key: string]: any}[]>([])
  const [ultimogasto, setUltimogasto] = useState<QueryDocumentSnapshot<DocumentData> | null>(null)
  const [masPorCargar, setMasPorCargar] = useState(false)

  useEffect(()=>{

    const consulta = query(
      collection(db, 'gastos'),
      where('uidUsuario', '==', user?.uid),
      orderBy('fecha', 'desc'),
      limit(10)
    )

    const unsuscribe = onSnapshot(consulta, (snapshot) => {
      if(snapshot.docs.length > 0){
        setUltimogasto(snapshot.docs[snapshot.docs.length -1])
        setMasPorCargar(true)
      }else{
        setMasPorCargar(false)
      }

      setGastos(snapshot.docs.map((gasto)=>{
        return {...gasto.data(), id: gasto.id}
      }))
    })

    return unsuscribe;
  },[user])

  return [gastos, masPorCargar]
}