import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter} from 'react-router-dom'
import { store } from './Store'
import { Generalroute } from './routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Generalroute/>
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>,
)
