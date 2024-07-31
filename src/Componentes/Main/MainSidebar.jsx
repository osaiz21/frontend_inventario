import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { validateToken } from "../../thunks/Users"

const MainSidebar = () => {

  const dispatch = useDispatch()
  const { nombres = '', apellidos = '', foto = '', id = '' } = useSelector(state => state.users.info)
  const { codigoPlanoSelected } = useSelector(state => state.ubicacionInventario)
  const [token, setToken] = useState(window.localStorage.getItem('token'))
  const [name, setName] = useState('')

  const validateAuthorized = async () => {
    try {
      if (!!token) {
        await  dispatch(validateToken(token))
      }
    } catch (error) {
      // Se debe eliminar token.
      const { data }  = error.response
      toastr.error( data.message || 'Error no identificado', (() => {
        window.localStorage.clear()
        window.location.reload()
      })())
    }
  } 
  useEffect(() => {
    setName(`${nombres} ${apellidos}`)
  },[nombres])

  useEffect( () => {
    validateAuthorized()
  }, [token])

  return (
    <>
      <aside className="main-sidebar sidebar-dark-orange elevation-4">
    <a href="index3.html" className="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{"opacity": .8}}/>
      <span className="brand-text font-weight-light">3GS</span>
    </a>

    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src={foto} className="img-circle elevation-2" alt="User Image"/>
        </div>
        <div className="info">
          <a href="#" className="d-block">{name}</a>
        </div>
      </div>

      <div className="form-inline">
        <div className="input-group" data-widget="sidebar-search">
          <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
          <div className="input-group-append">
            <button className="btn btn-sidebar">
              <i className="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
      
          <li className="nav-item menu-open">
            <a href="#" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
                <i className="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="./index.html" className="nav-link active">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Dashboard v1</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./index2.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Dashboard v2</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./index3.html" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Dashboard v3</p>
                </a>
              </li>
            </ul>
          </li>
         </ul> 
      </nav>
    </div>
  </aside>
    </>
  )
}

export default MainSidebar
