import { Route, Routes } from "react-router-dom"
import { useEffect } from "react"
import Login from "../pages/Login"



export const PublicRoute = () => {

    useEffect(() => {
        console.log('public')
    },[])

    return(
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/*" element={<Login/>}/>
      </Routes>
    )
}