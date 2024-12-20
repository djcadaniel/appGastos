import { Helmet } from "react-helmet"
import { ContenedorHeader, Header, Titulo } from "../elementos/Header"
import { Boton } from "../elementos/Boton"
import { ContenedorBoton, Formulario, Input } from "../elementos/Form"
import { useNavigate } from "react-router-dom"
import { ChangeEvent, FormEvent, useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/FirebaseConfig"
import { Alert } from "../elementos/Alert"

export const Login = () => {

  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const [stateAlert, setStateAlert] = useState(false)
  const [alert, setAlert] = useState({
    tipo: '',
    message: ''
  })

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async(e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setStateAlert(false)
    setAlert({...alert})
  
    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    if(!expresionRegular.test(data.email)){
      setStateAlert(true)
      setAlert({
        tipo: 'error',
        message: 'Ingresa un correo válido'
      })
      return
    }

    if(!data.email || !data.password){
      setStateAlert(true)
      setAlert({
        tipo: 'error',
        message: 'Todos los campos son obligatorios'
      })
      return
    }

    try{
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate('/')
    } catch(error){
      setStateAlert(true);
      let message;
      if(error instanceof Error){
        switch(error.name){
          case 'auth/wrong-password':
            message = 'La contraseña no es correcta'
            break
          case 'auth/user-not-found':
            message = 'No se encontró ninguna cuenta con este correo electrónico'
            break
          default:
            message= 'Hubo un error al intentar crear la cuenta'
          break
        }
        setAlert({
          tipo: 'error',
          message: message
        })
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>Iniciar Sesión</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Iniciar Sesión</Titulo>
          <div>
            <Boton to='/register'>Registrarse</Boton>
          </div>
        </ContenedorHeader>
      </Header>
      <Formulario onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={data.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={data.password}
          onChange={handleChange}
        />
        <ContenedorBoton>
          <button type="submit">Iniciar sesión</button>
        </ContenedorBoton>
      </Formulario>
      <Alert 
        tipo = {alert.tipo}
        mensaje = {alert.message}
        stateAlert = {stateAlert}
        setStateAlert = {setStateAlert}
      />
    </>
  )
}