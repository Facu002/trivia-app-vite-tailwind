import React, { useEffect, useState } from 'react'

function ApiCall(props) {
        fetch(`https://the-trivia-api.com/api/questions?limit=${props.num}&difficulty=${props.difficulty}`)
        .then(response => response.json())
        .catch(error => console.error(error));
        
}
export default ApiCall