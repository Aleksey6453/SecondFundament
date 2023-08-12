import React from 'react'
import styles from './PostList.module.css'

const PostList = ({posts, Post}) => {
  return (
    <div className={styles.postList}>
       <h1>List of Posts</h1>
       {
        posts.map((post, index) => 
          <Post post={post} 
                key={post.id} 
                title={post.title} 
                body={post.body} 
                id={post.id}
                number={index + 1} 
                />
        )
      }
    </div>
  )
}

export {PostList}
