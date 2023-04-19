import React, { useState } from 'react';
import { createContext } from 'react';

export const GameContext = createContext();

const  GameContextProvider = ({children}) => {

    const [difficulty, setDifficulty] = useState()
    const [num, setNum] = useState()
    const [points, setPoints] = useState(0)
    const [countanswered, setCountanswered] = useState(0)


    const addItem= (diff, num)=>{
        setNum(num)
        setDifficulty(diff)
    }

    const addPoint= (point)=>{
        setPoints(points + point)
        console.log(points)
    }

    const resetPoints= ()=>{
        setPoints(0)
    }

    const countAnswer= (num)=>{
        setCountanswered(countanswered + num)
    } 
    const resetCountAnswer= (num)=>{
        setCountanswered(0)
    }

    const checkGame= ()=>{
        if (countanswered = num) {
            console.log('ganaste pa')
        }else{
            console.log('perdiste pa')
        }
    }

    return(
        <GameContext.Provider value={{difficulty, num, addItem, addPoint, points, resetPoints, countanswered, countAnswer, resetCountAnswer, checkGame}}>
            {children}
        </GameContext.Provider>
    )
}
export default GameContextProvider;
