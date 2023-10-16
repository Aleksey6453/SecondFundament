import React from 'react'
import styles from './NewProject.module.css'

const symbolX = 'X'
const symbolO = 'O'

const Game = () => {
   
    const [cells, setCells] = React.useState([null, null, null, null, null, null, null, null, null])
    const [currentStep, setCurrentStep] = React.useState(symbolX)
    // const currentStep = symbolX;
    const getSymbolClassName = (symbol) => {
        if(symbol === symbolX) return 'symbolX'
        if(symbol === symbolO) return 'symbolO'
        return ''
    }
    const renderSymbol = (symbol) => <span className={`symbol ${getSymbolClassName(symbol)}`}> {symbol} </span>
    const handleCellClick = (index) => {
        console.log(index+1)
        if(cells[index]){
            return
        }
        const cellsCopy = cells.slice()
        cellsCopy[index] = currentStep;
        setCells(cellsCopy)
        setCurrentStep(currentStep === symbolX ? symbolO : symbolX)
    }
    

  return (
    <div className='game'>
        <div className='gameInfo'>
            <h1>Step '{renderSymbol(currentStep)}' </h1>
        </div>
        <div className={styles.gameField}>
            {cells.map((symbol, index) => {
                return(
                    <button key={index} onClick={()=>handleCellClick(index)} className='cell cellWin'>
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