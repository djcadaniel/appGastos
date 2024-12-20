import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BtnBack = styled.button`
    display: block;
    width: 3.12rem;
    height: 3.12rem;
    line-height: 3.12rem;
    text-align: center;
    margin-right: 1.25rem;
    border: none;
    background-color: #000;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.31rem;
    cursor: pointer;
    
    @media(max-width: 60rem){
      width: 2.5rem;
      height: 2.5rem;
      line-height: 2.5rem;
    }
`;

// const Icono = styled(IconoFlecha)`
//   width: 50%;
//   height: auto;
//   fill: #fff;
// `

const BtnRegresar = ()=>{

  const navigate = useNavigate()

  return(
    <BtnBack
      onClick={()=> navigate('/')}
    >

    </BtnBack>
  )
}

export {BtnRegresar}