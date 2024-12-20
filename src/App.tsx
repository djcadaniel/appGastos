import { Helmet } from "react-helmet"
import { ContenedorBotones, ContenedorHeader, Header, Titulo } from "./elementos/Header"
import { Boton } from "./elementos/Boton"
import { CloseSession } from "./components/CloseSession"
import { FormGasto } from "./components/FormGasto"

export function App() {


  return (
    <>
      <Helmet>
        <title>Agregar Gasto</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Agregar Gasto</Titulo>
          <ContenedorBotones>
            <Boton to='/categories'>Categorias</Boton>
            <Boton to='/list'>Lista de Gastos</Boton>
            <CloseSession />
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
      <FormGasto />
    </>
  )
}

export default App