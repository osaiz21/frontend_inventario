import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import {  useState } from "react"
import { PrivateRoute } from "./PrivateRoute"
import RouterWrapper from "../Componentes/Wrapper/RouterWrapper"

const Generalroute = () => {
  const [ token, setToken ] = useState(window.localStorage.getItem('token'))
  
  const Prueba = () => {
    return (
        <>hola</>
    )
  }
  return (
    <Routes>
      <Route 
          path="/wrapper/*" 
          element={
            <Routes>
              <Route path="/home" element={<Prueba/>}></Route>
            </Routes>
          }> 
      </Route>

    </Routes>
  )
}

export default Generalroute