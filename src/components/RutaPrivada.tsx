import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

interface RutaPrivada {
  children: React.ReactNode;
}

export const RutaPrivada = ({children}: RutaPrivada) => {

  const {user} = useAuth()

  if(user){
    return children;
  }else{
    return <Navigate replace to='/login' />
  }
}