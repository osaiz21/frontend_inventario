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
    <>
      <div className="nav-tabs-custom">
        <ul className="nav nav-tabs">
          <li className="active"><a href="#tab_1" data-toggle="tab">Ubicacion Inventario</a></li>
          <li><a href="#tab_2" data-toggle="tab">Empleado Empresa</a></li>
          <li><a href="#tab_3" data-toggle="tab">Activo Fijos</a></li>
          <li className="pull-right"><a href="#" className="text-muted"><i className="fa fa-gear"></i></a></li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane active" id="tab_1">
            <div className="row">
              <div className="col-xs-8">
                <div className="form-group">
                  <label>Codigo Plano</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Plano" 
                    name='codigo_plano'
                    value={formUbicacion.codigo_plano.toUpperCase()}
                    onChange={(e)=> {
                      setformUbicacion( state => ({
                          ...state,
                          [e.target.name] : e.target.value
                        })
                      )}
                    }
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        buscarPlano()
                      }
                    }}
                  />
                </div>
              </div>
              <div className="col-xs-4">
                <label>&nbsp;</label>
                <button  className="btn btn-primary btn-block btn-flat" onClick={buscarPlano}>Validar</button>
              </div>
            </div>
            {infoUbicacion.length == 0 ? (
              <>  
                <div className="row">
                  <div className="col-xs-6">
                    <div className="form-group">
                      <label>Pais</label>
                      <select
                        id="pais"
                        name="pais"
                        className="form-control select2"
                        data-placeholder="Pais"
                      >
                      </select>
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <div className="form-group">
                      <label>Ciudad</label>
                      <select
                        id="ciudad"
                        name="ciudad"
                      ></select>
                    </div>  
                  </div>
                  
                </div>
                <div className="row">
                  <div className="col-xs-6">
                  <div className="form-group">
                      <label>Piso</label>
                        <select
                          id="pisos"
                          name="pisos"
                        ></select>
                    </div>
                    
                  </div>
                  <div className="col-xs-6">
                    <div className="form-group">
                    <div className="form-group">
                      <label>Departamento</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name='departamento'
                        placeholder="Departamento"
                        onChange={(e)=> {
                          setformUbicacion( { 
                              ...formUbicacion,
                              [e.target.name] : e.target.value
                            }
                          )
                        }}
                      />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-6">
                  <div className="form-group">
                      <label>Ubicacion Fisica</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name='ubicacion_fisica'
                        placeholder="Ubicacion Fisica"
                        onChange={(e)=> {
                          setformUbicacion( { 
                              ...formUbicacion,
                              [e.target.name] : e.target.value
                            }
                          )
                        }}
                      />
                      </div>
                  </div>
                  <div className="col-xs-6">
                  <div className="form-group">
                    <label>Sede</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Sede" 
                        name='sede'
                        onChange={(e)=> {
                          setformUbicacion( { 
                              ...formUbicacion,
                              [e.target.name] : e.target.value
                            }
                          )
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <button 
                      className="btn btn-primary btn-block btn-flat"
                      onClick={sendForm}
                    >Guardar</button>
                  </div>
                </div>
              </>
            ) : (
              <>
              <p className="lead">Informacion Ubicacion</p>
                <div className="table-responsive">
                  <table className="table">
                  <tbody>
                    <tr>
                      <th>Codigo Plano:</th>
                      <td>{infoUbicacion[0].codigo_plano}</td>
                    </tr>
                    <tr>
                      <th>Sede:</th>
                      <td>{infoUbicacion[0].sede}</td>
                    </tr>
                    <tr>
                      <th>Ubicacion Fisica:</th>
                      <td>{infoUbicacion[0].ubicacion_fisica}</td>
                    </tr>
                    <tr>
                      <th>Piso</th>
                      <td>{infoUbicacion[0].piso}</td>
                    </tr>

                  </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
          <div className="tab-pane " id="tab_2">
            <FormEmpleados/>
          </div>
          <div className="tab-pane " id="tab_3">
            <div className="row">
              <div className="col-xs-12">
                <p>Hola 3</p>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </>
  )
}

export default FormularioInventario
