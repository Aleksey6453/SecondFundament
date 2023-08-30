import React from 'react'
import { Search } from '../search/Search'
import { Sort } from '../sort/Sort'
import styles from './PostFilter.module.css'

const PostFilter = ({posts, setPosts, selectedSort, setSelectedSort, searchQuery, setSearchQuery}) => {
  return (
    <div className='gorizont'>
        <Sort posts={posts} 
              setPosts={setPosts}
              selectedSort={selectedSort}
              setSelectedSort={setSelectedSort}
              />
        <Search searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                />
    </div>
  )
}

export default PostFilter
