import { setCodigoPlano, setCodigoPlanoSelected, setDataFormUbicacionInventario } from "../Slices/UbicacionInventarioSlice"
import { axiosPrivate, instanceXhr } from "../axios"
import { getAllCiudades, getAllPaises, getAllPisos } from "./Paises"

export const getUbicacionPlano = (filtro = {}) => {
    return async (dispatch) => {
        
        const axiospriv = new axiosPrivate()
        const { data = {} } = await instanceXhr.get(
            `v1/getUbicacionInventario`,
            { params: filtro}
        )
        dispatch(setCodigoPlano(data))
        const { id = 0 } = data
        // window.localStorage.setItem('ubicacion_inventario_id', id)
        
        if (!!Object.keys(data).length) {
            dispatch(setCodigoPlanoSelected(data))
            axiospriv.setItem('codigoPlanoSelected',data)
        } else {
            dispatch(setDataFormUbicacionInventario(filtro))
            
            
        }
    }
}

export const crearUbicacionPlano = (formData = {}) => {
    return async (dispatch) => {
      const axiospriv = new axiosPrivate()
      
      
      const { data } = await instanceXhr.post(
        `v1/createUbicacionInventario`,
        {
            ...formData
        }
      )
      dispatch(setCodigoPlano(data))
      dispatch(setCodigoPlanoSelected(data))
      axiospriv.setItem('codigoPlanoSelected',data)
        
    }
}