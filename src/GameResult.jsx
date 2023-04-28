import React from 'react'
import {Link} from 'react-router-dom'

import { useContext } from 'react';
import {GameContext} from './context/Context';

import winImg from './assets/win.png'
import lossImg from './assets/loss.png'

function GameResult() {
const context = useContext(GameContext)

    return (
        <div class="bg-cyan-900 w-screen h-screen flex justify-center items-center flex-col">
        <h1 class="text-white font-bold text-4xl mb-5">GAME OVER</h1>
        <Link to="/" class="buttons-style">RESTART GAME</Link>
        {/* <h2>{context.status}</h2>  */}
        {
            context.status ?
            <div class="results-container">
                <h1 class="font-bold text-4xl">YOU WIN</h1>
                <img src={winImg} alt="winImg" />
                <span class="text-2xl uppercase">POINTS: {context.points}/{context.num}</span>
            </div>
            : 
            <div class="results-container">
                <h1 class="font-bold text-4xl">YOU LOSE</h1>
                <img  src={lossImg} alt="winImg" />
                <span  class="text-2xl uppercase">POINTS: {context.points}/{context.num}</span>
            </div>
        }

        </div>
    )
}

export default GameResult