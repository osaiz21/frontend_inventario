import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { crearUbicacionPlano, getUbicacionPlano } from "../../thunks/Ubicaciones"
import { getAllCiudades, getAllPaises, getAllPisos } from "../../thunks/Paises"

 const UbicacionInventarios = () => {
  const dispatch = useDispatch()
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

  const buscarPlano = (e) => {
    dispatch(getUbicacionPlano({ 
      codigo_plano : formUbicacion.codigo_plano
    }))
  }

  useEffect(() => {
  },[formUbicacion])
  useEffect(() => {
    // get Paises.
    dispatch(getAllPaises())
    dispatch(getAllCiudades())
    dispatch(getAllPisos())
    // dispatch(getAllCiudades())
  },[])
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
  },[])
  return (
      <>
              <div className="row">
                <div className="col-10">
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
                <div className="col-2">
                  <label>&nbsp;</label>
                  <button  className="btn btn-primary btn-block btn-flat" onClick={buscarPlano}>Validar</button>
                </div>
              </div>
              {infoUbicacion.length == 0 ? (
                <>  
                  <div className="row">
                    <div className="col-6">
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
                    <div className="col-6">
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
                    <div className="col-6">
                    <div className="form-group">
                        <label>Piso</label>
                          <select
                            id="pisos"
                            name="pisos"
                          ></select>
                      </div>
                      
                    </div>
                    <div className="col-6">
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
                    <div className="col-6">
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
                    <div className="col-6">
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
                    <div className="col-12">
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
                        <td>{infoUbicacion.codigo_plano}</td>
                      </tr>
                      <tr>
                        <th>Sede:</th>
                        <td>{infoUbicacion.sede}</td>
                      </tr>
                      <tr>
                        <th>Ubicacion Fisica:</th>
                        <td>{infoUbicacion.ubicacion_fisica}</td>
                      </tr>
                      <tr>
                        <th>Piso</th>
                        <td>{infoUbicacion.piso}</td>
                      </tr>

                    </tbody>
                    </table>
                  </div>
                </>
              )}
            </>
  )
}
export default UbicacionInventarios