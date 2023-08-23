import React from 'react'

const Test = () => {

  const [count, setCount] = React.useState(0)
 
 
  return (
    <div>
     <h1>{count}</h1>
     <button onClick={(prev) => {setCount(count + 1)}}>
      +
     </button>
     <button onClick={(prev) => {setCount(count - 1)}}>
      -
     </button>
    </div>
  )
}

export {Test}
