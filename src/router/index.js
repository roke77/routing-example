import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NotFound from '../pages/NotFound'

const REDIRECT_AUTHENTICATED_PATH = '/dashboard'
const REDIRECT_RESTRICTED_PATH = '/login'

const Router = ({ routes }) => (
  <Switch>
    {routes.map(({ key, ...route }) => (
      <RouteWithSubRoutes key={key} {...route} />
    ))}
    <Route component={NotFound} />
  </Switch>
)

const RouteWithSubRoutes = ({ path, exact, routes, component: Component }) => (
  <Route
    path={path}
    exact={exact}
    render={props => <Component {...props} routes={routes} />}
  />
)

export {
  Router as default,
  REDIRECT_AUTHENTICATED_PATH,
  REDIRECT_RESTRICTED_PATH
}
