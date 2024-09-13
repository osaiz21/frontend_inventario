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
            tags: true,
            width: '100%'
        })
        $('#material').on('select2:select', async (e) => {
            const { id, text }  = e.params.data
            if ($('#material').find("option[value='" + id + "']").length) {
                const { data = {} } = await instanceXhr.post(
                    `v1/createMateriales`,
                    {
                        text
                    }
                )
                
                console.log(data)
            } else {

            }
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
            formData.append("fotos", fotos.files[i])
        }
        
        const { data:foto } = await instanceXhr.post(
            `v1/uploadFiles`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }    
        )
        const { id = 0 } = getState().users.info    
        
        const form = {
            "id_auditor": id,
            "id_ubicacion":1,
            "id_empleado":1,
            "placa_nueva":"MMW387",
            "placa_antigua":"MMW386",
            "id_material":"1",
            "id_color":1,
            "especificacion":"Wagon R",
            "id_marca":1,
            "id_modelo":1,
            "serie":"HHHOOII",
            "cantidad":5,
            "placapadre":"GGWWOSAIZ",
            "id_estado":1,
            "id_disponibilidad":3,
            "comentario":"Ninguno",
            "fotos": JSON.stringify(foto),
            "turnos_dia":"5",
            "especificacion_tecnica":"Manejo Normal",
            "horas_uso":"30",
            "funcion_prestada":"Normal",
            "id_activos":1,
            "anio_adquisicion":2019,
            "periodo_mantenimiento":"2024",
            "tipo_mantenimiento": 3,
            "material_procesado":"Acero",
            "capacidad_productiva":"Acero",
            "tipo_compra":2,
            "activo": 1
        }

        const { data } = await instanceXhr.post(
            `v1/createInventario`,
            form    
        )
    }
}