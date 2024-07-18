import { Route } from "react-router-dom"
import Login from "../pages/Login"



export const PublicRoute = () => {

    useEffect(() => {
        console.log('eval token')
    },[])
    return(
      <>
        <Route path="/">
          <Route path="login" element={<Login/>}/>
        </Route>
      </>
    )
}