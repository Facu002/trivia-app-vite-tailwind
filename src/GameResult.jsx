import React from 'react'
import {Link} from 'react-router-dom'

import { useContext } from 'react';
import {GameContext} from './context/Context';
function GameResult() {
const context = useContext(GameContext)

    return (
        <div class="bg-cyan-900 w-screen h-screen flex justify-center items-center flex-col">

        <Link to="/" class="buttons-style">Volver</Link>
        {/* <h2>{context.status}</h2>  */}
        {
            context.status ?
            <div class="bg-slate-50 w-1/4 text-center">
                <h1>GANASTE</h1>
                <span>puntos: {context.points}/{context.num}</span>
            </div>
            : 
            <div class="bg-slate-50 w-1/4 text-center">
                <h1>FRACASADO</h1>
                <span>puntos: {context.points}/{context.num}</span>
            </div>
        }

        </div>
    )
}

export default GameResult