import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Importação obrigatória
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* <--- O App PRECISA estar dentro dele */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)