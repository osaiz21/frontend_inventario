import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { getTipoIdentificacion, getUsersCecos } from "../../thunks/Users"
import { useDispatch } from "react-redux"
import { createEmpleadosEmpresa } from "../../thunks/EmpleadosEmpresa"

export const FormEmpleados = () => {
    const { register, formState:{errors}, handleSubmit } = useForm()
    const [ openCollapse, setOpenCollapse] = useState(false)
    // const { infoUbicacion } = useSelector(state => state.ubicacionInventario)
    const dispatch = useDispatch()
    const onSubmit = async (data) => { 
      try {
        const result = await dispatch(createEmpleadosEmpresa(data))
        console.log(result)
        toastr.success(`Se creo empleado correctamente (${data.nombres_1})`)
      } catch (error) {
        toastr.error(error.message || error.stack || error)
      }
    }
    

    useEffect(() =>{
      dispatch(getUsersCecos('table_users'))
    },[openCollapse])
    
    useEffect(() => {
      dispatch(getTipoIdentificacion())
    },[])

    return (
      <>
        <div className="card card-primary">
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label>Tipo Identificacion</label>
                  <select
                    id="tipo_identificacion_1"
                    name="tipo_identificacion_1"
                    {...register("tipo_identificacion_1", { required: "Tipo Identificacion" })} 
                  className={ errors.num_identificacion_1 ? "form-control is-invalid" : "form-control"}
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
              <div className="col-6 mt-3">
                <input
                  className="btn btn-primary btn-block btn-flat"
                  type="submit" 
                />
              </div>
            </div>  
          </form>
          <div className="card-header mt-2" onClick={()=> setOpenCollapse(!openCollapse)}>
            <h4 className="card-title w-100">
              <a className="d-block w-100" data-toggle="collapse" >
                Usuarios Secos
              </a>
            </h4>
          </div>
          <div id="collapseOne" 
            className={ openCollapse ? `collapse show`: `collapse` } 
            data-parent="#accordion"
          >
          <div className="card-body">
            <table id="table_users" className="table table-bordered table-striped" style={{with:'100%'}}>
            <thead>
              <tr>
                <th>Identificacion</th>
                <th>Name</th>
                <th>Apellido</th>
                <th>Cargo</th>
                <th>Cecos</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Identificacion</th>
                <th>Name</th>
                <th>Apellido</th>
                <th>Cargo</th>
                <th>Cecos</th>
              </tr>
            </tfoot>
            </table>
          </div>
          </div>
        </div>
      </>
      
    )
}