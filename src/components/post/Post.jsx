import React from 'react'
import MyButton from '../UI/button/MyButton'
import styles from './Post.module.css'

const Post = ({post, number, onDelete}) => {

  const titleUpper = post.title.charAt(0).toUpperCase() + post.title.slice(1)
  const bodyUpper = post.body.charAt(0).toUpperCase() + post.body.slice(1)

  return (
    <div className={styles.postCart}>
      <div className={styles.left}>
        <b className={styles.postCartTitle}>{number}. {titleUpper}</b>
        <p className={styles.postCartText}>{bodyUpper}</p>
      </div>
      <MyButton onClick={()=>onDelete(post.id)}>Delete</MyButton>
    </div>
  )
}

export {Post}
