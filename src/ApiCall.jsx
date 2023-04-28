import React, { useEffect, useState } from 'react'
import Questions from './Questions';
import GameResult from './GameResult';
import { useContext } from 'react';
import {GameContext} from './context/Context';

import {Link} from 'react-router-dom'

function ApiCall(props) {
const context = useContext(GameContext)

const [loading, setLoading] = useState(true);

const [data, setData] = useState([]);



useEffect(() => {
        setLoading(true)
        fetch(`https://opentdb.com/api.php?amount=${props.num}&difficulty=${props.difficulty}`)
        .then(response => response.json())
        .then(data => setData(data.results))
        .catch(error => console.error(error));

        console.log(data.correct_answer)

        setLoading(false)

}, []);



return (
        <div class="bg-cyan-800">
        {/* <div class="flex flex-col w-3/6 m-auto justify-center content-center items-center bg-slate-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"> */}
        {
        
        loading ? 'loading game...'
        : (
        <div class="flex justify-center items-center h-screen">
        {/* <h1 class="text-center font-bold text-xl">Preguntas</h1> */}
        {/* max-h-500 overflow-y-auto max-w-1/2 */}
        <div class="question-container">
                {data && data.map(items =>(
                <div ket={items} class="question-card">
                        <p class="min-w-fit p-3 mx-1 text-center ">{items.question}</p>
                        <Questions correct={items.correct_answer} incorrect={items.incorrect_answers}/>
                </div>
                ))}
        </div>
        <button class="points">{context.points}</button>
        {
        context.countanswered == context.num ?
        <Link to="/results" class="check-points" onClick={()=>{context.checkGame(context.countanswered)}}>SEE RESULTS</Link>
        : console.log('contesta')
        }
        
        {context.status && <GameResult/>}
        
        </div>
        )
        }
        
        </div>
)
}
export default ApiCall
