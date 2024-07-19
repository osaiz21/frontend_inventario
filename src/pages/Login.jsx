import { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schemaLogin = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
}).required();

const Login = () => {
  const [count, setCount] = useState(0)
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schemaLogin)
  })
  const onSubmit = data => console.log(data);
  return (
    <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <a><b>3GS</b> Inventario</a>
          </div>
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group has-feedback">
                  <input
                    {...register("username")}
                    type="text" 
                    name="username" 
                    className="form-control" 
                    placeholder="username" 
                  />
                  <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                </div>
                <div className="form-group has-feedback">
                  <input
                    {...register("password")}
                    type="password" 
                    name="password" 
                    className="form-control"
                    placeholder="Password" 
                  />
                  <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div className="row">
                  <div className="col-12">
                    {/* <input type="submit" className="btn btn-primary btn-block btn-flat">Sign In</input> */}
                  </div>
                </div>
              </form>
            </div>
          </div>


      </div>
    </div>
  )
}

export default Login
