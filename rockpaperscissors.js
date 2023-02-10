const computerChoiceOutput = document.getElementById('computer-choice')
const playerChoiceOutput = document.getElementById('user-choice')
const resultOutput = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let playerChoice
let computerChoice
let result

possibleChoices.forEach(Choice => Choice.addEventListener('click', (e) => {
    playerChoice = e.target.id // function output, gets the id of the clicked button
    playerChoiceOutput.innerHTML = playerChoice
    generateComputerChoice ()
    getOutput()
}
))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) // Math.round not applicable
    
    if (randomNumber === 0) {
        computerChoice = '✊'
    }
    if (randomNumber === 1) {
        computerChoice = '✋'
    }
    if (randomNumber === 2) {
        computerChoice = '✌️'
    }
    computerChoiceOutput.innerHTML = computerChoice
}

function getOutput() {
    if (computerChoice === playerChoice) {
        result = 'Its a draw'
    }
    if (computerChoice === '✊' && playerChoice === "✋") {
        result = 'You win'
    }
    if (computerChoice === '✊' && playerChoice === "✌️") {
        result = 'Computer wins'
    }
    if (computerChoice === '✋' && playerChoice === "✌️") {
        result = 'You win'
    }
    if (computerChoice === '✋' && playerChoice === "✊") {
        result = 'Computer wins'
    }
    if (computerChoice === '✌️' && playerChoice === "✊") {
        result = 'You win'
    }
    if (computerChoice === '✌️' && playerChoice === "✋") {
        result = 'Computer wins'
    }
    resultOutput.innerHTML = result
}