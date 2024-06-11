import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { getColores, getDisponibilidad, getEstados, getMarcas, getModelos, getTipoActivos, getTipoMateriales } from '../../thunks/Inventarios'
import { ViewFiles } from '../Files/ViewFiles'


const FormularioInventario = () => {
  const dispatch = useDispatch()
  const { register, formState:{errors}, handleSubmit } = useForm()
  const [images, setImage] =  useState([])
  // const [formUbicacion, setformUbicacion] = useState({})
  // const { infoUbicacion } = useSelector(state => state.ubicacionInventario)
  const buscarPlano = (e) => {
    
  }
  const onSubmit = (e) => {
    
  }
  const sendForm = async () => {
    
  }
  const onPreviewFile = (e) => {
    
    let arrayFiles = []
    for (const key in e.target.files) {
      if (!isNaN(key)) {
        let imageBase64View = window.URL.createObjectURL(e.target.files[key])
        let imageFiles = e.target.files[key]
        let ObjectImages = {
          imageBase64View,
          imageFiles
        }
        arrayFiles = [...arrayFiles, ObjectImages]
      }
    }
    setImage((state) => [
        ...state,
        ...arrayFiles
      ]
    )
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
    console.log(images)
  },[images])

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="row">
        <div className="col-6">
        <label>Placa Nueva</label>
          <input
            className="form-control"
            {...register("nombres_1", { required: true })} 
            aria-invalid={errors.firstName ? "true" : "false"} 
          />
          {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}
        </div>
        <div className="col-6">
          <label>Placa Antigua</label>
          <input
            className="form-control"
            {...register("mail", { required: "Email Address is required" })} 
            aria-invalid={errors.mail ? "true" : "false"} 
          />
          {errors.mail && <p role="alert">{errors.mail?.message}</p>}
        </div>
    </div>
    <div className="row">
        <div className="col-6">
          <label>Lista Activos</label>
          <select
            id="id_activos"
            name="id_activos"
          ></select>
        </div>
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
        <div className="col-6">
          <label>Especificaci&oacute;n</label>
          <input
            className="form-control"
            {...register("especificacion", { required: "especificacion is required" })} 
            aria-invalid={errors.especificacion ? "true" : "false"} 
          />
          {errors.especificacion && <p role="alert">{errors.especificacion?.message}</p>}
        </div>

        <div className="col-6">
          <label>Marcas</label>
          <select
            id="id_marca"
            name="id_marca"
          ></select>
        </div>
        <div className="col-6">
          <label>Modelos</label>
          <select
            id="id_modelo"
            name="id_modelo"
          ></select>
        </div>
    </div>    
    <div className="row">    
        <div className="col-6">
          <label>Serie</label>
          <input
            className="form-control"
            {...register("especificacion", { required: "especificacion is required" })} 
            aria-invalid={errors.especificacion ? "true" : "false"} 
          />
          {errors.especificacion && <p role="alert">{errors.especificacion?.message}</p>}
        </div>
        <div className="col-6">
          <label>Cantidad</label>
          <input
            className="form-control"
            {...register("especificacion", { required: "especificacion is required" })} 
            aria-invalid={errors.especificacion ? "true" : "false"} 
          />
          {errors.especificacion && <p role="alert">{errors.especificacion?.message}</p>}
        </div>
    </div>
    <div className="row">
      <div className="col-6">
        <label>Placa Padre</label>
        <input
          className="form-control"
          {...register("especificacion", { required: "especificacion is required" })} 
          aria-invalid={errors.especificacion ? "true" : "false"} 
        />
        {errors.especificacion && <p role="alert">{errors.especificacion?.message}</p>}
      </div>
      <div className="col-6">
        <label>Estado</label>
        <select
          id="id_estado"
          name="id_estado"
        ></select>
      </div>
    </div>
    <div className="row"> 
      <div className="col-6">
        <label>Disponibilidad</label>
        <select
          id="id_disponibilidad"
          name="id_disponibilidad"
        ></select>
      </div>
      <div className="col-6">
          <label>Images</label>
          <input
            className="form-control"
            type="file"
            multiple
            onChange={onPreviewFile}
            name="archivo"
            aria-invalid={errors.especificacion ? "true" : "false"} 
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <label>Comentario</label>
          <input
            className="form-control"
            {...register("comentario", { required: "comentario is required" })} 
            aria-invalid={errors.especificacion ? "true" : "false"} 
          />
        </div>
      </div>
      <div className="row">
        <br></br>
      </div>
     <ViewFiles images={images} />
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
      </form>
    </>
  )
}

export default FormularioInventario
