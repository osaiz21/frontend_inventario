import { useEffect } from "react"

import { DataTableCmp } from "../DataTable/DataTable"
import { useDispatch } from "react-redux"
import { getListaInvUsers } from "../../thunks/Inventarios"

const nameTableInv = 'dt_table_inventario_users'
export const ListInventarioUsuario = () => {
    const dispatch = useDispatch()
    
    const createTblinventario_users = async () => {
      try {
         await dispatch(getListaInvUsers({
          nameDiv : nameTableInv,
          createdAt: $('#createdAt').val()  ||  new Date().toISOString().slice(0, 10)
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
      <div className="row">
        <div className="cols-2">
          <div className='input-group'>
            <input
              className={`form-control `}
              name="createdAt"
              id='createdAt'
              type="date"
            />
            <div className="input-group-append">
              <button 
                className="btn btn-outline-secondary btn-sm" 
                type="button"
                onClick={() =>  { 
                  createTblinventario_users()
                }}
              >Buscar</button>
            </div>
          </div>
        </div>
      </div>
        <div className="card-body">
            <DataTableCmp id={nameTableInv} />
        </div>
      </>
      
    )
}