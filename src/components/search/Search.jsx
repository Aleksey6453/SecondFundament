import React from 'react'
import styles from './Search.module.css'
import MyInput from '../UI/input/MyInput'

const Search = ({searchQuery, setSearchQuery}) => {
  return (
    <div className={styles.search}>
      <MyInput 
            placeholder='Search...'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
      />
    </div>
  )
}

export {Search}
