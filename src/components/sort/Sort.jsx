import React from 'react'
import { MySelect } from '../UI/select/MySelect'

const Sort = ({posts, setPosts, selectedSort, setSelectedSort}) => {
    // const [selectedSort, setSelectedSort] = React.useState('')

    // const sortedPosts = [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))

    const sortPosts = (sort) => {
      setSelectedSort(sort);
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
