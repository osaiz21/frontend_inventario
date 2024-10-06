import { useEffect, useState  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { 
  createInventario, 
  getColores, 
  getDisponibilidad, 
  getEstados, 
  getInventRegister,
  getMarcas,
  getModelos,
  getTipoActivos,
  getTipoMateriales, 
  updInventario } from '../../thunks/Inventarios'
import { ViewFiles } from '../Files/ViewFiles'
import { setFiles } from '../../Slices/FilesSlice'


const FormularioInventario = () => {
  const dispatch = useDispatch()
  const { register, formState:{errors}, handleSubmit } = useForm()
  const { id:idupdActivo = 0 } = useSelector(state => state.inventario.updActivofijo)
  

  const schema = yup.object({
    placa_nueva: yup.string().required(),
    placa_antigua: yup.string(),
    especificacion: yup.string(),
    serie: yup.string()
  }).required();

  const onSubmit = async (e) => {
    try {
      let dataForm = $('#form_activo_fijo').serializeArray()
      let formSend = {}
      for ( let valForm in dataForm ) {
        const {name = '', value = 1 } = dataForm[valForm]
        formSend[name] = value
      }
      await dispatch(createInventario(formSend))
      toastr.success(`Se Registro Correctamente `)
      
    } catch (error) {
      toastr.error(error.message || error.mns || error.stack  || error)
    }
  }

  const fnUpdateInventario = async (e) => {
    try {
      let dataForm = $('#form_activo_fijo').serializeArray()
      let formSend = {}
      for ( let valForm in dataForm ) {
        const {name = '', value = 1 } = dataForm[valForm]
        formSend[name] = value
      }
      dispatch(updInventario(formSend))
      toastr.success(`Se Actualizo correctamente `)
    } catch (error) {
      console.error('Actualizar')
    }
  }

  const onPreviewFile = (e) => {
    let files = []
    for (const key in e.target.files) {
      if (!isNaN(key)) {
        let imageBase64View = window.URL.createObjectURL(e.target.files[key])
        const { name , type } = e.target.files[key]
        files = [ ...files, 
        {
          imageBase64View,
          name,
          type
        }
      ]
      }
    }
    dispatch(setFiles(files))
  }
  
  const searchInventRegister = async ( params = {}) => {
    try {
      await dispatch(getInventRegister(params))
    } catch (error) {
      toastr.warning(error)
    }
  }

  const endRegistry = async () => {
    try {
      const { id = 0 } = JSON.parse(localStorage.getItem('endRegistry')) || {}
      await dispatch(getInventRegister({
        id
      }))
    } catch(error) {
      //toastr.warning('No se encontro ultimo registro')
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
    
  },[idupdActivo])

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
          {...register('id_activos')}
          className={`form-control ${errors.material && 'is-invalid'}`}
          id="id_activos"
          name="id_activos"
        ></select>
      </div>
      <div className="col-6">
        <label>Especificaci&oacute;n</label>
        <textarea
          {...register("especificacion")}
          className ={`form-control ${errors.especificacion && 'is-invalid'}`}
          id="especificacion"
        />
      </div>
    </div>
    <div className="row">
      <div className="col-6">
        <label>Lista Materiales</label>
        <select
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
          {...register('id_modelo')}
          className={`form-control ${errors.material && 'is-invalid'}`}
          id="id_modelo"
          name="id_modelo"
        ></select>
      </div>
      <div className="col-6">
        <label>Marcas</label>
        <select
          {...register('id_marca')}
          className={`form-control ${errors.material && 'is-invalid'}`}
          id="id_marca"
          name="id_marca"
        ></select>
      </div>
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
          {...register('id_estado')}
          className={`form-control ${errors.material && 'is-invalid'}`}
          id="id_estado"
          name="id_estado"
        ></select>
      </div>
      <div className="col-6">
        <label>Disponibilidad</label>
        <select
           {...register('id_disponibilidad')}
           className={`form-control ${errors.material && 'is-invalid'}`}
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
        <div className="col-xs-12 mt-1 col-sm-4 ">
          <input
            className="btn btn-success btn-block btn-flat"
            type="submit"
            value='Guardar'
          />
        </div>
      </div> 
      </form>
      <div className="row">
        
          {
            idupdActivo > 0 && (
              <div className="col-xs-12 mt-1 col-sm-4">
                <input
                  className="btn btn-secondary btn-block btn-flat"
                  type="button"
                  value='Actualizar'
                  onClick={() => {
                    fnUpdateInventario()
                  }}
                />
              </div>
            )
          }
        <div className="col-xs-12 mt-1 col-sm-4 ">
          <input
            className="btn btn-info btn-block btn-flat"
            type="button"
            onClick={() => {
              endRegistry()
            }}
            value='Valor Anterior'
          />
        </div>
      </div>
        <div className="row">
          
          {/* <div className="col-3">
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
          </div> */}
        </div>
      <ViewFiles/>
      
    </>
  )
}

export default FormularioInventario
