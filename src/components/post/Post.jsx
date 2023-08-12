import React from 'react'
import styles from './Post.module.css'

const Post = ({title, body, id, number}) => {
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
            <button className="btn">Delete</button>
      </div>
    </div>
  )
}

export {Post}
