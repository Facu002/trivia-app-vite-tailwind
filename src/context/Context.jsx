import React, { useState } from 'react';
import { createContext } from 'react';

export const GameContext = createContext();

const  GameContextProvider = ({children}) => {

    const [difficulty, setDifficulty] = useState()
    const [num, setNum] = useState()
    const [points, setPoints] = useState(0)
    const [countanswered, setCountanswered] = useState(0)
    const [status, setStatus] = useState(false)
    const [RunOutTime, setRunOutTime] = useState(false)
    const [duration, setDuration] = useState()

    const addItem= (diff, num)=>{
        setNum(num)
        setDifficulty(diff)
        if (diff === "easy") {
            setDuration(50)
        }
        if (diff === "medium") {
            setDuration(45)
        }
        if (diff === "hard") {
            setDuration(35)
        }
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

    const OutOfTime=()=>{
        setRunOutTime(true)
    }

    const checkGame= (count)=>{
        if (points > (num/1.5) && RunOutTime == false) {
            // console.log('ganaste pa')
            // alert('ganaste pa')
            setStatus(true)
        }else{
            // setStatus(false)
            console.log('contesta')
        }
    }

    return(
        <GameContext.Provider value={{difficulty, num, addItem, addPoint, points, resetPoints, countanswered, countAnswer, resetCountAnswer, checkGame, status, RunOutTime, OutOfTime, duration}}>
            {children}
        </GameContext.Provider>
    )
}
export default GameContextProvider;
