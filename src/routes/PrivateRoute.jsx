import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Wrapper from "../Componentes/Wrapper/WrapperGeneral"

export const PrivateRoute = ({children}) => {

    const HomePrivate = () => {
        return (
            <>
                <p>HomePrivate</p>
            </>
        )
    }
    useEffect(() => {
        console.log('private')
    },[])

    return (
        <Routes>
            <Route 
                path="/" 
                element={<HomePrivate/>}
            ></Route>
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