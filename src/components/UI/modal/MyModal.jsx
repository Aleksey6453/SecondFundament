import React from 'react'
import styles from './MyModal.module.css'

const MyModal = ({children, visible, setVisible }) => {
    const rootStyles = [styles.myModal]

    if (visible) {
        rootStyles.push(styles.active)
    }

  return (
    <div className={rootStyles.join(' ')}>
      <div className={styles.myModalContent}>
            {children}
      </div>
    </div>
  )
}

export {MyModal}
