import { ContenedorBoton, ContenedorFiltros, Formulario, Input, InputGrande } from '../elementos/Form'
import { ChangeEvent, FormEvent, useState } from 'react'
import { SelectByCategories } from './SelectByCategories'
import { DatePicker } from './DatePicker'
import { addGasto } from '../firebase/addGasto'
import { getUnixTime } from 'date-fns'
import { useAuth } from '../context/AuthContext'
import { Alert } from '../elementos/Alert'

export const FormGasto = () => {

  const [input, setInput] = useState({
    description: '',
    cantidad: ''
  })
  const [category, setCategory] = useState('hogar')
  const [fech, setFech] = useState(new Date())
  const [alert, setAlert] = useState({
    tipo: '',
    mensaje: ''
  })
  const [stateAlert, setStateAlert] = useState(false)

  const {user} = useAuth();

  const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
    setInput({
      ...input,
      [e.target.name]: e.target.name === 'cantidad'
        ? e.target.value.replace(/[^0-9.]/g, '')
        : e.target.value
    });
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

    let cantidad = parseFloat(input.cantidad).toFixed(2)
    
    if(input.description !== '' && input.cantidad !== ''){
      if(cantidad){
        addGasto({
          categoria: category,
          description: input.description,
          cantidad: cantidad,
          fecha: getUnixTime(fech),
          uidUsuario: user?.uid
        })
        .then(()=>{
          setCategory('hogar')
          setInput({
            description:'',
            cantidad:''
          })
          setFech(new Date())
          setStateAlert(true)
          setAlert({
            tipo: 'exito',
            mensaje: 'Gasto agregado correctamente'
          })
        })
      }else{
        setAlert({
          tipo: 'error',
          mensaje: 'El valor que ingresaste no es correcto'
        })
      }
    }else{
      setStateAlert(true)
      setAlert({
        tipo: 'error',
        mensaje: 'Por favor rellena todos los campos'
      })
    }
  }

  return (
    <Formulario onSubmit={handleSubmit}>
      <ContenedorFiltros>
        <SelectByCategories 
          category = {category}
          setCategory = {setCategory}
        />
        <DatePicker fech={fech} setFech={setFech} />
      </ContenedorFiltros>
      <div>
        <Input 
          type='text'
          name='description'
          id='description'
          placeholder='Descripción'
          value={input.description}
          onChange={handleChange}
        />
        <InputGrande 
          type='text'
          name='cantidad'
          id='cantidad'
          placeholder='$0.00'
          value={input.cantidad}
          onChange={handleChange}
        />
      </div>
      <ContenedorBoton>
        <button type='submit'>
          Agregar Gasto +
        </button>
      </ContenedorBoton>
      <Alert 
        tipo = {alert.tipo}
        mensaje = {alert.mensaje}
        stateAlert = {stateAlert}
        setStateAlert= {setStateAlert}
      />
    </Formulario>
  )
}