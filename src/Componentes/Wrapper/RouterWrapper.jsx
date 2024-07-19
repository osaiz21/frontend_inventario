import { Route, Routes } from "react-router-dom"
import Wrapper from "./WrapperGeneral"

export const RouterWrapper = () => {
    
    <Routes>
        <Route path="/*" element={<Wrapper/>}></Route>
    </Routes>
}
