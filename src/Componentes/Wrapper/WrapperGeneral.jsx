import { useState } from 'react'
import MenuHeader from '../Main/MainHeader'
import MainSidebar from '../Main/MainSidebar'
import FormularioUbicacion from '../Formularios/FormularioUbicacion'


const Wrapper = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="wrapper">
      <MenuHeader/>
      <MainSidebar/>
      <div className="content-wrapper">
      <section className="content-header">
        <h1>
          Invoice
          <small>#007612</small>
        </h1>
      <ol className="breadcrumb">
        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
        <li><a href="#">Examples</a></li>
        <li className="active">Invoice</li>
      </ol>
      </section>
        <FormularioUbicacion/>
      </div>
      <footer className="main-footer no-print">
        <div className="pull-right hidden-xs">
          <b>Version</b> 2.4.18
        </div>
        <strong>Copyright &copy; 2014-2019 <a href="https://adminlte.io">AdminLTE</a>.</strong> All rights
        reserved.
      </footer>
    </div>
  )
}

export default Wrapper
