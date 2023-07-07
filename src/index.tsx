import React from 'react'
import ReactDOM from 'react-dom/client'
import './outputTailwind.css'
import Router from './components/Router'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)
