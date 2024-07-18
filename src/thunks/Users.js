import { setIdentificacion } from "../Slices/UserSlice"
import { instanceXhr, urldataTable } from "../axios"

export const getTipoIdentificacion = (filtro = {}) => {
    return async (dispatch) => {
        const { data = [] } = await instanceXhr.get(
            `v1/getlsTipoIdentificacion`,
            { params: filtro}
        )
        $('#tipo_identificacion_1').select2({
            data,
            width: '100%'
        })
        dispatch( setIdentificacion(data))
       // dispatch( setPais(data) )
    }
}
export const getUsersCecos = (
    nameDiv = 'sin_definir',
    params = {}
) => {
    return async (dispatch) => {
        let columns = [] 
        new DataTable(`#${nameDiv}`, {
            processing: true,
            // serverSide: true,
            ajax : {
                url: `${urldataTable}v1/dataTable`,
                dataSrc:""
            },
            columns: [
                { data: 'num_identificacion_1' },
                { data: 'nombres_1' },
                { data: 'apellidos_1' },
                { data: 'cargo_1' },
                { data: 'cecos_1' }
            ],              
            destroy: true,
            searching: false
        })
    }
}

