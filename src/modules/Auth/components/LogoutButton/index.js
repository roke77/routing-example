import React from 'react'
import { useHistory } from 'react-router-dom'

import useLogout from '../../hooks/useLogout'
import { REDIRECT_RESTRICTED_PATH } from '../../../../router'

const LogoutButton = () => {
  const history = useHistory()
  const { logout } = useLogout()

  const handleClick = async () => {
    await logout()
    history.push(REDIRECT_RESTRICTED_PATH)
  }

  return <button onClick={handleClick}>Log Out</button>
}

export default LogoutButton
