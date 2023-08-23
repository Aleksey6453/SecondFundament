import React from 'react'
import styles from './PostList.module.css'
import { Post } from '../post/Post'

const PostList = ({posts, post, title}) => {
  return (
    <div className={styles.postList}>
      <h1>{title}</h1>
      {
        posts.map((post, index) =>
          <Post number={index + 1} post={post} key={post.id} />
        )
      }
    </div>
  )
}

export {PostList}
