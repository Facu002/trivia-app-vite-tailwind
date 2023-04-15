import React from 'react'
import { useContext } from 'react'
import { GameContext } from './context/Context'
import ApiCall from './ApiCall'


function PlayingInterface() {
    const context = useContext(GameContext)
return (
    <div class="bg-cyan-900 w-screen h-screen overflowy-scroll">
        <ApiCall difficulty={context.difficulty} num={context.num}/>
    </div>
)
}

export default PlayingInterface