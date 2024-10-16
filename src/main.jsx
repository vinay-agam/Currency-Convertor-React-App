import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CurrencyConverter from './CurrencyConverter'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <CurrencyConverter />
  </StrictMode>,
)
