import React from 'react'
import styles from './Search.module.css'
import MyInput from '../UI/input/MyInput'

const Search = ({setFilter, filter}) => {
  return (
    <div className={styles.search}>
      <MyInput 
            placeholder='Search...'
            value={filter.query}
            onChange={e => setFilter({...filter, query: e.target.value})}
      />
    </div>
  )
}

export {Search}
