import React from 'react'
import styles from './NewProject.module.css'

const Game = () => {
  return (
    <div className='game'>
        <div className='gameInfo'>
            <h1>Game</h1>
        </div>
        <div className={styles.gameField}>
            <button className={styles.btn}>1</button>
            <button className={styles.btn}>2</button>
            <button className={styles.btn}>3</button>
            <button className={styles.btn}>4</button>
            <button className={styles.btn}>5</button>
            <button className={styles.btn}>6</button>
            <button className={styles.btn}>7</button>
            <button className={styles.btn}>8</button>
            <button className={styles.btn}>9</button>

        </div>
      
    </div>
  )
}

export { Game }