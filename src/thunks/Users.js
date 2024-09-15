import { setEmpleados, setIdentificacion, setPerfil } from "../Slices/UserSlice"
import { axiosPrivate, DataTableGeneral, instanceXhr } from "../axios"

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
    return async (dispatch , getEstate ) => {

        const { data = [] } = await instanceXhr.get(
            `v1/getUsersCecos`
        )
        
        dispatch(setEmpleados(data))
        const table = new DataTableGeneral(
            nameDiv,
            data,
            [
                { data: 'id', title: 'id'  },
                { data: 'tipo_identificacion_1', title: 'tipo_identificacion_1' },
                { data: 'num_identificacion_1', title: 'num_identificacion_1' },
                { data: 'nombres_1', title: 'nombres_1' },
                { data: 'apellidos_1', title: 'apellidos_1' },
                { data: 'cargo_1', title: 'cargo_1' },
                { data: 'cecos_1', title: 'cecos_1' }
            ]
        )
        table.createDataTable()
    }
}

export const validateLogin = ( body = {}) => {
    return async (dispatch) => {
        const { data = {} } = await instanceXhr.post(
            `v1/loginAuditor`,
            body
        )
        return data
    }
}

export const validateToken = ( token = '') => {
    return async (dispatch) => {
        const axiosp = new axiosPrivate()
        const { data = {} } = await instanceXhr.post(
            `v1/validateToken2`,
            {
                id: axiosp.getItem('id_user_login')
            },
            {
            }
        )
        dispatch(setPerfil(data))
    }
}

