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
    const startPosition = Array(9).fill(null)
    // const [cells, setCells] = React.useState([null, null, null, null, null, null, null, null, null])
    const [cells, setCells] = React.useState(startPosition)
    const [currentStep, setCurrentStep] = React.useState(symbolX)
    const [winnerCombi, setWinnerCombi] = React.useState()
    // const currentStep = symbolX;
    const getSymbolClassName = (symbol) => {
        if(symbol === symbolX) return 'symbolX'
        if(symbol === symbolO) return 'symbolO'
        return ''
    }
    const renderSymbol = (symbol) => <span className={`symbol ${getSymbolClassName(symbol)}`}> {symbol} </span>

    const winnerSymbol = winnerCombi ? cells[winnerCombi[0]] : undefined;
    console.log(cells)
    const handleCellClick = (index) => {
        console.log(index+1)
        if(cells[index] || winnerCombi) {
            return
        }
        const cellsCopy = cells.slice()
        cellsCopy[index] = currentStep;
        const winner = computeWinner(cellsCopy);
        
        setCells(cellsCopy)
        setCurrentStep(currentStep === symbolX ? symbolO : symbolX)
        setWinnerCombi(winner)
    }
    const handleReebot = () => {
        setCells(startPosition)
    }
    

  return (
    <div className='game'>
        <div className='gameInfo'>
            <h1>{winnerCombi ? 'WINNER!' : 'Step'}'{renderSymbol(winnerSymbol ?? currentStep)}' </h1>
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
        <button onClick={handleReebot}>Reebot</button> 
    </div>
  )
}

export { Game }