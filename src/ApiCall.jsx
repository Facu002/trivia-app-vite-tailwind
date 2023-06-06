import React, { useEffect, useState } from 'react'
import Questions from './Questions';
import GameResult from './GameResult';
import CountdownTimer from './CountdownTimer'
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


        setLoading(false)

}, []);



return (
        <>
        {
        data.length >= 3 && <CountdownTimer duration={props.duration} />
        // && <CountdownTimer duration={context.duration} />
        }
        <div className="bg-cyan-800">
        {/* <div className="flex flex-col w-3/6 m-auto justify-center content-center items-center bg-slate-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"> */}
        {
        
        loading ? 'loading game...'
        : (
        <div className="flex justify-center items-center h-screen">
        {/* <h1 className="text-center font-bold text-xl">Preguntas</h1> */}
        {/* max-h-500 overflow-y-auto max-w-1/2 */}
        <div className="question-container">
                {data && data.map(items =>(
                <div key={items.correct_answer} className="question-card">
                        <p className="min-w-fit p-3 mx-1 text-center ">{items.question.replace(/&#39;/g, "'").replace(/&quot;/g, '"')}</p>
                        <Questions correct={items.correct_answer} incorrect={items.incorrect_answers}/>
                </div>
                ))}
        </div>
        <button className="points">{context.points}</button>
        {
        context.countanswered == context.num &&
        <Link to="/results" className="check-points" onClick={()=>{context.checkGame(context.countanswered)}}>SEE RESULTS</Link>
        }
        
        {context.status && <GameResult/>}
        
        
        </div>
        
        )
        }
        
        </div>
        </>
)
}
export default ApiCall
