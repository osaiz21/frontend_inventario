import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { crearUbicacionPlano, getUbicacionPlano } from "../../thunks/Ubicaciones"
import { getAllCiudades, getAllPaises, getAllPisos } from "../../thunks/Paises"
import { setDataFormUbicacionInventario } from "../../Slices/UbicacionInventarioSlice"

 const UbicacionInventarios = () => {
  const dispatch = useDispatch()

  const { infoUbicacion, codigoPlanoSelected , form_ubicacion_inventarios } = useSelector(state => state.ubicacionInventario)
  const sendForm = async () => {
    try {

      await dispatch(crearUbicacionPlano({
        ...form_ubicacion_inventarios
      }))
      toastr.success(`Se creo Plano Correctamente (${form_ubicacion_inventarios?.codigo_plano})`)
    } catch (error) {
      const { mns = 'Error no Identificado'} = error.response.data 
      toastr.error(mns )
    }
  }

  const buscarPlano = async (e) => {
    try {

      await dispatch(getUbicacionPlano({ 
        codigo_plano : form_ubicacion_inventarios.codigo_plano
      }))
      await dispatch(getAllPaises())
      await dispatch(getAllCiudades())
      await dispatch(getAllPisos())

    } catch (error) {
      toastr.error(error)
    }
  }

  useEffect(() => {
    // Eventos
    

  },[])
 
  const createFormSelect = async () => {
    try {
      // get Paises.
      await dispatch(getAllPaises())
      await dispatch(getAllCiudades())
      await dispatch(getAllPisos())
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    

  },[])

  

  useEffect(() => {
    
  }, [codigoPlanoSelected])

  useEffect(() => {
    createFormSelect()
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
                      value={form_ubicacion_inventarios.codigo_plano}
                      onChange={(e)=> {
                        dispatch(setDataFormUbicacionInventario({
                          [e.target.name] : e.target.value.toUpperCase()
                        }))
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          buscarPlano(
                            { 
                              codigo_plano : e.target.value
                            }
                          )
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="col-2">
                  <label>&nbsp;</label>
                  <button  
                    className="btn btn-primary btn-block btn-flat" 
                    onClick={() => buscarPlano() }
                  >Validar</button>
                </div> 
              </div>
              {Object.keys(infoUbicacion).length == 0 ? (
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
                          value={form_ubicacion_inventarios.departamento}
                          onChange={(e)=> {
                            dispatch(setDataFormUbicacionInventario({
                              [e.target.name] : e.target.value.toUpperCase()
                            }))
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
                          value={form_ubicacion_inventarios.ubicacion_fisica}
                          placeholder="Ubicacion Fisica"
                          onChange={(e)=> {
                            dispatch(setDataFormUbicacionInventario({
                              [e.target.name] : e.target.value.toUpperCase()
                            }))
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
                          value={form_ubicacion_inventarios.sede}
                          onChange={(e)=> {
                            dispatch(setDataFormUbicacionInventario({
                              [e.target.name] : e.target.value.toUpperCase()
                            }))
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