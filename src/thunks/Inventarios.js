import { setMateriales } from "../Slices/InventarioSlice"
import { axiosPrivate, instanceXhr } from "../axios"

export const getTipoActivos = (filtro = {}) => {
    return async (dispatch) => {
        const { data = [] } = await instanceXhr.get(
            `v1/getlsActivo`,
            { params: filtro}
        )
        $('#id_activos').select2({
            data,
            width: '100%',
            tags: true,
            tokenSeparators: [",", " "],
            createTag: function (tag) {
                return {
                    id: tag.term,
                    text: tag.term,
                    isNew : true
                }
            }
        })

        $('#id_activos').on('select2:select', async (e) => {
            const { id, text, isNew = false } = e.params.data
            if (isNew) {
                const { data = {} } = await instanceXhr.post(
                    `v1/createlsActivo`,
                    {
                        text
                    }
                )
                var newOption = new Option(data.text, data.id, true, true)
                $('#id_activos').append(newOption).trigger('change')
                toastr.success(`Se creo el Activo ${text}`)
            }
        }) 
    }
}


export const getTipoMateriales = (filtro = {}) => {
    return async (dispatch) => {
        const { data = [] } = await instanceXhr.get(
            `v1/getlsMateriales`,
            { params: filtro}
        )
        $('#id_material').select2({
            data,
            width: '100%',
            tokenSeparators: [",", " "],
            tags: true,
            createTag: function (tag) {
                return {
                    id: tag.term,
                    text: tag.term,
                    isNew : true
                };
            }
        })
        
        $('#id_material').on('select2:select', async (e) => {
            const { id, text, isNew = false } = e.params.data
            if (isNew) {
                const { data = {} } = await instanceXhr.post(
                    `v1/createMateriales`,
                    {
                        text
                    }
                )
                var newOption = new Option(data.text, data.id, true, true)
                $('#id_material').append(newOption).trigger('change')
                toastr.success(`Se creo el Material ${text}`)
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
            width: '100%',
            tags: true,
            tokenSeparators: [",", " "],
            createTag: function (tag) {
                return {
                    id: tag.term,
                    text: tag.term,
                    isNew : true
                }
            }
        })

        $('#id_color').on('select2:select', async (e) => {
            const { id, text, isNew = false } = e.params.data
            if (isNew) {
                const { data = {} } = await instanceXhr.post(
                    `v1/createlsColores`,
                    {
                        text
                    }
                )
                var newOption = new Option(data.text, data.id, true, true)
                $('#id_color').append(newOption).trigger('change')
                toastr.success(`Se creo el Color ${text}`)
            }
        })
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
            width: '100%',
            tags: true,
            tokenSeparators: [",", " "],
            createTag: function (tag) {
                return {
                    id: tag.term,
                    text: tag.term,
                    isNew : true
                }
            }
        })

        $('#id_marca').on('select2:select', async (e) => {
            const { id, text, isNew = false } = e.params.data
            if (isNew) {
                const { data = {} } = await instanceXhr.post(
                    `v1/createlsMarcas`,
                    {
                        text
                    }
                )
                var newOption = new Option(data.text, data.id, true, true)
                $('#id_marca').append(newOption).trigger('change')
                toastr.success(`Se creo el Marca ${text}`)
            }
        }) 
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
            width: '100%',
            tags: true,
            tokenSeparators: [",", " "],
            createTag: function (tag) {
                return {
                    id: tag.term,
                    text: tag.term,
                    isNew : true
                }
            }
        })

        $('#id_modelo').on('select2:select', async (e) => {
            const { id, text, isNew = false } = e.params.data
            if (isNew) {
                const { data = {} } = await instanceXhr.post(
                    `v1/createlsModelos`,
                    {
                        text,
                        activo: text
                    }
                )
                var newOption = new Option(data.text, data.id, true, true)
                $('#id_modelo').append(newOption).trigger('change')
                toastr.success(`Se creo el Modelo ${text}`)
            }
        }) 
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
            width: '100%',
            tags: true,
            tokenSeparators: [",", " "],
            createTag: function (tag) {
                return {
                    id: tag.term,
                    text: tag.term,
                    isNew : true
                }
            }
        })

        $('#id_estado').on('select2:select', async (e) => {
            const { id, text, isNew = false } = e.params.data
            if (isNew) {
                const { data = {} } = await instanceXhr.post(
                    `v1/createlsEstado`,
                    {
                        text
                    }
                )
                var newOption = new Option(data.text, data.id, true, true)
                $('#id_estado').append(newOption).trigger('change')
                toastr.success(`Se creo el Estado ${text}`)
            }
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
            width: '100%',
            tags: true,
            tokenSeparators: [",", " "],
            createTag: function (tag) {
                return {
                    id: tag.term,
                    text: tag.term,
                    isNew : true
                }
            }
        })

        $('#id_disponibilidad').on('select2:select', async (e) => {
            const { id, text, isNew = false } = e.params.data
            if (isNew) {
                const { data = {} } = await instanceXhr.post(
                    `v1/createlsDisponibilidad`,
                    {
                        text
                    }
                )
                var newOption = new Option(data.text, data.id, true, true)
                $('#id_disponibilidad').append(newOption).trigger('change')
                toastr.success(`Se creo el Disponibilidad ${text}`)
            }
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
        const axiosp = new axiosPrivate()
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
            ...body,
            "id_auditor": id,
            "id_ubicacion": axiosp.getItem('ubicacion_inventario_id') || 0,
            "id_empleado": window['dtg_table_users'].selected[0].id || 0,
            "nombre_activo": "",
            "id_material": $("#id_material").select2('val') || 1,
            "id_color": $("#id_color").select2('val') || 1,
            "especificacion":"",
            "id_marca": $("#id_marca").select2('val') || 1,
            "id_modelo": $("#id_modelo").select2('val') || 1,
            "serie":"1",
            "cantidad":0,
            "id_estado": $("#id_estado").select2('val') || 1,
            "id_disponibilidad": $("#id_disponibilidad").select2('val') || 1,
            "turnos_dia":"1",
            "especificacion_tecnica":"1",
            "horas_uso":"1",
            "funcion_prestada":"1",
            "id_activos": $("#id_activos").select2('val') || 1,
            "anio_adquisicion":0,
            "periodo_mantenimiento":"0",
            "tipo_mantenimiento": 1,
            "material_procesado":"",
            "capacidad_productiva":"",
            "tipo_compra":1,
            "fotos": JSON.stringify(foto)
        }
        
        const { data } = await instanceXhr.post(
            `v1/createInventario`,
            form    
        )
        
        $('#form_activo_fijo').trigger('reset')
    }
}