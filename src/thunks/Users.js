import { setIdentificacion } from "../Slices/UserSlice"
import { instanceXhr } from "../axios"

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

