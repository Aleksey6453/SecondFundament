import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='globalWrap'>
       <h1>This page is not found.</h1>
        Go <Link to = "/"> home </Link>
        <img src="https://media.tits-guru.com/images/da334281-b40e-4713-afec-e3db1fea45d6.jpeg" alt="image" className='hanaImg'/>
    </div>
  )
}

export {Error}
