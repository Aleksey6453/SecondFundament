import React from 'react'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'
import styles from './Form.module.css'

const Form = ({posts, setPosts}) => {
  const [title, setTitle] = React.useState('')
  const [body, setBody] = React.useState('')

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title, 
      body
    }
    console.log(newPost)
    setPosts([...posts, newPost])

    setTitle('')
    setBody('')
  }

  return (
    <div className={styles.gorizont}>
       <MyInput value={title} 
                onChange={e => setTitle(e.target.value)}
                placeholder='Add title...' 
                type='text'
                />
       <MyInput value={body}
                onChange={e => setBody(e.target.value)}
                placeholder='Add body...' 
                type='text' 
                />
       <MyButton onClick={addNewPost}>Add post</MyButton>
    </div>
  )
}

export {Form}
