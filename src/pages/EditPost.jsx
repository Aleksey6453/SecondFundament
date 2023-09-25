import React from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const EditPost = () => {
    const {id} = useParams()
    const {signOut} = useAuth()
    const navigate = useNavigate()
  return (
    <div>
      <h1>Edit post {id} </h1>
      <button onClick={()=>signOut(()=>navigate('/', {replace: true}))}>Log Out</button>
    </div>
  )
}

export {EditPost}
