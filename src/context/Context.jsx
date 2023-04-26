import React, { useState } from 'react';
import { createContext } from 'react';

export const GameContext = createContext();

const  GameContextProvider = ({children}) => {

    const [difficulty, setDifficulty] = useState()
    const [num, setNum] = useState()
    const [points, setPoints] = useState(0)
    const [countanswered, setCountanswered] = useState(0)
    const [status, setStatus] = useState(false)


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
        setStatus(false)
    }

    const checkGame= (count)=>{
        if (points > (num/1.5)) {
            // console.log('ganaste pa')
            // alert('ganaste pa')
            setStatus(true)
        }else{
            // setStatus(false)
            console.log('contesta')
        }
    }

    return(
        <GameContext.Provider value={{difficulty, num, addItem, addPoint, points, resetPoints, countanswered, countAnswer, resetCountAnswer, checkGame, status}}>
            {children}
        </GameContext.Provider>
    )
}
export default GameContextProvider;
