import React from 'react'
import styles from './Post.module.css'

const Post = ({title,body,id}) => {
    console.log('work')
  return (
    <div className={styles.postCart}>
      <div className={styles.left}>
        <stronger className={styles.postCartTitle}>
            Post {title} {id}
        </stronger>
        <p className={styles.postCartText}>
           {body} {id}
        </p>
      </div>
      <div className={styles.right}>
            <button className="btn">Delete</button>
      </div>
    </div>
  )
}

export {Post}
