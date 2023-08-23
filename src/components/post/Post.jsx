import React from 'react'
import styles from './Post.module.css'

const Post = ({post}) => {
  return (
    <div className={styles.postCart}>
      <div className={styles.left}>
        <b className={styles.postCartTitle}>{post.id}{post.title}</b>
        <p className={styles.postCartText}>{post.body}{post.id}</p>
      </div>
      <button className='btn'>Delete</button>
    </div>
  )
}

export {Post}
