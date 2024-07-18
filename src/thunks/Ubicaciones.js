import { setCodigoPlano, setCodigoPlanoSelected } from "../Slices/UbicacionInventarioSlice"
import { instanceXhr } from "../axios"
import { getAllCiudades, getAllPaises, getAllPisos } from "./Paises"

export const getUbicacionPlano = (filtro = {}) => {
    return async (dispatch) => {
        const { data = {} } = await instanceXhr.get(
            `v1/getUbicacionInventario`,
            { params: filtro}
        )
        dispatch(setCodigoPlano(data))
        if (!!Object.keys(data).length) {
            dispatch(setCodigoPlanoSelected(data))
        }else {
            dispatch(getAllPaises())
            dispatch(getAllCiudades())
            dispatch(getAllPisos())
        }
    }
}

export const crearUbicacionPlano = (formData = {}) => {
    return async (dispatch) => {
        const { data } = await instanceXhr.post(
                `v1/createUbicacionInventario`,
                formData
            )
            dispatch(setCodigoPlano(data))
            if (!!data.length) {
                dispatch(setCodigoPlanoSelected(data[0]['codigo_plano']))
            }
        
    }
}