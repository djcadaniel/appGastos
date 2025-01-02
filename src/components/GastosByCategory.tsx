import { Helmet } from "react-helmet"
import { Header, Titulo } from "../elementos/Header"
import { BtnRegresar } from "../elementos/BtnBack"
import { BarraTotalGastado } from "./BarraTotalGastado"

export const GastosByCategory = () => {
  return (
    <>
      <Helmet>
        <title>Gastos por Categoría</title>
      </Helmet>
      <Header>
        <BtnRegresar />
        <Titulo>Gastos por Categoría</Titulo>
      </Header>
      <BarraTotalGastado />
    </>
  )
}