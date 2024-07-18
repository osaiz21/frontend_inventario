import { Route, Routes } from "react-router-dom"
import Wrapper from "./WrapperGeneral"

export const RouterWrapper = () => {
    const Prueba = () => {
        return (
            <><p>hola</p></>
        )
    }
    <Routes>
        <Route path="/*" element={<Prueba/>}></Route>
    </Routes>
}
