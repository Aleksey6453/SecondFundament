import React from 'react'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'
import styles from './Form.module.css'

const Form = ({titleInputRef, setPosts, posts}) => {
    // const titleInputRef = React.useRef()
    const [post, setPost] = React.useState({title: '', body:''})

    const addNewPost = (e) => {
        e.preventDefault()
      //   const newPost = {
      //       id: Date.now(),
      //       title,
      //       body
      //   }
       
       setPosts([...posts, {...post, id: Date.now()}])

    //    console.log(titleInputRef.current.value)
       setPost({title:'', body:''})
    }
  return (
    <form className={styles.gorizont}>
       {/* <input type="text" className={styles.input} ref={titleInputRef} /> */}
       <MyInput type="text" 
                placeholder='New title' 
                onChange={e => setPost({...post, title: e.target.value})}
                value={post.title}
               //  ref={titleInputRef}
                />
       <MyInput type="text" 
                placeholder='New body'
                onChange={e => setPost({...post, body: e.target.value})}
                value={post.body}
                 />
       <MyButton onClick={addNewPost}>Add post!</MyButton>
    </form>
  )
}

export {Form}
