import React from 'react'
import styles from './MySelect.module.css'

const MySelect = () => {
  return (
    <div className={styles.select}>
       <select>
        <option value="value 1">By title</option>
        <option value="value 2">By description</option>
       </select>
    </div>
  )
}

export {MySelect}
