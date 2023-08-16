import React from 'react'
import styles from './PostFilter.module.css'
import { MySelect } from '../UI/select/MySelect'
import { Search } from '../search/Search'

const PostFilter = ({selectedSort, sortPosts, searchQuery, setSearchQuery, onChange}) => {
  return (
    
    <div className='gorizont'>  
        <MySelect 
            value={selectedSort}
            onChange={onChange}
            defaultValue='sort by...'
            options={[
                {value:'title', name:'by title'},
                {value:'body', name:'by body'}
            ]}
        />
        
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>  
    </div> 

  )
}

export  {PostFilter}
