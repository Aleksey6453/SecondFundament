import React from 'react'
import MyButton from '../UI/button/MyButton'
import styles from './Post.module.css'
import { Link, useNavigate } from 'react-router-dom'

const Post = ({post, number, onDelete}) => {

  const titleUpper = post.title.charAt(0).toUpperCase() + post.title.slice(1)
  const bodyUpper = post.body.charAt(0).toUpperCase() + post.body.slice(1)
  const chortDateNow = String(post.id).slice(0, 2) 

  const navigate = useNavigate();
  const handleMore = () => {
     navigate(`/posts/${post.id}`)
  } 
  const editPost = () => {
    //  navigate(`/posts/${post.id}/edit`)
    navigate('/posts/new')
  }

  return (
    <div className={styles.postCart}>
      <div className={styles.left}>
        <b className={styles.postCartTitle}>{chortDateNow}. {titleUpper}</b>
        <p className={styles.postCartText}>{bodyUpper}</p>
      </div>
      <div className={styles.btnBlock}>
        <MyButton onClick={()=>onDelete(post.id)}>Delete</MyButton>
        <MyButton onClick={ handleMore }>More</MyButton>
        <MyButton onClick={ editPost }>Edit</MyButton>
      </div>
    </div>
  )
}

export {Post}
