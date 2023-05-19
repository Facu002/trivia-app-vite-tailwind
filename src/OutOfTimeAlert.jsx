import React from 'react'
import {Link} from 'react-router-dom'

function OutOfTimeAlert() {
    return (
        <div className="TimerIsUp-modal">
            <div className="TimerIsUp-text-container">
                <span className='bg-blue-400 w-fit mx-auto my-0'>Ran out of time</span>
                <Link className='bg-red-300 w-fit mx-auto my-0' to="/">Back to start</Link>
            </div>
        </div>
    )
}

export default OutOfTimeAlert