import { signOut } from "firebase/auth"
import { auth } from "../firebase/FirebaseConfig"
import { useNavigate } from "react-router-dom"


export const CloseSession = () => {

  const navigate = useNavigate()
  
  const closedSession = async()=> {
    try{
      await signOut(auth)
      navigate('/login')
    }catch(error){
      console.log(error)
    }
  }

  return (
    <button onClick={closedSession}>
      X
    </button>
  )
}