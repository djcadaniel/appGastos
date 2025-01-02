import { Helmet } from "react-helmet"
import { Header, Titulo } from "../elementos/Header"
import { BtnRegresar } from "../elementos/BtnBack"
import { BarraTotalGastado } from "./BarraTotalGastado"
import { useGetGastos } from "../hooks/useGetGastos"

export const ListGastos = () => {

  const [gastos] = useGetGastos()
  console.log(gastos)

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