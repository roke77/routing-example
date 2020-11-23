import React from 'react'
import { Redirect } from 'react-router-dom'
import useCurrentUser from '../hooks/useCurrentUser'
import { REDIRECT_AUTHENTICATED_PATH } from '.'

const UnAuthenticated = ({ component: Component, ...props }) => {
  const { currentUser } = useCurrentUser()

  if (currentUser) return <Redirect to={REDIRECT_AUTHENTICATED_PATH} />

  return <Component {...props} />
}

export default UnAuthenticated
