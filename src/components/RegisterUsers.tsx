import { Helmet } from "react-helmet"
import { ContenedorHeader, Header, Titulo } from "../elementos/Header"
import { Boton } from "../elementos/Boton"
import { ContenedorBoton, Formulario, Input } from "../elementos/Form"
import laptop from '/images/laptop.jpg'
import { ChangeEvent, FormEvent, useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig"
import { useNavigate } from "react-router-dom"
import { Alert } from "../elementos/Alert"

export const RegisterUsers = () => {

  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: '',
    password2: ''
  })
  const [stateAlert, setStateAlert] = useState(false)
  const [alert, setAlert] = useState({
    tipo: '',
    mensaje: ''
  })


  const handleChange =(e:ChangeEvent<HTMLInputElement>)=>{
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setStateAlert(false)
    setAlert({...alert})

    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    if(!expresionRegular.test(data.email)){
      console.log('Ingresar un correo válido')
      setStateAlert(true)
      setAlert({
        tipo: 'error',
        mensaje: 'Ingresar un correo válido'
      })
      return
    }

    if(!data.email || !data.password || !data.password2){
      setStateAlert(true)
      setAlert({
        tipo: 'error',
        mensaje: 'Todos los campos son obligatorios'
      })
      return
    }


    if(data.password !== data.password2){
      setStateAlert(true)
      setAlert({
        tipo:'error',
        mensaje: 'No son iguales las contraseñas'
      })
      return
    }

    try{
      await createUserWithEmailAndPassword(auth, data.email, data.password2)
      navigate('/')
    }catch(error){
      setStateAlert(true);

      let message: string;
      switch((error as { code: string }).code){
        case 'auth/invalid-password':
          message = 'La contraseña tiene que ser mínimo de 6 caracteres'
          break;
        case 'auth/email-already-exists':
            message = 'Ya existe una cuenta con el correo electrónico proporcionado'
          break;
        case 'auth/invalid-password':
          message = 'El correo no es válido'
          break;
        default:
          message = 'Hubo un error al intentar crear la cuenta'
          break;
      }
      setAlert({
        tipo: 'error',
        mensaje: message
      })
    }

  }

  return (
    <>
      <Helmet>
        <title>Crear cuenta</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Crear cuenta</Titulo>
          <div>
            <Boton to='/login'>Iniciar sesión</Boton>
          </div>
        </ContenedorHeader>
      </Header>
      <Formulario onSubmit={handleSubmit}>
        <img src={laptop} alt="" style={{width:'10%', position: 'fixed', bottom: '10%'}}/>
        <Input
          type="email"
          name="email"
          value={data.email}
          placeholder="Correo Electrónico"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          value={data.password}
          placeholder="Contraseña"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password2"
          value={data.password2}
          placeholder="Repetir Contraseña"
          onChange={handleChange}
        />
        <ContenedorBoton>
          {/* <Boton to='' type="submit">Crear Cuenta</Boton> */}
          <button type="submit">Crear cuenta</button>
        </ContenedorBoton>
      </Formulario>
      <Alert
        tipo = {alert.tipo}
        mensaje = {alert.mensaje}
        stateAlert = {stateAlert}
        setStateAlert = {setStateAlert}
      />
    </>
  )
}