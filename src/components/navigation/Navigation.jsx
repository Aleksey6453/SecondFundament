import React from 'react'
import styles from './Navigation.module.css'
import { NavLink, useNavigate } from 'react-router-dom'

const Navigation = () => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  return (
    <>
      <div className={styles.wrap}>
          <NavLink className={styles.link} style={({isActive})=>({color: isActive ? 'white' : '#611A8B'})} to="/">Home</NavLink>
          <NavLink className={styles.link} style={({isActive})=>({color: isActive ? 'white' : '#611A8B'})} to="/about">About</NavLink>
          <NavLink className={styles.link} style={({isActive})=>({color: isActive ? 'white' : '#611A8B'})} to="/posts">Posts</NavLink>
          <NavLink className={styles.link} style={({isActive})=>({color: isActive ? 'white' : '#611A8B'})} to="/blog">Blog</NavLink>
          <NavLink className={styles.link} style={({isActive})=>({color: isActive ? 'white' : '#611A8B'})} to="/new">New</NavLink>
          <NavLink className={styles.link} style={({isActive})=>({color: isActive ? 'white' : '#611A8B'})} to="/game">Game</NavLink>
      </div>
      <div className="blockGoBack">
        <button onClick={goBack} className='goBack'>Go back...</button>
      </div>
    </>
    
  )
}

export {Navigation}
