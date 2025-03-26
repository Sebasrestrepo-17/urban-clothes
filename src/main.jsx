import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Producto from './Producto'
import Venta from './Venta'
import Cliente from './Cliente'
import Page from './Page'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
