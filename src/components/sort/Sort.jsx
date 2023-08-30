import React from 'react'
import { MySelect } from '../UI/select/MySelect'

const Sort = ({ filter, setFilter}) => {

  return (
    <MySelect defaultValue="sort by..."
        value={filter.sort}
        onChange={e => setFilter({...filter, sort: e})}
        options={[
        {value: "title", name: "by title"},
        {value: "body", name: "by body"}
        ]}
    />
  )
}

export {Sort}
