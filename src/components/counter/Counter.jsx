import React from 'react'
import styles from './Counter.module.css'


const Counter = () => {
  const [count, setCount] = React.useState(0)
  const [value, setValue] = React.useState('First')
  const plus = () => {
    setCount(count +1)
  }
  const minus = () => {
    setCount(count -1)
  }
  console.log(count)
  return (
    <div>
      <div className={styles.gorizont}>
        <button onClick={minus}>-</button>
        <h1>{count}</h1>
        <button onClick={plus}>+</button>
      </div>
      <div className={styles.gorizont}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
        <h1>{value}</h1>
      </div>
      

    </div>
    
  )
}

export {Counter}
