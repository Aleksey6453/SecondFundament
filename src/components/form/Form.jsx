import React from 'react'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'
import styles from './Form.module.css'

const Form = () => {
  return (
    <form className={styles.gorizont}>
       <MyInput type="text" placeholder='New title'/>
       <MyInput type="text" placeholder='New body' />
       <MyButton>Add post!</MyButton>
    </form>
  )
}

export {Form}
