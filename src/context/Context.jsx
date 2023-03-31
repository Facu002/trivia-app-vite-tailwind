import React, { useState } from 'react';
import { createContext } from 'react';

export const GameContext = createContext();

const  GameContextProvider = ({children}) => {

    const [difficulty, setDifficulty] = useState()
    const [num, setNum] = useState()

    const addItem= (diff, num)=>{
        setNum(num)
        setDifficulty(diff)
    }

    
    return(
        <GameContext.Provider value={{difficulty, num, addItem}}>
            {children}
        </GameContext.Provider>
    )
}
export default GameContextProvider;
