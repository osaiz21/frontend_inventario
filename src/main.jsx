import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Wrapper from './Componentes/Wrapper/WrapperGeneral'
import { store } from './Store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Wrapper/>
    </Provider>
  </React.StrictMode>,
)
