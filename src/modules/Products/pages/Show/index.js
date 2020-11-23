import React from 'react'
import { useParams } from 'react-router-dom'

const Show = () => {
  let { id } = useParams()

  return (
    <div>
      <h1>Show Product {id}</h1>
    </div>
  )
}

export default Show
