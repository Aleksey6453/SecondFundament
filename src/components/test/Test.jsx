import React from 'react'

const Test = ({title, body, id}) => {
  return (
    <div>
      <h1>
        {title} {id}
      </h1>
      <h2>
        {body} {id}
      </h2>
    </div>
  )
}

export {Test}
