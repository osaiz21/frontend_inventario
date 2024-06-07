import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { getTipoIdentificacion } from "../../thunks/Users"
import { useDispatch } from "react-redux"

export const FormEmpleados = () => {
    const { register, formState:{errors}, handleSubmit } = useForm()
    // const { infoUbicacion } = useSelector(state => state.ubicacionInventario)
    const dispatch = useDispatch()
    const onSubmit = (data) => { 
        console.log(88,data)
    }
    useEffect(() => {
      dispatch(getTipoIdentificacion())
    },[])

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label>Tipo Identificacion</label>
              <select
                id="tipo_identificacion_1"
                name="tipo_identificacion_1"
                className="form-control select2"
                data-placeholder="tipo_identificacion_1"
              ></select>
            </div>
          </div>
          <div className="col-6">
            <label>Numero Identificacion</label>
            <input
              {...register("num_identificacion_1", { required: "Numero Identificacion" })} 
              className={ errors.num_identificacion_1 ? "form-control is-invalid" : "form-control"}
            />
          </div>
          <div className="col-6">
            <label>Nombres</label>
            <input
              {...register("nombres_1", { required: true })} 
              className={ errors.nombres_1 ? "form-control is-invalid" : "form-control"}
            />
          </div>
          <div className="col-6">
            <label>Apellido</label>
            <input
              {...register("apellidos_1", { required: "apellido Address is required" })} 
              className={ errors.apellidos_1 ? "form-control is-invalid" : "form-control"}
            />
          </div>
          <div className="col-6">
            <label>Cargos</label>
              <input
                {...register("cargo_1", { required: true })} 
                className={ errors.cargo_1 ? "form-control is-invalid" : "form-control"}
              />
          </div>
          <div className="col-6">
            <label>Cecos</label>
            <input
              className={ errors.cecos_1 ? "form-control is-invalid" : "form-control"}
              {...register("cecos_1", { required: "Cecos is required" })} 
              aria-invalid={errors.cecos_1 ? "true" : "false"}
            />
          </div>
          <div className="col" >
            <input
              className="btn btn-primary btn-block btn-flat"
              type="submit" 
            />
          </div>
        </div>  
      </form>
    )
}