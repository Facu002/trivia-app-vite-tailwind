import {React, useState} from 'react'
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import {GameContext} from './context/Context';
function Landing() {
    
    const [Questions, setQuestions] = useState(4)
    const [Difficulty, setDifficulty] = useState("easy")

    const context = useContext(GameContext)

    function handleQuestionsChange(event) {
        const QuestionsValue = event.target.value;
        setQuestions(QuestionsValue);
    }
    function handleDifficultyChange(event) {
        const DifficultyValue = event.target.value;
        setDifficulty(DifficultyValue);
    }

    let onAdd = (num, diff) => {
        context.addItem(diff, num)
        console.log(diff,num);

    }

    return (
        <div class="flex flex-col items-center justify-center h-screen">
            <h1 class="text-3xl font-bold mb-8">TRIVIA RUN</h1>
        <div class="flex flex-col items-center mb-8">

        <Link to="/game" onClick={onAdd(Questions,Difficulty)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8">
            START
        </Link>

        <div class="mb-8">
        <label class="mr-2">Select a difficulty:</label>
        <select class="border border-gray-400 rounded">
            <option onClick={handleDifficultyChange} value="easy">Easy</option>
            <option onClick={handleDifficultyChange} value="medium">Medium</option>
            <option onClick={handleDifficultyChange} value="hard">Hard</option>
        </select>
        </div>

        <div class="flex items-center space-x-4">
            <div class="flex items-center border-purple  border-4 border-solid" >
                <label class="mr-2">Number of Questions:</label>
                <input id="myRange" onChange={handleQuestionsChange} type="range" class="border border-gray-400 rounded" min="4" max="20" step="2" value={Questions}/>
            </div>
            <div class="bg-slate-700 py-1 px-2 mx-1 min-w-2">
                <span class="bg-slate-700 text-white  mx-auto my-0" >{Questions}</span>
            </div>
        </div>
    </div>
</div>


    )
}

export default Landing