import { setCodigoPlano } from "../Slices/UbicacionInventarioSlice"
import { instanceXhr } from "../axios"

export const getUbicacionPlano = (filtro = {}) => {
    return async (dispatch) => {
        const { data } = await instanceXhr.get(
            `v1/getUbicacionInventario`,
            { params: filtro}
        )
        dispatch(setCodigoPlano(data))
        
    }
}

export const crearUbicacionPlano = (formData = {}) => {
    return async (dispatch) => {
        const { data } = await instanceXhr.post(
            `v1/createUbicacionInventario`,
            formData
        )

        // dispatch(setCodigoPlano(data))
    }
}