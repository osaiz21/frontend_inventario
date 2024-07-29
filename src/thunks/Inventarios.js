import { setMateriales } from "../Slices/InventarioSlice"
import { instanceXhr } from "../axios"

export const getTipoActivos = (filtro = {}) => {
    return async (dispatch) => {
        const { data = [] } = await instanceXhr.get(
            `v1/getlsActivo`,
            { params: filtro}
        )
        $('#id_activos').select2({
            data,
            width: '100%'
        })
    }
}


export const getTipoMateriales = (filtro = {}) => {
    return async (dispatch) => {
        const { data = [] } = await instanceXhr.get(
            `v1/getlsMateriales`,
            { params: filtro}
        )
        $('#material').select2({
            data,
            width: '100%'
        })
        dispatch(setMateriales(data))
    }
}

export const getColores = (filtro = {}) => {
    return async (dispatch) => {
        const { data = [] } = await instanceXhr.get(
            `v1/getlsColores`,
            { params: filtro}
        )
        $('#id_color').select2({
            data,
            width: '100%'
        })
        //dispatch(setMateriales(data))
    }
}

export const getMarcas = (filtro = {}) => {
    return async (dispatch) => {
        const { data = [] } = await instanceXhr.get(
            `v1/getlsMarcas`,
            { params: filtro}
        )
        $('#id_marca').select2({
            data,
            width: '100%'
        })
        //dispatch(setMateriales(data))
    }
}

export const getModelos = (filtro = {}) => {
    return async (dispatch) => {
        const { data = [] } = await instanceXhr.get(
            `v1/getlsModelos`,
            { params: filtro}
        )
        $('#id_modelo').select2({
            data,
            width: '100%'
        })
        //dispatch(setMateriales(data))
    }
}

export const getEstados = (filtro = {}) => {
    return async (dispatch) => {
        const { data = [] } = await instanceXhr.get(
            `v1/getlsEstado`,
            { params: filtro}
        )
        $('#id_estado').select2({
            data,
            width: '100%'
        })
        //dispatch(setMateriales(data))
    }
}

export const getDisponibilidad = (filtro = {}) => {
    return async (dispatch) => {
        const { data = [] } = await instanceXhr.get(
            `v1/getlsDisponibilidad`,
            { params: filtro}
        )
        $('#id_disponibilidad').select2({
            data,
            width: '100%'
        })
        //dispatch(setMateriales(data))
    }
}

// Create Inventario

export const createInventario = (body = {}) => {
    return async (dispatch, getState) => {
        //Cargamos Imagenes
        const fotos = document.getElementById("fotos")
        const formData = new FormData()
        for (let i =0; i < fotos.files.length; i++) {
            formData.append("files", fotos.files[i])
        }
        
        // fetch("http://localhost:5000/upload_files", {
        //     method: 'POST',
        //     body: formData,
        //     headers: {
        //       "Content-Type": "multipart/form-data"
        //     }
        // })
        

    }
}