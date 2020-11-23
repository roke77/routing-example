import React from 'react'
import { Link } from 'react-router-dom'

const RouteMenu = ({ routes }) => <ul>{routes.map(recursiveRouteMapper)}</ul>

const recursiveRouteMapper = ({ routes: subRoutes, ...route }) => {
  if (subRoutes)
    return (
      <React.Fragment key={route.key}>
        {singleRoute(route)}
        <RouteMenu routes={subRoutes} />
      </React.Fragment>
    )

  return singleRoute(route)
}

const singleRoute = ({ key, path }) => {
  const singlePath = Array.isArray(path) ? path[0] : path

  return (
    <li key={key}>
      <Link to={singlePath}>
        {key} ({singlePath})
      </Link>
    </li>
  )
}

export default RouteMenu
