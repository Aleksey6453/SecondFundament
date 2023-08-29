import React from 'react'
import MyInput from '../UI/input/MyInput'
import styles from './Search.module.css'

const Search = ({searchQuery, setSearchQuery}) => {
 
  return (
      <MyInput  placeholder='search...'
                type='text' 
                value = {searchQuery}
                onChange = {e => setSearchQuery(e.target.value)}
                />
  )
}

export {Search}
