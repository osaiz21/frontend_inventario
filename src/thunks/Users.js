import { setEmpleados, setIdentificacion, setPerfil } from "../Slices/UserSlice"
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
    return async (dispatch , getEstate ) => {

        const { data = [] } = await instanceXhr.get(
            `v1/getUsersCecos`
        )
        
        dispatch(setEmpleados(data))
        let table = new DataTable(`#${nameDiv}`, {
            processing: true,
            select: true,
            // serverSide: true,
            autoWidth: false,
            columns: [
                { data: 'id', title: 'id'  },
                { data: 'tipo_identificacion_1', title: 'tipo_identificacion_1' },
                { data: 'num_identificacion_1', title: 'num_identificacion_1' },
                { data: 'nombres_1', title: 'nombres_1' },
                { data: 'apellidos_1', title: 'apellidos_1' },
                { data: 'cargo_1', title: 'cargo_1' },
                { data: 'cecos_1', title: 'cecos_1' }
            ],              
            data,
            destroy: true,
            searching: false
        })

        $(`#${nameDiv}`).on('click', 'tbody tr', function (e) {
            e.currentTarget.classList.toggle('selected');
            console.log(table.rows(this).data());
            console.log(e)
            console.log(this)
            console.log(table.rows(e).data());
        })

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
        const { data = {} } = await instanceXhr.post(
            `v1/validateToken`,
            {},
            {
                headers: {
                    token_joro: token
                }
            }
        )
        dispatch(setPerfil(data))
    }
}

