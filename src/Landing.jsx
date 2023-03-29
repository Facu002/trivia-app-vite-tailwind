import {React, useState} from 'react'

function Landing() {
    
    const [Questions, setQuestions] = useState(4)
    const [Difficulty, setDifficulty] = useState("Easy")

    function handleQuestionsChange(event) {
        const QuestionsValue = event.target.value;
        setQuestions(QuestionsValue);
    }
    function handleDifficultyChange(event) {
        const DifficultyValue = event.target.value;
        setDifficulty(DifficultyValue);
    }

    return (
        <div class="flex flex-col items-center justify-center h-screen">
            <h1 class="text-3xl font-bold mb-8">TRIVIA RUN</h1>
        <div class="flex flex-col items-center mb-8">

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8">
            START
        </button>

        <div class="mb-8">
        <label class="mr-2">Select a difficulty:</label>
        <select class="border border-gray-400 rounded">
            <option onClick={handleDifficultyChange} value="Easy">Easy</option>
            <option onClick={handleDifficultyChange} value="Medium">Medium</option>
            <option onClick={handleDifficultyChange} value="Hard">Hard</option>
        </select>
        </div>

        <div class="flex items-center space-x-4">
            <div class="flex items-center border-purple  border-4 border-solid" >
                <label class="mr-2">Number of Questions:</label>
                <input id="myRange" onChange={handleQuestionsChange} type="range" class="border border-gray-400 rounded" min="4" max="20" step="2" value={Questions}/>
            </div>
            <span class="bg-slate-700 text-white py-1 px-2 mx-1" >{Questions}</span>
        </div>
    </div>
</div>


    )
}

export default Landing