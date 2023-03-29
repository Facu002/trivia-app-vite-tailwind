import React from 'react'

function ApiCall() {
fetch('https://the-trivia-api.com/api/questions?limit=5')
    .then(response => response.json())
    .then(data => console.log(data));

}

export default ApiCall