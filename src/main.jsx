import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import "./Index.scss"

import 'bootstrap/dist/css/bootstrap.min.css'
import { Collapse } from 'react-bootstrap'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
