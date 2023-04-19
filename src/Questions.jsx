import {React, useState} from 'react'
import { useContext } from 'react';
import {GameContext} from './context/Context';

function Questions(props) {
    const context = useContext(GameContext)

    const [answered, setAnswered] = useState(false)
    
    let incorrect = props.incorrect
    let correct = props.correct
    
    const combinedQuestions = [correct, ...incorrect];
    
        let shuffledQuestions = combinedQuestions
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

    
    function check(value, e) {
        if  (correct === value) {
            console.log('correcto')
            context.addPoint(1)
            e.target.classList.replace("default-answer", "correct-answer")
            e.target.disabled = true
            setAnswered(true)
        }else{
            console.log('incorrecto')
            e.target.classList.replace("default-answer", "incorrect-answer")
            e.target.disabled = true
            setAnswered(true)
        }
        context.countAnswer(1)
    }

    

    return (
    <div class="answer-card">
        <ul class="text-center">
            {
                answered ?
                shuffledQuestions.map(items =>(
                
                    <button class="default-answer" key={items}>
                        {items}
                    </button>
        
                ))

                :
                shuffledQuestions.map(items =>(
                
                    <button onClick={(e)=>check(items, e)} class="default-answer" key={items}>
                        {items}
                    </button>
        
                ))
            }

        </ul>
    </div>
    )
}

export default Questions