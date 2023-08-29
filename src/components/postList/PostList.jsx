import React from 'react'
import styles from './PostList.module.css'
import { Post } from '../post/Post'

const PostList = ({posts, title, setPosts}) => {

  const deletePost = (postId) => {
    const updatedPost = posts.filter(post => post.id !== postId)
    setPosts(updatedPost)
  }

  // const removePost = (post) => {
  //   setPosts(posts.filter((p) => p.id !== post.id))
  // }

  return (
    <div className={styles.postList}>
      <h1>{title}</h1>
      {
        posts.map((post, index) =>
          <Post number={index + 1} 
                post={post} 
                key={post.id} 
                posts={posts} 
                setPosts={setPosts} 
                onDelete={deletePost}
                />
        )
      }
    </div>
  )
}

export {PostList}
