import { useEffect } from "react"

import { DataTableCmp } from "../DataTable/DataTable"
import { useDispatch } from "react-redux"
import { getListaInvUsers } from "../../thunks/Inventarios"

const nameTableInv = 'table_inventario_users'
export const ListInventarioUsuario = () => {
    const dispatch = useDispatch()
    
    const createTblinventario_users = async () => {
      try {
         await dispatch(getListaInvUsers({
          nameDiv : nameTableInv
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
            <DataTableCmp id={nameTableInv} />
        </div>
      </>
      
    )
}