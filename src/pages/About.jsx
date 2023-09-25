import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
  console.log(useLocation())

  return (
    <div className='globalWrap'>
      <h1>About</h1>
    </div>
  )
}

export { About }
