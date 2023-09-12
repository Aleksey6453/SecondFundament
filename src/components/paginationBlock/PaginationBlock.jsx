import React from 'react'
import styles from './PaginationBlock.module.css'

const PaginationBlock = ({pagesArray, page, setPage }) => {
    const changePage = (page) => {
        setPage(page)
    }
  return (
    <div className={styles.paginationBlock}>
        { pagesArray.map(p => 
            <button onClick={() => changePage(p)}
                    key={p} 
                    className={page === p ? 'btnPag btnPagCurrent' : 'btnPag '}>
                {p}
            </button>
        )}
    </div>
  )
}

export {PaginationBlock}
