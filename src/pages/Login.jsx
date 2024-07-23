import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { generatePath, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { validateLogin } from '../thunks/Users';

const schemaLogin = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
}).required();

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let location = useLocation()
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schemaLogin)
  })

  const onSubmit = async (data) => {
    try {
      const { token } = await dispatch(validateLogin(data))
      window.localStorage.setItem('token',token)
      // setToken(token)
      navigate( '/wrapper')
      window.location.replace('/wrapper');
    } catch (error) {
      console.log(error)
      // const { data = {} } = error?.response
      //toastr.error(data?.mns || data?.message || error.stack || error.mns || error)
    }
  }

  

  useEffect(() => {
  },[errors])

  return (<div className="hold-transition login-page">
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
                    className= { !errors.username ? "form-control" : "form-control is-invalid" }
                    placeholder="username"

                  />
                  <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                </div>
                <div className="form-group has-feedback">
                  <input
                    {...register("password")}
                    type="password" 
                    name="password" 
                    className={ !errors.password ? "form-control" : "form-control is-invalid" }
                    placeholder="Password" 
                  />
                  <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div className="row">
                  <div className="col-12">
                    <button 
                      className="btn btn-primary btn-block btn-flat"
                      type="submit"
                    >Sign In</button>
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
