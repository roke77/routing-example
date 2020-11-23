import React from 'react'
import Router from './router'
import UnAuthenticated from './router/UnAuthenticated'
import Protected from './router/Protected'

import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import Login from './modules/Auth/pages/Login'
import Register from './modules/Auth/pages/Register'

import buildStoreRoutes from './modules/Store/routes'
import buildProductsRoutes from './modules/Products/routes'

const ROUTES = [
  {
    path: '/',
    key: 'ROOT',
    exact: true,
    component: Landing
  },
  {
    path: '/dashboard',
    key: 'DASHBOARD',
    exact: true,
    component: () => <Protected component={Dashboard} />
  },
  {
    path: '/login',
    key: 'LOGIN',
    exact: true,
    component: () => <UnAuthenticated component={Login} />
  },
  {
    path: '/register',
    key: 'REGISTER',
    exact: true,
    component: () => <UnAuthenticated component={Register} />
  },
  {
    path: '/store',
    key: 'STORE_ROUTER',
    component: Router,
    routes: buildStoreRoutes({ path: '/store', key: 'STORE' })
  },
  {
    path: '/products',
    key: 'PRODUCTS_ROUTER',
    component: props => <Protected component={Router} {...props} />,
    routes: buildProductsRoutes({ path: '/products', key: 'PRODUCTS' })
  }
]

export default ROUTES
