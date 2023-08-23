import React from 'react'
import styles from './Post.module.css'

const Post = ({post, number}) => {
  return (
    <div className={styles.postCart}>
      <div className={styles.left}>
        <b className={styles.postCartTitle}>{number}{post.title}</b>
        <p className={styles.postCartText}>{post.body}{number}</p>
      </div>
      <button className='btn'>Delete</button>
    </div>
  )
}

export {Post}
