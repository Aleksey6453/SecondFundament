import React from 'react'
import MyButton from '../UI/button/MyButton'
import styles from './Post.module.css'

const Post = ({post, number, onDelete}) => {

  return (
    <div className={styles.postCart}>
      <div className={styles.left}>
        <b className={styles.postCartTitle}>{number}{post.title}</b>
        <p className={styles.postCartText}>{post.body}{number}</p>
      </div>
      <MyButton onClick={()=>onDelete(post.id)}>Delete</MyButton>
    </div>
  )
}

export {Post}
