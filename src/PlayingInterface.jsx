import React from 'react'
import { useContext } from 'react'
import { GameContext } from './context/Context'
import ApiCall from './ApiCall'


function PlayingInterface() {
    const context = useContext(GameContext)
return (
    <div>
        PlayingInterface
        <span>{context.difficulty}</span>
        <span>{context.num}</span>
        <ApiCall difficulty={context.difficulty} num={context.num}/>
    </div>
)
}

export default PlayingInterface