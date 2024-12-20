import { Helmet } from "react-helmet"
import { Header, Titulo } from "../elementos/Header"
import { BtnRegresar } from "../elementos/BtnBack"
import { useAuth } from "../context/AuthContext"

export const ListGastos = () => {

  const contexto = useAuth();
  console.log(contexto)

  return (
    <>
      <Helmet>
        <title>Gastos por Categoría</title>
      </Helmet>
      <Header>
        <BtnRegresar />
        <Titulo>Gastos por Categoría</Titulo>
      </Header>
    </>
  )
}