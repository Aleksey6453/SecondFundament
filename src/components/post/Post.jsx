import React from 'react'
import MyButton from '../UI/button/MyButton'
import styles from './Post.module.css'

const Post = ({title, body, id, number, remove, post}) => {
    console.log('work')

  return (
    <div className={styles.postCart}>
      <div className={styles.left}>
        <a className={styles.postCartTitle}>
            Post {title} {number}
        </a>
        <p className={styles.postCartText}>
           {body} {number}
        </p>
      </div>
      <div className={styles.right}>
            {/* <button className="btn">Delete</button> */}
            <MyButton onClick={()=>remove(post)}>Delete</MyButton>
      </div>
    </div>
  )
}

export {Post}
