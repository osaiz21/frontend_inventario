import { useEffect } from "react"

import { DataTableCmp } from "../DataTable/DataTable"
import { useDispatch } from "react-redux"
import { getListaInvUsers } from "../../thunks/Inventarios"

export const ListInventarioUsuario = () => {
    const dispatch = useDispatch()
    
    const createTblinventario_users = async () => {
      try {
         await dispatch(getListaInvUsers({
          nameDiv : 'table_inventario_users'
        } ))
      } catch (error) {
        toastr.error(error || 'no Identificado')
      }
    }

    useEffect(() => {
      createTblinventario_users()
    },[])

    return (
      <>
        <div className="card-body">
            <DataTableCmp id='table_inventario_users' />
        </div>
      </>
      
    )
}