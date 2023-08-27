import React from 'react'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'
import styles from './Form.module.css'

const Form = ({posts, setPosts}) => {
  // const [title, setTitle] = React.useState('')
  // const [body, setBody] = React.useState('')
  const [post, setPost] = React.useState({title:'', body:''})

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title: post.title, 
      body: post.body
    }
    console.log(newPost)
    if (newPost.title.trim() !== '' && newPost.body.trim() !== ''){
      setPosts([...posts, newPost])
      setPost({title:'', body:''})
    }
  }

 


  return (
    <div className={styles.gorizont}>
       <MyInput value={post.title} 
                onChange={e => setPost({...post, title: e.target.value})}
                placeholder='Add title...' 
                type='text'
                />
       <MyInput value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                placeholder='Add body...' 
                type='text' 
                />
       <MyButton onClick={addNewPost}>Add post</MyButton>
    </div>
  )
}

export {Form}
