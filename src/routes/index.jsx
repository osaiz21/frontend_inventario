
import {  useEffect, useState } from "react"
import { PublicRoute } from "./PublicRoute"
import { PrivateRoute } from "./PrivateRoute"
import { Navigate } from "react-router-dom"

export const Generalroute = () => {
  const [ token, setToken ] = useState(window.localStorage.getItem('token'))
  
  
  useEffect(() => {
  },[token])

  return (
    <>
      { !!token ? <PrivateRoute/> : <PublicRoute/> }
    </>
  )
}