import React from 'react'
import styles from './PostList.module.css'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const PostList = ({posts, Post, remove}) => {
  if(!posts.length){
    return <h1>There is empty!</h1>
  }

  return (
    <div className={styles.postList}>
       <h1>List of Posts</h1>
       <TransitionGroup>
        {posts.map((post, index) => 
            <CSSTransition
              key={post.id}
              timeout={500}
              classNames="post"
            >
                <Post remove={remove} number={index + 1} post={post}  />
            </CSSTransition>
        )}
      </TransitionGroup>
      
       {/* {
        posts.map((post, index) => 
          <Post post={post} 
                key={post.id} 
                title={post.title} 
                body={post.body} 
                id={post.id}
                remove={remove}
                number={index + 1} 
                />
        )
      } */}
    </div>
  )
}

export {PostList}
