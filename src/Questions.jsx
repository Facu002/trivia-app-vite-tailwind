import {React, useState} from 'react'
import { useContext } from 'react';
import {GameContext} from './context/Context';

function Questions(props) {
    const context = useContext(GameContext)
    
    let incorrect = props.incorrect
    let correct = props.correct
    
    const combinedQuestions = [correct, ...incorrect];
    
        let shuffledQuestions = combinedQuestions
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

    
    function check(value) {
        if  (correct === value) {
            console.log('correcto')
            context.addPoint(1)
        }else{
            console.log('incorrecto')
        }
    }

    

    return (
    <div class="bg-cyan-600 rounded rounded-t-none">
        <ul class="text-center">
            {
                    
            shuffledQuestions.map(items =>(
            <button onClick={()=>check(items)} class="px-3 py-1 m-2 bg-cyan-950 text-blue-400 rounded" key={items}>
                {items}
            </button>
            ))
                
            }

        </ul>
    </div>
    )
}

export default Questions