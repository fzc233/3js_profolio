import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//test
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <button/>
  </StrictMode>,
)
