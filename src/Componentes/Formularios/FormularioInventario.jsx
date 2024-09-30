import { useEffect, useState  } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { createInventario, getColores, getDisponibilidad, getEstados, getInventRegister, getMarcas, getModelos, getTipoActivos, getTipoMateriales } from '../../thunks/Inventarios'
import { ViewFiles } from '../Files/ViewFiles'
import { setFiles } from '../../Slices/FilesSlice'


const FormularioInventario = () => {
  const dispatch = useDispatch()
  const { register, formState:{errors}, handleSubmit } = useForm()
  const [arrayFiles,setArrayFiles] = useState([])

  const schema = yup.object({
    placa_nueva: yup.string().required(),
    placa_antigua: yup.string(),
    nombre_activo: yup.string().required(),
    especificacion: yup.string(),
    serie: yup.string(),
    id_material: yup.number()
  }).required();

  const onSubmit = async (e) => {
    try {
      let dataForm = $('#form_activo_fijo').serializeArray()
      let formSend = {}
      for ( let valForm in dataForm ) {
        const {name = '0', value = 0 } = dataForm[valForm]
        formSend[name] = value
      }

      await dispatch(createInventario(formSend))
      toastr.success(`Se Registro Correctamente `)
      dispatch(setFiles([]))
    } catch (error) {
      toastr.error(error.message || error.mns || error.stack  || error)
    }
  }

  const fnUpdateInventario = async (e) => {
    try {
      console.log('Actualizar')
    } catch (error) {
      console.error('Actualizar')
    }
  }

  const onPreviewFile = (e) => {
    
    for (const key in e.target.files) {
      if (!isNaN(key)) {
        let imageBase64View = window.URL.createObjectURL(e.target.files[key])
        const { name , type } = e.target.files[key]
        setArrayFiles(ant => [...ant, {
          imageBase64View,
          name,
          type
        }])
      }
    }
  }
  
  const searchInventRegister = async ( params = {}) => {
    try {
      await dispatch(getInventRegister(params))
      
    } catch (error) {
      toastr.warning(error)
    }
  }
  useEffect(() => {
    dispatch(getTipoActivos())
    dispatch(getTipoMateriales())
    dispatch(getColores())
    dispatch(getMarcas())
    dispatch(getModelos())
    dispatch(getEstados())
    dispatch(getDisponibilidad())
  },[])

  useEffect(() => {
    if (!!arrayFiles.length) {
      dispatch(setFiles(arrayFiles))
    }
  },[arrayFiles])

  useEffect(() => {
   
  },[])


  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} id='form_activo_fijo'>
    <div className="row">
      <div className="col-6 ">
        <label>Placa Nueva</label>
        <div className='input-group'>
          <input
            className={`form-control ${errors.placa_nueva && 'is-invalid'}`}
            {...register("placa_nueva")}
            id='placa_nueva'
            placeholder='Placa Nueva'
          />
          <div className="input-group-append">
            <button 
              className="btn btn-outline-secondary btn-sm" 
              type="button"
              onClick={() =>  { searchInventRegister({
                placa_nueva: $('#placa_nueva').val()
              })}}
            >Buscar</button>
          </div>
        </div>

      </div>
      <div className="col-6">
          <label>Placa Antigua</label>
          <div className='input-group'>
            <input
              className={`form-control ${errors.placa_antigua && 'is-invalid'}`}
              {...register("placa_antigua")}
              id='placa_antigua'
            />
            <div className="input-group-append">
              <button 
                className="btn btn-outline-secondary btn-sm" 
                type="button"
                onClick={() =>  { searchInventRegister({
                  placa_antigua: $('#placa_antigua').val()
                })}}
              >Buscar</button>
            </div>
          </div>
      </div> 
    </div>
    <div className="row">
      {/* <div className="col-6">
        <label>Nombre Activo</label>
        <input
          className={`form-control ${errors.nombre_activo && 'is-invalid'}`}
          {...register("nombre_activo")}
        />
      </div> */}
      <div className="col-6">
      <label>Lista Activos</label>
        <select
          id="id_activos"
          name="id_activos"
        ></select>
      </div>
      <div className="col-6">
        <label>Especificaci&oacute;n</label>
        <input
          {...register("especificacion")}
          className ={`form-control ${errors.especificacion && 'is-invalid'}`} 
        />
      </div>
    </div>
    <div className="row">
      <div className="col-6">
        <label>Lista Materiales</label>
        <select
          {...register('material')}
          className={`form-control ${errors.material && 'is-invalid'}`}
          id="id_material"
          name="id_material"
        ></select>
      </div>
      <div className="col-6">
        <label>Colores</label>
        <select
          id="id_color"
          name="id_color"
        ></select>
      </div>
    </div>
    <div className="row">
      <div className="col-6">
        <label>Modelos</label>
        <select
          id="id_modelo"
          name="id_modelo"
        ></select>
      </div>
      <div className="col-6">
        <label>Marcas</label>
        <select
          id="id_marca"
          name="id_marca"
        ></select>
      </div>
    </div>
    <div className="row">
      
      
    </div>    
    <div className="row">
      <div className="col-6">
        <label>Cantidad</label>
        <input
          className ={`form-control ${errors.especificacion && 'is-invalid'}`} 
          {...register("cantidad")}
          id='cantidad'
          type='number'
        />
      </div>
      <div className="col-6">
        <label>Placa Padre</label>
        <input
          className ={`form-control ${errors.placapadre && 'is-invalid'}`} 
          {...register("placapadre")} 
          id='placapadre'
        />
      </div>
    </div>
    <div className="row">
      <div className="col-6">
        <label>Estado</label>
        <select
          id="id_estado"
          name="id_estado"
        ></select>
      </div>
      <div className="col-6">
        <label>Disponibilidad</label>
        <select
          id="id_disponibilidad"
          name="id_disponibilidad"
        ></select>
      </div>
    </div>
    <div className="row"> 
      <div className="col-6">
        <label>Images</label>
        <input
          className="form-control "
          type="file"
          multiple
          onChange={onPreviewFile}
          name="fotos"
          id="fotos"
          aria-invalid={errors.especificacion ? "true" : "false"} 
        />
      </div>
      <div className="col-6">
        <label>Serie</label>
        <input
          className={`form-control ${errors.serie && 'is-invalid'}`}
          {...register("serie")}
          id='serie'
        />
      </div>
    </div>
      <div className="row">
        <div className="col-12">
          <label>Comentario</label>
          <input
            className ={`form-control ${errors.especificacion && 'is-invalid'}`} 
            {...register("comentario")}
            id='comentario'
          />
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <br></br>
          <input
            className="btn btn-success btn-block btn-flat"
            type="submit"
            value='Guardar'
          />
        </div>
      
      {/* <div className="col-3">
        <br></br>
        <input
          className="btn btn-warning btn-block btn-flat"
          type="button"
          value='Actualizar'
          onClick={() => {
            fnUpdateInventario()
          }}
        />
      </div> */}
      </div> 
      </form>
        <div className="row">
          <div className="col-3">
            <br></br>
            <button
              className="btn btn-primary btn-block btn-flat"
            >Valor Anterior</button>
          </div>
          <div className="col-3">
            <br></br>
            <button
              className="btn btn-primary btn-block btn-flat"
            >Cambiar Sede</button>
          </div>
          <div className="col-3">
            <br></br>
            <button
              className="btn btn-primary btn-block btn-flat"
            >Nic 16</button>
          </div>
          <div className="col-3">
            <br></br>
            <button
              className="btn btn-primary btn-block btn-flat"
            >Imprimir</button>
          </div>
      </div>
      <ViewFiles/>
      
    </>
  )
}

export default FormularioInventario
