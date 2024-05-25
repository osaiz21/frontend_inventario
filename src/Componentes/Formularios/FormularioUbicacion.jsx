import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { crearUbicacionPlano, getUbicacionPlano } from '../../thunks'


const FormularioUbicacion = () => {
  const [plano, setPlano] = useState({})
  const [valplano, setValPlano] = useState()
  const dispatch = useDispatch()
  const [formUbicacion, setformUbicacion] = useState({
    "codigo_plano": "1" ,
    "pais":"",          
    "ciudad":"",        
    "sede": "",
    "departamento":"",
    "ubicacion_fisica":"",
    "piso":""  
  })
  const { infoUbicacion } = useSelector(state => state.ubicacionInventario)
  const buscarPlano = (e) => {
    dispatch(getUbicacionPlano(plano))
  }

  const sendForm = () => {
    dispatch(crearUbicacionPlano({
      ...formUbicacion,
      ...plano
    }))
  }

  useEffect(() => {
    console.log(formUbicacion)
  },[formUbicacion])

  useEffect(() => {
  },[plano])

  return (
    <>
      <div className="nav-tabs-custom">
            <ul className="nav nav-tabs">
              <li className="active"><a href="#tab_1" data-toggle="tab">Tab 1</a></li>
              <li><a href="#tab_2" data-toggle="tab">Tab 2</a></li>
              <li><a href="#tab_3" data-toggle="tab">Tab 3</a></li>
              
              <li className="pull-right"><a href="#" className="text-muted"><i className="fa fa-gear"></i></a></li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active" id="tab_1">
              <div className="row">
        <div className="col-xs-8">
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Plano" 
              name='codigo_plano'
              value={valplano}
              onChange={(e)=> {
              setPlano( { 
                  [e.target.name] : e.target.value
                }
              )
              // setValPlano(e.target.value.toUpperCase())
            }}/>
          </div>
        </div>
        <div className="col-xs-4">
          <button  className="btn btn-primary btn-block btn-flat" onClick={buscarPlano}>Validar</button>
        </div>
        
      </div>
            {infoUbicacion.length == 0 ? (
              <>  
                <div className="row">
                  <div className="col-xs-6">
                    <div className="form-group">
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Pais"
                        name='pais'
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
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Ciudad" 
                      name='ciudad'
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
                <div className="row">
                  <div className="col-xs-6">
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
                  <div className="col-xs-6">
                    <div className="form-group">
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
                <div className="row">
                  <div className="col-xs-6">
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
                  <div className="col-xs-6">
                    <div className="form-group">
                      <input 
                        type="text" 
                        name="piso" 
                        className="form-control" 
                        placeholder="Piso"
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
                    >Enviar</button>
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


            ) }
          </div>
          </div>
          </div>
      
    </>
  )
}

export default FormularioUbicacion
