import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { crearUbicacionPlano, getUbicacionPlano } from '../../thunks/Ubicaciones'
import { getAllCiudades, getAllPaises, getAllPisos } from '../../thunks/Paises'
import { useForm } from 'react-hook-form'
import { FormEmpleados } from './FormEmpleados'
import FormularioInventario from './FormularioInventario'
import UbicacionInventarios from './UbicacionInventarios'


const FormularioUbicacion = () => {
  const dispatch = useDispatch()
  const { register, formState:{errors}, handleSubmit } = useForm()
  
  

  
  
  useEffect(() => {
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
                    <a className="nav-link " id="custom-tabs-two-home-tab" data-toggle="pill" href="#custom-tabs-two-home" role="tab" aria-controls="custom-tabs-two-home" aria-selected="true">Empleado Empresa</a>
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
                    <UbicacionInventarios/>
                  </div>
                  <div className="tab-pane fade" id="custom-tabs-two-profile" role="tabpanel" aria-labelledby="custom-tabs-two-profile-tab">
                  <FormularioInventario/>
                  </div>
                  <div className="tab-pane fade" id="custom-tabs-two-messages" role="tabpanel" aria-labelledby="custom-tabs-two-messages-tab">
                     Morbi turpis dolor, vulputate vitae felis non, tincidunt congue mauris. Phasellus volutpat augue id mi placerat mollis. Vivamus faucibus eu massa eget condimentum. Fusce nec hendrerit sem, ac tristique nulla. Integer vestibulum orci odio. Cras nec augue ipsum. Suspendisse ut velit condimentum, mattis urna a, malesuada nunc. Curabitur eleifend facilisis velit finibus tristique. Nam vulputate, eros non luctus efficitur, ipsum odio volutpat massa, sit amet sollicitudin est libero sed ipsum. Nulla lacinia, ex vitae gravida fermentum, lectus ipsum gravida arcu, id fermentum metus arcu vel metus. Curabitur eget sem eu risus tincidunt eleifend ac ornare magna.
                  </div>
                  <div className="tab-pane fade" id="custom-tabs-two-settings" role="tabpanel" aria-labelledby="custom-tabs-two-settings-tab">
                    
                  </div>
              </div>
            </div>
          </div>
           
        </div>
      </div>
    </>
  )
}

export default FormularioUbicacion
