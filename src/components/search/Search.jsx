import React from 'react'
import MyInput from '../UI/input/MyInput'
import styles from './Search.module.css'

const Search = ({filter, setFilter}) => {
 
  return (
      <MyInput  placeholder='search...'
                type='text' 
                value = {filter.query}
                onChange = {e => setFilter({...filter, query: e.target.value})}
                />
  )
}

export {Search}
