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
        }
        <div className=" bg-bg-blue">
        {
                loading ? 'loading game...'
                : (
                <div className="flex justify-center items-center h-screen">

                <div className="question-container">
                        {data && data.map(items =>(
                        <div key={items.correct_answer} className="question-card">
                                <p className="min-w-fit p-3 mx-1 text-center ">{items.question.replace(/&#39;/g, "'").replace(/&quot;/g, '"')}</p>
                                <Questions correct={items.correct_answer} incorrect={items.incorrect_answers}/>
                        </div>
                        ))}
                </div>

                <button className="points shadow-border">{context.points}</button>
                
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
