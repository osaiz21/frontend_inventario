import { useState } from 'react'
import MenuHeader from '../Main/MainHeader'
import MainSidebar from '../Main/MainSidebar'
import FormularioUbicacion from '../Formularios/FormularioUbicacion'
import { useSelector } from 'react-redux'


const Wrapper = () => {
  const [count, setCount] = useState(0)
  const { codigo_plano = ''} = useSelector(state => state.ubicacionInventario?.codigoPlanoSelected)
  return (
    <div className="wrapper">
      <MenuHeader/>
      <MainSidebar/>
      <div className="content-wrapper">
      <section className="content-header">
       <div className="container-fluid">
          <div className="row mb-2">
          <div className="col-sm-6">
          <h1 className="m-0">Cod {`( ${codigo_plano} )`}</h1>
          </div>
          <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item active">Cod {`( ${codigo_plano} )`}</li>
          </ol>
          </div>
          </div>
          </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <FormularioUbicacion/>
        </div>
      </section>  
      </div>
      <footer className="main-footer">
        <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">3GS</a>.</strong>
        All rights reserved.
        <div className="float-right d-none d-sm-inline-block">
          <b>Version</b> 3.2.0
        </div>
      </footer>
      <aside className="control-sidebar control-sidebar-dark">
      </aside>
    </div>
  )
}

export default Wrapper
