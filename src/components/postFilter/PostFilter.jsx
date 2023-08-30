import React from 'react'
import { Search } from '../search/Search'
import { Sort } from '../sort/Sort'
import styles from './PostFilter.module.css'

const PostFilter = ({ filter, setFilter }) => {

  return (
    <div className='gorizont'>
        <Sort filter={filter}
              setFilter={setFilter}
              />
        <Search filter={filter}
                setFilter={setFilter}
                />
    </div>
  )
}

export default PostFilter
