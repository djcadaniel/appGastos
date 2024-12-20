import { ContenedorBoton, ContenedorFiltros, Formulario, Input, InputGrande } from '../elementos/Form'
import { ChangeEvent, useState } from 'react'
import { SelectByCategories } from './SelectByCategories'

export const FormGasto = () => {

  const [input, setInput] = useState({
    description: '',
    cantidad: ''
  })
  const [category, setCategory] = useState('hogar')

  const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
    setInput({
      ...input,
      [e.target.name]: e.target.name === 'cantidad'
        ? e.target.value.replace(/[^0-9.]/g, '')
        : e.target.value
    });
  }

  return (
    <Formulario>
      <ContenedorFiltros>
        <SelectByCategories 
          category = {category}
          setCategory = {setCategory}
        />
        <p>Data Picker</p>
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
    </Formulario>
  )
}