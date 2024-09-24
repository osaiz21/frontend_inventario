// import { setPais } from "../Slices/PaisSlice"
import { setDataFormUbicacionInventario } from "../Slices/UbicacionInventarioSlice"
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

        $('#pais').on('select2:select', (e) => {
            const { id } = e.params.data;
            console.log('pais', id)
            dispatch(setDataFormUbicacionInventario({
              pais: id
            }))
        })
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
        $('#ciudad').on('select2:select',  (e) => {
            const { id } = e.params.data;
            dispatch(setDataFormUbicacionInventario({
              ciudad: id
            }))
        })
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
        // dispatch( setPais(data) )

        $('#pisos').on('select2:select',  (e) => {
            const { id } = e.params.data
            dispatch(setDataFormUbicacionInventario({
              piso: id
            }))
        })
        
    }
}