import React from 'react'
import { useContext } from 'react'
import { GameContext } from './context/Context'
import ApiCall from './ApiCall'
import CountdownTimer from './CountdownTimer'

function PlayingInterface() {
    const context = useContext(GameContext)
return (
    <div class="bg-cyan-600 w-screen h-screen overflowy-scroll">
        <CountdownTimer duration={context.duration} />
        <ApiCall difficulty={context.difficulty} num={context.num}/>
    </div>
)
}

export default PlayingInterface