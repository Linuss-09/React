import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid} = useParams()
  return (
    <div className='bg-red-500 text-center text-white py-2 text-xl font-mono' >User: {userid} </div>
  )
}

export default User