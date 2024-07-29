import { useEffect, useState  } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { createInventario, getColores, getDisponibilidad, getEstados, getMarcas, getModelos, getTipoActivos, getTipoMateriales } from '../../thunks/Inventarios'
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
    material: yup.number()
  }).required();

  const buscarPlano = (e) => {
  }
  
  const onSubmit = (e) => {
    try {
      dispatch(createInventario() )
    } catch (error) {

    }
  }

  const sendForm = async () => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="row">
      <div className="col-6">
        <label>Placa Nueva</label>
          <input
            className={`form-control ${errors.placa_nueva && 'is-invalid'}`}
            {...register("placa_nueva")}
          />
      </div>
      <div className="col-6">
          <label>Placa Antigua</label>
          <input
            className={`form-control ${errors.placa_nueva && 'is-invalid'}`}
            {...register("placa_antigua")}
          />
      </div> 
    </div>
    <div className="row">
      <div className="col-6">
        <label>Nombre Activo</label>
        <input
          className={`form-control ${errors.placa_nueva && 'is-invalid'}`}
          {...register("nombre_activo")}
        />
      </div>
      <div className="col-6">
        <label>Lista Activos</label>
        <select
          id="id_activos"
          name="id_activos"
        ></select>
      </div>
    </div>
    <div className="row">
      <div className="col-6">
        <label>Lista Materiales</label>
        <select
          {...register('material')}
          className={`form-control ${errors.material && 'is-invalid'}`}
          id="material"
          name="material"
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
        <label>Especificaci&oacute;n</label>
        <input
          {...register("especificacion")}
          className ={`form-control ${errors.especificacion && 'is-invalid'}`} 
        />
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
      <div className="col-6">
        <label>Modelos</label>
        <select
          id="id_modelo"
          name="id_modelo"
        ></select>
      </div>
      <div className="col-6">
        <label>Serie</label>
        <input
          className ={`form-control ${errors.serie && 'is-invalid'}`} 
          {...register("serie")} 
        />
        {errors.especificacion && <p role="alert">{errors.especificacion?.message}</p>}
      </div>
    </div>    
    <div className="row">
      <div className="col-6">
        <label>Cantidad</label>
        <input
          className ={`form-control ${errors.especificacion && 'is-invalid'}`} 
          {...register("cantidad")}
        />
      </div>
      <div className="col-6">
        <label>Placa Padre</label>
        <input
          className ={`form-control ${errors.placapadre && 'is-invalid'}`} 
          {...register("placapadre")} 
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
          className="form-control"
          type="file"
          multiple
          onChange={onPreviewFile}
          name="fotos"
          id="fotos"
          aria-invalid={errors.especificacion ? "true" : "false"} 
        />
      </div>
      </div>
      <div className="row">
        <div className="col-12">
          <label>Comentario</label>
          <input
            className ={`form-control ${errors.especificacion && 'is-invalid'}`} 
            {...register("comentario")}
          />
        </div>
      </div>
      <div className="row">
      </div> 
      <div className="row">
          <div className="col-3">
            <br></br>
            <input
              className="btn btn-primary btn-block btn-flat"
              type="submit" 
            />
          </div>
          <div className="col-3">
            <br></br>
            <button
              className="btn btn-primary btn-block btn-flat"
            >Crear Area</button>
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
      </form>
    </>
  )
}

export default FormularioInventario
