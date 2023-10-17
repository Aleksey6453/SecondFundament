import React from 'react'
import styles from './NewProject.module.css'

const symbolX = 'X'
const symbolO = 'O'

const computeWinner = (cells) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++){
        const[a, b, c] = lines[i];
        if (
            cells[a] &&
            cells[a] === cells[b] &&
            cells[a] === cells[c]
        ) {
            return [a, b, c]
        }
    }
}

const Game = () => {
   
    const [cells, setCells] = React.useState([null, null, null, null, null, null, null, null, null])
    const [currentStep, setCurrentStep] = React.useState(symbolX)
    const [winnerCombi, setWinnerCombi] = React.useState()
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
        const winner = computeWinner(cellsCopy);
        
        setCells(cellsCopy)
        setCurrentStep(currentStep === symbolX ? symbolO : symbolX)
        setWinnerCombi(winner)
    }
    

  return (
    <div className='game'>
        <div className='gameInfo'>
            <h1>Step '{renderSymbol(currentStep)}' </h1>
        </div>
        <div className={styles.gameField}>
            {cells.map((symbol, index) => {
                const isWinner = winnerCombi?.includes(index)
                return(
                    <button key={index} 
                            onClick={()=>handleCellClick(index)} 
                            className={`cell ${isWinner ? `cellWin` : ''}`}
                            >
                                {symbol ? renderSymbol(symbol) : null} 
                    </button>
                )
            })}
        </div>
      
    </div>
  )
}

export { Game }