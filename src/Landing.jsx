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
        context.resetPoints(0)
        context.resetCountAnswer()
        console.log(diff,num);
    }

    return (
    <div class="flex flex-col items-center justify-center h-screen bg-cyan-900">
        <h1 class="text-3xl font-bold mb-8 text-white">QUIZ GAME</h1>

        <div class="flex flex-col items-center mb-8 border border-white bg-white bg-opacity-90 h-auto p-10 rounded-lg">

            <Link to="/game" onClick={onAdd(Questions,Difficulty)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8">
                START
            </Link>

            <div class="mb-8">
            <label class="mr-2 text-gray-900 font-semibold">Select a difficulty:</label>
            <select class="border-blue-600 border px-2 py-1 rounded-lg">
                <option class=" " onClick={handleDifficultyChange} value="easy">Easy</option>
                <option class="" onClick={handleDifficultyChange} value="medium">Medium</option>
                <option class="" onClick={handleDifficultyChange} value="hard">Hard</option>
            </select>
            </div>

            <div class="flex items-center space-x-4">
                <div class="flex items-center border-purple p-3 rounded border border-solid" >
                    <label class="mr-2 text-gray-900 font-semibold">Number of Questions:</label>
                    <input id="myRange" onChange={handleQuestionsChange} type="range" class="border border-gray-400 rounded" min="4" max="20" step="2" value={Questions}/>
                    <div class=" py-1 px-2 mx-1 min-w-2">
                        <span class=" text-gray-900 mx-auto my-0 font-bold text-xl" >{Questions}</span>
                    </div>
                </div>
            </div>

        </div>

        <div class="bg-white w-96 p-8 rounded-lg">
        The game involves correctly answering more than half of the selected questions within a given time based on the chosen difficulty. Higher difficulty means less time, while lower difficulty grants more time. The objective is to answer most of the questions correctly within the allocated time. Choose the difficulty, read, and quickly respond to the questions to achieve a high score. Have fun challenging yourself! &#x1F60A;
        </div>
    </div>


    )
}

export default Landing