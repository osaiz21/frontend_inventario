import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Wrapper from "../Componentes/Wrapper/WrapperGeneral"

export const PrivateRoute = ({children}) => {

    useEffect(() => {
        console.log('private')
    },[])

    return (
        <Routes>
            <Route 
                path="/wrapper" 
                element={<Wrapper/>}
            >
            </Route>
            <Route 
                path="/*" 
                element={<Wrapper/>}
            ></Route>
        </Routes>)
}