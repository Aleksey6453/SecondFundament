import React, { Children } from 'react'
import styles from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
  return (
    <button className={styles.btn} {...props}>
        {children}
    </button>
  )
}

export default MyButton
