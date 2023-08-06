import React from 'react'
import styles from './MyInput.module.css'

const MyInput = ({placeholder}) => {
  return (
   <input type="text" className={styles.input} placeholder={placeholder}/>
  )
}

export default MyInput
