import { createRoot } from 'react-dom/client'
import './index.css'
import { Contain } from './elementos/Contain.ts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './components/Login.tsx'
import { RegisterUsers } from './components/RegisterUsers.tsx'
import { GastosByCategory } from './components/GastosByCategory.tsx'
import { ListGastos } from './components/ListGastos.tsx'
import { EditGasto } from './components/EditGasto.tsx'
import {Helmet} from "react-helmet";
import favicon from '/images/logo.svg'
import Fondo from './elementos/Fondo.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { RutaPrivada } from './components/RutaPrivada.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    {/* <StrictMode> */}
    <Helmet>
      <link rel="shortcut icon" href={favicon} type='image/x-icon'/>
      <title>appGastos - djcadaniel</title>
    </Helmet>
    <AuthProvider>
      <BrowserRouter>
          <Contain>
            <Routes>
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<RegisterUsers/>}/>
              <Route path='/categories' element={
                <RutaPrivada>
                  <GastosByCategory />
                </RutaPrivada>
              }/>
              <Route path='/list' element={
                <RutaPrivada>
                  <ListGastos />
                </RutaPrivada>
              }/>
              <Route path='/edit:id' element={
                <RutaPrivada>
                  <EditGasto />
                </RutaPrivada>
              }/>
              <Route path='/' element={
                <RutaPrivada>
                  <App />
                </RutaPrivada>
              }/>
            </Routes>
          </Contain>
      </BrowserRouter>
      <Fondo />
    </AuthProvider>
    {/* </StrictMode> */}
  </>
)