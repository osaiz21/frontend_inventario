import { useForm } from "react-hook-form"

export const FormEmpleados = () => {
    const { register, formState:{errors}, handleSubmit } = useForm()
    const onSubmit = (data) => { 
        console.log(data)
    }
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