import styled from "styled-components";
import { theme } from "../theme";
import { Dispatch, MouseEvent, SetStateAction, useState } from "react";

const ContenedorSelect = styled.div`
    background: ${theme.grisClaro};
    cursor: pointer;
    border-radius: 0.625rem; /* 10px */
    position: relative;
    height: 5rem; /* 80px */
    width: 40%;
    padding: 0px 1.25rem; /* 20px */
    font-size: 1.5rem; /* 24px */
    text-align: center;
    display: flex;
    align-items: center;
    transition: .5s ease all;
    &:hover {
        background: ${theme.grisClaro2};
    }
`;
 
const OpcionSeleccionada = styled.div`
    width: 100%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
        width: 1.25rem; /* 20px */
        height: auto;
        margin-left: 1.25rem; /* 20px */
    }
`;
 
const Opciones = styled.div`
    background: ${theme.grisClaro};
    position: absolute;
    top: 5.62rem; /* 90px */
    left: 0;
    width: 100%;
    border-radius: 0.625rem; /* 10px */
    max-height: 18.75rem; /* 300px */
    overflow-y: auto;
`;
 
const Opcion = styled.div`
    padding: 1.25rem; /* 20px */
    display: flex;
    svg {
        width: 28px;
        height: auto;
        margin-right: 1.25rem; /* 20px */
    }
    &:hover {
        background: ${theme.grisClaro2};
    }
`;

interface SelectByCategoriesProps {
  category: string,
  setCategory: Dispatch<SetStateAction<string>>
}

export const SelectByCategories = ({category, setCategory}: SelectByCategoriesProps) => {

  const [mostrarSelect, setMostrarSelect] = useState(false)

  const categorias = [
    {id: 'comida', texto: 'Comida'},
    {id: 'cuentas y pagos', texto: 'Cuentas y pagos'},
    {id: 'hogar', texto: 'Hogar'},
    {id: 'transporte', texto: 'Transporte'},
    {id: 'ropa', texto: 'Ropa'},
    {id: 'salud e higiene', texto: 'Salud e Higiene'},
    {id: 'compras', texto: 'Compras'},
    {id: 'diversion', texto: 'Diversion'}
]

const handleClick = (e: MouseEvent<HTMLDivElement>) => {
  // console.log(e.currentTarget.dataset.valor)
  // setCategory(e.currentTarget.dataset.valor)
  const valor = e.currentTarget.dataset.valor;
  if (valor !== undefined) {
    console.log(valor);
    setCategory(valor);
  }
}

  return (
    <ContenedorSelect onClick={()=>setMostrarSelect(!mostrarSelect)}>
      <OpcionSeleccionada>{category}</OpcionSeleccionada>
      {
        mostrarSelect && 
        <Opciones>
          {categorias.map((category) => (
            <Opcion 
              key={category.id}
              data-valor={category.id}
              onClick={handleClick}
            >
              {category.texto}
            </Opcion>
          ))}
        </Opciones>
      }
    </ContenedorSelect>
  )
}

export {ContenedorSelect, OpcionSeleccionada, Opciones, Opcion}