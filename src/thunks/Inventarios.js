import { setActivoFijo, setMateriales } from "../Slices/InventarioSlice"
import { axiosPrivate, DataTableGeneral, instanceXhr } from "../axios"

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
        //limpiamos
        // dispatch(setActivoFijo({}))
        // valida si existe placa
        const { placa_nueva = 0 } = body
        if ( (!!placa_nueva) ) {
            const { data:dataPlacaNueva = {} } = await instanceXhr.get(
                `v1/getInventario`,
                { params: {
                    placa_nueva
                }}
            )

            if (Object.keys(dataPlacaNueva).length > 0) {
                throw new Error(`Placa ya existen ${placa_nueva}`)
            }
        }
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

        const { id = 9000 } = getState().users.info
        const { id:id_ubicacion = 1 } = axiosp.getItem('codigoPlanoSelected')
        const form = {
            ...body,
            "id_auditor": id,
            "id_empleado": window['dtg_table_users'].selected[0]?.id || 1,
            "nombre_activo": "",
            "id_material": $("#id_material").select2('val') || 1,
            "id_color": $("#id_color").select2('val') || 1,
            "id_marca": $("#id_marca").select2('val') || 1,
            "id_modelo": $("#id_modelo").select2('val') || 1,
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
            "fotos": JSON.stringify(foto),
            id_ubicacion
        }
        
        const { data } = await instanceXhr.post(
            `v1/createInventario`,
            form    
        )
        
        $('#form_activo_fijo').trigger('reset')
    }
}



export const getListaInvUsers = ({nameDiv = '', createdAt = ''}) => {
    return async ( dispatch, getState) => {
       
        const axiosp = new axiosPrivate()
        // 1 -> Administrador
        const { rol  } = axiosp.getItem('info_auditor') || {}
        const { data = [] } = await instanceXhr.get(
            `v1/getListInventarioUsers`,
            {
                params: {
                    id_auditor: rol === '1' ? undefined : axiosp.getItem('id_user_login'),
                    createdAt
                }
            }
        )
        

        const table = new DataTableGeneral(
            nameDiv,
            data,
            [
                {
                    className: 'dt-control',
                    orderable: false,
                    data: null,
                    defaultContent: ''
                },
                { data: 'codigo_plano', title: 'codigo_plano'  },
                { data: 'activo', title: 'activo' },
                { data: 'placa_nueva', title: 'placa_nueva'  },   
                { data: 'departamento', title: 'departamento' },
                { data: 'piso', title: 'piso' },
                { data: 'marcas', title: 'marcas' },
                { data: 'modelo', title: 'modelo' },
                { data: 'fotos', title: 'fotos' , visible: false },
                { data: 'serie', title: 'serie' },
                { data: 'ubicacion_fisica', title: 'ubicacion_fisica' },
                { data: 'cantidad', title: 'cantidad'  },
                { data: 'createdAt', title: 'createdAt' },
                { data: "action", render:   (data, type, row) => {
                    //return '<button type="button" class="btn btn-primary btn-block">Actualizar</button> <input id="btnViewConcepts" class="btn-link lnk" onclick="View(\'' + row.TestId + '\',\'' + row.TestKey + '\');" style="width:100px"  value="View Concept"/> | <a href="QuestionPaper.aspx?TestId=' + row.TestId + '&Mode=Offline" target="_blank" class="btn-link">View Question Paper</a>'
                    return `<button type="button" class="btn btn-danger btn-block" onclick="( (e) => {
                            deleteRowInv(e)
                        })(${row.id})">Eliminar</button>
                        `
                  }
                }

            ],
            
        )
        table.createDataTable(nameDiv)
        $(`#${nameDiv}`).DataTable().columns.adjust().draw()
       
    }
}

export const getInventRegister = (filtro = {}) => {
    return async (dispatch) => {
        const { data = {} } = await instanceXhr.get(
            `v1/getInventario`,
            { params: filtro}
        )
        dispatch(setActivoFijo(data))    
        if(Object.keys(data).length == 0) {
            throw new Error('No se encontro valor')
        }

        for (const key in Object.keys(data)) {
            // console.log(key,data)
            var e = document.getElementById(`${Object.keys(data)[key]}`)
            if (e instanceof HTMLInputElement) {
                $(`#${Object.keys(data)[key]}`).val( data[Object.keys(data)[key]] )
            } else if (e instanceof HTMLSelectElement) {
                $(`#${Object.keys(data)[key]}`).select2('val',`${data[Object.keys(data)[key]]}`) 
            } else if (e instanceof HTMLTextAreaElement) {
                // console.log(3)
            } else if (Object.keys(data)[key] === 'fotos') {
                // console.log()
            }
            
            //$(`#${Object.keys(data)[key]}`).val(data[Object.keys(data)[key]])
        }
    }
}