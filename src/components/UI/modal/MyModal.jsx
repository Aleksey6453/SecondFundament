import React from 'react'
import styles from './MyModal.module.css'

const MyModal = ({children}) => {
  return (
    <div className={[styles.myModal, styles.active].join(' ')}>
      <div className={styles.myModalContent}>
            {children}
      </div>
    </div>
  )
}

export {MyModal}
