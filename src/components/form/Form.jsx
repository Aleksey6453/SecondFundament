import React from 'react'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'
import styles from './Form.module.css'

const Form = ({title, setTitle, body, setBody, titleInputRef}) => {
    // const titleInputRef = React.useRef()
    const addNewPost = (e) => {
        e.preventDefault()
    //    console.log(title, body)
       console.log(titleInputRef.current.value)
       setTitle('')
       setBody('')
    }
  return (
    <form className={styles.gorizont}>
       {/* <input type="text" className={styles.input} ref={titleInputRef} /> */}
       <MyInput type="text" 
                placeholder='New title' 
                onChange={e => setTitle(e.target.value)}
                value={title}
                ref={titleInputRef}
                />
       <MyInput type="text" 
                placeholder='New body'
                onChange={e => setBody(e.target.value)}
                value={body}
                 />
       <MyButton onClick={addNewPost}>Add post!</MyButton>
    </form>
  )
}

export {Form}
