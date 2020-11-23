import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Router from './router'
import ROUTES from './routes'
import RouteMenu from './components/RouteMenu'
import LogoutButton from './modules/Auth/components/LogoutButton'
import './index.css'

const App = () => (
  <div className='container'>
    <div className='routeMenu'>
      <RouteMenu routes={ROUTES} />
      <LogoutButton />
    </div>
    <div className='mainApp'>
      <Router routes={ROUTES} />
    </div>
  </div>
)

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
