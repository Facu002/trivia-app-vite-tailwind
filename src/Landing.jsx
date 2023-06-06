import {React, useState} from 'react'
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import {GameContext} from './context/Context';
import quizLogo from './assets/quiz-logo.png'
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
        // console.log(diff,num);
    }

    return (
    <div className="flex flex-col items-center justify-center bg-bg-blue h-screen mx-0 my-auto sm:m-24 ">
        {/* <h1 className="text-3xl font-bold mb-8 text-white">QUIZ GAME</h1> */}
        <img className='quiz-logo' src={quizLogo} alt="quiz-logo" />

        <div className="game-options-container">

            <Link to="/game" onClick={onAdd(Questions,Difficulty)} 
            className="bg-bright-red border-4 border-black text-white font-bold py-2 px-4 rounded-lg mb-8 shadow-md [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]">
                START
            </Link>

            <div className="mb-8 text-center border-4 rounded-lg border-black bg-page-yellow">
            <label className="mx-4 my-2 text-gray-900 font-semibold ">Select a difficulty:</label>
            <select className="mx-4 my-2 px-2 py-1 rounded-lg border-2 border-black">
                <option className="" onClick={handleDifficultyChange} value="easy">Easy</option>
                <option className="" onClick={handleDifficultyChange} value="medium">Medium</option>
                <option className="" onClick={handleDifficultyChange} value="hard">Hard</option>
            </select>
            </div>

            <div className="select-difficulty-container border-4 rounded-lg bg-sky-blue">
                <div className="diff-range-wrapper" >
                    <div className='text-center'>
                        <label className="mr-2 text-black font-semibold">Number of questions:</label>
                        <input id="myRange" onChange={handleQuestionsChange} type="range" className=" rounded" min="4" max="20" step="2" value={Questions}/>
                    </div>
                    <div className=" py-1 px-2 mx-1 min-w-2 ">
                        <span className=" text-gray-900 mx-auto my-0 font-bold text-xl" >{Questions}</span>
                    </div>
                </div>
            </div>

        </div>

        <div className="instruction-container">
        The game involves correctly answering more than half of the selected questions within a given time based on the chosen difficulty. Higher difficulty means less time, while lower difficulty grants more time. The objective is to answer most of the questions correctly within the allocated time. Choose the difficulty, read, and quickly respond to the questions to achieve a high score. Have fun challenging yourself! &#x1F60A;
        </div>
    </div>


    )
}

export default Landing