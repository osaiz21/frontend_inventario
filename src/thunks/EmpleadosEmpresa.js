import { instanceXhr } from "../axios"


export const createEmpleadosEmpresa = (data = {}) => {
    return async (dispatch) => {
        return instanceXhr.post('v1/createEmpleadoEmpresa',data)
    }
}
