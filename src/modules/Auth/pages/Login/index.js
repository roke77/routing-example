import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import useLogin from '../../hooks/useLogin'
import { REDIRECT_AUTHENTICATED_PATH } from '../../../../router'

export default function Login () {
  const history = useHistory()
  const { login } = useLogin()
  const [user, updateUser] = useState('')

  const handleClick = async () => {
    await login(user)
    history.push(REDIRECT_AUTHENTICATED_PATH)
  }

  return (
    <div>
      <h1>Log In</h1>
      <div>
        <label>User</label>
        <input value={user} onChange={e => updateUser(e.target.value)} />
        <button disabled={!user} onClick={handleClick}>
          Log In
        </button>
      </div>
    </div>
  )
}
