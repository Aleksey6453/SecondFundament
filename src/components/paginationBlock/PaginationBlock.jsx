import React from 'react'
import styles from './PaginationBlock.module.css'

const PaginationBlock = ({pagesArray}) => {
  return (
    <div className={styles.paginationBlock}>
        { pagesArray.map(p => 
            <button className={styles.btn}>{p}</button>
        )}
    </div>
  )
}

export {PaginationBlock}
