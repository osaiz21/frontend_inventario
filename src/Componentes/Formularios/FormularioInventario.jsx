import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { crearUbicacionPlano, getUbicacionPlano } from '../../thunks/Ubicaciones'
import { getAllCiudades, getAllPaises, getAllPisos } from '../../thunks/Paises'
import { useForm } from 'react-hook-form'
import { FormEmpleados } from './FormEmpleados'


const FormularioInventario = () => {
  const dispatch = useDispatch()
  const { register, formState:{errors}, handleSubmit } = useForm()
  const [formUbicacion, setformUbicacion] = useState({
    "codigo_plano": "" ,
    "pais":"",          
    "ciudad":"",        
    "sede": "",
    "departamento":"",
    "ubicacion_fisica":"",
    "piso":""  
  })
  const { infoUbicacion } = useSelector(state => state.ubicacionInventario)
  const buscarPlano = (e) => {
    dispatch(getUbicacionPlano({ 
      codigo_plano : formUbicacion.codigo_plano
    }))
  }
  const onSubmit = (e) => {
    
  }
  const sendForm = async () => {
    try {

      await dispatch(crearUbicacionPlano({
        ...formUbicacion
      }))
      toastr.success(`Se creo Plano Correctamente (${formUbicacion.codigo_plano})`)
    } catch (error) {
      const { mns = 'Error no Identificado'} = error.response.data 
      toastr.error(mns )
    }
  }
  
  useEffect(() => {
  },[formUbicacion])

  useEffect(() => {
    // Eventos
    $('#pais').on('select2:select', (e) => {
      const { id } = e.params.data;
      setformUbicacion(state => ({
        ...state,
        pais: id
      }))
    })
    $('#ciudad').on('select2:select',  (e) => {
      const { id } = e.params.data;
      setformUbicacion(state => ({
        ...state,
        ciudad: id
      }))
    })
    $('#pisos').on('select2:select',  (e) => {
      const { id } = e.params.data;
      setformUbicacion(state => ({
        ...state,
        piso: id
      }))
    })
  })


  useEffect(() => {
    // get Paises.
    dispatch(getAllPaises())
    dispatch(getAllCiudades())
    dispatch(getAllPisos())
    // dispatch(getAllCiudades())
  },[])

  return (
    <div className="row">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="col-xs-6">
        <label>Tipo Identificacion</label>
          <input
            className="form-control"
            {...register("nombres_1", { required: true })} 
            aria-invalid={errors.firstName ? "true" : "false"} 
          />
          {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}
        </div>
        <div className="col-xs-6">
          <label>Numero Identificacion</label>
          <input
            className="form-control"
            {...register("mail", { required: "Email Address is required" })} 
            aria-invalid={errors.mail ? "true" : "false"} 
          />
          {errors.mail && <p role="alert">{errors.mail?.message}</p>}
        </div>
        <div className="col-xs-6">
        <label>Nombres</label>
          <input
            className="form-control"
            {...register("nombres_1", { required: true })} 
            aria-invalid={errors.firstName ? "true" : "false"} 
          />
          {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}
        </div>
        <div className="col-xs-6">
          <label>Apellido</label>
          <input
            className="form-control"
            {...register("apellido", { required: "apellido Address is required" })} 
            aria-invalid={errors.mail ? "true" : "false"} 
          />
          {errors.mail && <p role="alert">{errors.mail?.message}</p>}
        </div>
        <div className="col-xs-6">
        <label>Cargos</label>
          <input
            className="form-control"
            {...register("nombres_1", { required: true })} 
            aria-invalid={errors.firstName ? "true" : "false"} 
          />
          {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}
        </div>
        <div className="col-xs-6">
          <label>Cecos</label>
          <input
            className="form-control"
            {...register("apellido", { required: "apellido Address is required" })} 
            aria-invalid={errors.mail ? "true" : "false"} 
          />
          {errors.mail && <p role="alert">{errors.mail?.message}</p>}
        </div>
        <div className="col-xs-12">
          <br></br>
          <input
            className="btn btn-primary btn-block btn-flat"
            type="submit" 
          />
        </div>
        </form>
    </div>
  )
}

export default FormularioInventario
