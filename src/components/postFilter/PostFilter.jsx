import React from 'react'
import styles from './PostFilter.module.css'
import { MySelect } from '../UI/select/MySelect'
import { Search } from '../search/Search'

const PostFilter = ({filter, setFilter, selectedSort}) => {
  return (
    
    <div className='gorizont'>  
        <MySelect 
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            defaultValue='sort by...'
            options={[
                {value:'title', name:'by title'},
                {value:'body', name:'by body'}
            ]}
        />
        
        <Search 
                filter={filter}
                setFilter={setFilter}
        />  
    </div> 

  )
}

export  {PostFilter}
