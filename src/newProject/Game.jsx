import React from 'react'
import styles from './NewProject.module.css'

const symbolX = 'X'
const symbolO = 'O'

const Game = () => {
    const cells = [symbolX, null, null, symbolO, null, null, symbolO, symbolX, null]
    const currentStep = symbolX;
    const getSymbolClassName = (symbol) => {
        if(symbol === symbolX) return 'symbolX'
        if(symbol === symbolO) return 'symbolO'
        return ''
    }
    const renderSymbol = (symbol) => <span className={`symbol ${getSymbolClassName(symbol)}`}> {symbol} </span>

  return (
    <div className='game'>
        <div className='gameInfo'>
            <h1>Step '{renderSymbol(currentStep)}' </h1>
        </div>
        <div className={styles.gameField}>
            {cells.map((symbol, index) => {
                return(
                    <button key={index} className='cell cellWin'>
                        {symbol ? renderSymbol(symbol) : null} 
                    </button>
                )
            })}
            {/* <button className='cell cellWin'><span>x</span></button>
            <button className='cell '>0</button>
            <button className='cell '></button>
            <button className='cell cellWin'>x</button>
            <button className='cell '></button>
            <button className='cell '>0</button>
            <button className='cell cellWin'>x</button>
            <button className='cell '></button>
            <button className='cell '></button> */}
          

        </div>
      
    </div>
  )
}

export { Game }