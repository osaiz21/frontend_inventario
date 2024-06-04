import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { crearUbicacionPlano, getUbicacionPlano } from '../../thunks/Ubicaciones'
import { getAllCiudades, getAllPaises, getAllPisos } from '../../thunks/Paises'
import { useForm } from 'react-hook-form'
import { FormEmpleados } from './FormEmpleados'
import FormularioInventario from './FormularioInventario'


const FormularioUbicacion = () => {
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
      <div className="col-12">
        <div className="nav-tabs-custom">
          <div className="card card-primary card-tabs">
            <div className="card-header p-0 pt-1">
              <ul className="nav nav-tabs" id="custom-tabs-two-tab" role="tablist">
                  {/* <li className="pt-2 px-3"><h3 className="card-title">Ubicacion Inventario</h3></li> */}
                  <li className="nav-item">
                    <a className="nav-link active" id="custom-tabs-two-home-tab" data-toggle="pill" href="#custom-tabs-two-home" role="tab" aria-controls="custom-tabs-two-home" aria-selected="true">Ubicacion Inventario</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" id="custom-tabs-two-home-tab" data-toggle="pill" href="#custom-tabs-two-home" role="tab" aria-controls="custom-tabs-two-home" aria-selected="true">Empleado Empresa</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="custom-tabs-two-profile-tab" data-toggle="pill" href="#custom-tabs-two-profile" role="tab" aria-controls="custom-tabs-two-profile" aria-selected="false">Activo Fijos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="custom-tabs-two-messages-tab" data-toggle="pill" href="#custom-tabs-two-messages" role="tab" aria-controls="custom-tabs-two-messages" aria-selected="false">NIC (16)</a>
                  </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="tab-content" id="custom-tabs-two-tabContent">
                  <div className="tab-pane fade show active" id="custom-tabs-two-home" role="tabpanel" aria-labelledby="custom-tabs-two-home-tab">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada lacus ullamcorper dui molestie, sit amet congue quam finibus. Etiam ultricies nunc non magna feugiat commodo. Etiam odio magna, mollis auctor felis vitae, ullamcorper ornare ligula. Proin pellentesque tincidunt nisi, vitae ullamcorper felis aliquam id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id orci eu lectus blandit suscipit. Phasellus porta, ante et varius ornare, sem enim sollicitudin eros, at commodo leo est vitae lacus. Etiam ut porta sem. Proin porttitor porta nisl, id tempor risus rhoncus quis. In in quam a nibh cursus pulvinar non consequat neque. Mauris lacus elit, condimentum ac condimentum at, semper vitae lectus. Cras lacinia erat eget sapien porta consectetur.
                  </div>
                  <div className="tab-pane fade" id="custom-tabs-two-profile" role="tabpanel" aria-labelledby="custom-tabs-two-profile-tab">
                     Mauris tincidunt mi at erat gravida, eget tristique urna bibendum. Mauris pharetra purus ut ligula tempor, et vulputate metus facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas sollicitudin, nisi a luctus interdum, nisl ligula placerat mi, quis posuere purus ligula eu lectus. Donec nunc tellus, elementum sit amet ultricies at, posuere nec nunc. Nunc euismod pellentesque diam.
                  </div>
                  <div className="tab-pane fade" id="custom-tabs-two-messages" role="tabpanel" aria-labelledby="custom-tabs-two-messages-tab">
                     Morbi turpis dolor, vulputate vitae felis non, tincidunt congue mauris. Phasellus volutpat augue id mi placerat mollis. Vivamus faucibus eu massa eget condimentum. Fusce nec hendrerit sem, ac tristique nulla. Integer vestibulum orci odio. Cras nec augue ipsum. Suspendisse ut velit condimentum, mattis urna a, malesuada nunc. Curabitur eleifend facilisis velit finibus tristique. Nam vulputate, eros non luctus efficitur, ipsum odio volutpat massa, sit amet sollicitudin est libero sed ipsum. Nulla lacinia, ex vitae gravida fermentum, lectus ipsum gravida arcu, id fermentum metus arcu vel metus. Curabitur eget sem eu risus tincidunt eleifend ac ornare magna.
                  </div>
                  <div className="tab-pane fade" id="custom-tabs-two-settings" role="tabpanel" aria-labelledby="custom-tabs-two-settings-tab">
                     Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque magna, iaculis tempus turpis ac, ornare sodales tellus. Mauris eget blandit dolor. Quisque tincidunt venenatis vulputate. Morbi euismod molestie tristique. Vestibulum consectetur dolor a vestibulum pharetra. Donec interdum placerat urna nec pharetra. Etiam eget dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et felis ut nisl commodo dignissim. In hac habitasse platea dictumst. Praesent imperdiet accumsan ex sit amet facilisis.
                  </div>
              </div>
            </div>
          </div>
          {/* <ul className="nav nav-tabs">
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
              <FormularioInventario/>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default FormularioUbicacion
