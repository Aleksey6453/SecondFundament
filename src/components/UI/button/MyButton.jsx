import React, { Children } from 'react'
import styles from './MyButton.module.css'

const MyButton = ({children}) => {
  return (
    <button className={styles.btn}>
        {children}
    </button>
  )
}

export default MyButton
