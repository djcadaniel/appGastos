import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/FirebaseConfig";

interface AuthContextProps {
  user: User | null
}

const AuthContext = createContext<AuthContextProps>({
  user: null
})

const useAuth = ()=>{
  return useContext(AuthContext)
}

interface AuthProviderProps{
  children: ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {

  const [usuario, setUsuario] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    //comprobamos si hay un usuario
    //onAuthStateChanged cambia cuando se modifica el estado de sesion
    const cancelarSuscription = onAuthStateChanged(auth, (user)=>{
      console.log(user)
      setUsuario(user)
      setLoading(false)
    })

    return cancelarSuscription;
  }, [])
  

  return (
    <AuthContext.Provider value={{ user: usuario }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
export {AuthProvider, AuthContext, useAuth}