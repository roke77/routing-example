import React from 'react'
import { Redirect } from 'react-router-dom'
import useCurrentUser from '../hooks/useCurrentUser'
import { REDIRECT_RESTRICTED_PATH } from './index'

const Protected = ({ component: Component, ...props }) => {
  const { currentUser } = useCurrentUser()

  if (!currentUser) return <Redirect to={REDIRECT_RESTRICTED_PATH} />

  return <Component {...props} />
}

export default Protected
