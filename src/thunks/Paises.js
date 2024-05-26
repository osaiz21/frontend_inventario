import { setPais } from "../Slices/PaisSlice"
import { instanceXhr } from "../axios"

export const getAllPaises = (filtro = {}) => {
    return async (dispatch) => {
        const { data = [] } = await instanceXhr.get(
            `v1/getlsPais`,
            { params: filtro}
        )
        $('#pais').select2({
            data,
            width: '100%'
        })
        dispatch( setPais(data) )
    }
}

export const getAllCiudades = (filtro = {}) => {
    return async (dispatch) => {
        const { data = [] } = await instanceXhr.get(
            `v1/getlsCiudad`,
            { params: filtro}
        )
        $('#ciudad').select2({
            data,
            width: '100%'
        })
        dispatch( setPais(data) )
    }
}

export const getAllPisos = (filtro = {}) => {
    return async (dispatch) => {
        const { data = [] } = await instanceXhr.get(
            `v1/getlsPisos`,
            { params: filtro}
        )
        $('#pisos').select2({
            data,
            width: '100%'
        })
        dispatch( setPais(data) )
    }
}