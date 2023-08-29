import React from 'react'
import { MySelect } from '../UI/select/MySelect'

const Sort = ({posts, setPosts}) => {
    const [selectedSort, setSelectedSort] = React.useState('')
    const sortPosts = (sort) => {
      setSelectedSort(sort);
      setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
      console.log(sort)
    }
  return (
    <MySelect defaultValue="sort by..."
        value={selectedSort}
        onChange={sortPosts}
        options={[
        {value: "title", name: "by title"},
        {value: "body", name: "by body"}
        ]}
    />
  )
}

export {Sort}
