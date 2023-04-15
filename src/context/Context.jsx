import React, { useState } from 'react';
import { createContext } from 'react';

export const GameContext = createContext();

const  GameContextProvider = ({children}) => {

    const [difficulty, setDifficulty] = useState()
    const [num, setNum] = useState()
    const [points, setPoints] = useState(0)

    const addItem= (diff, num)=>{
        setNum(num)
        setDifficulty(diff)
    }

    const addPoint= (point)=>{
        setPoints(points + point)
        console.log(points)
    }

    return(
        <GameContext.Provider value={{difficulty, num, addItem, addPoint, points}}>
            {children}
        </GameContext.Provider>
    )
}
export default GameContextProvider;
