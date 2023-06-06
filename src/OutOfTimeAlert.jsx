import React from 'react'
import {Link} from 'react-router-dom'
import OutOfTime from './assets/OutOfTime.png'
function OutOfTimeAlert() {
    return (
        <div className="TimerIsUp-modal">
            <div className="TimerIsUp-text-container ">
                <div >
                <span className='text-2xl font-semibold w-fit mx-auto my-0 h-full'>Ran out of time!</span>
                <img className='w-96 mx-auto my-4' src={OutOfTime} alt="OutOfTime" />
                <Link className=' w-fit mx-auto my-4 buttons-style' to="/">Back to start</Link>
                </div>
            </div>
        </div>
    )
}

export default OutOfTimeAlert