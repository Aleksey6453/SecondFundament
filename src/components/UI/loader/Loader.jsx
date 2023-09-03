import React from 'react'
import styles from './Loader.module.css'

const Loader = () => {
  return (
    <div className={styles.center}>
        <div className={styles.loader}>
     
        </div>
        <h1 className={styles.loadingWords}> Loading... </h1> 
    
    </div>
  )
}

export default Loader
