const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay= document.getElementById("playerScoreDisplay");
const computerScoreDisplay= document.getElementById("computerScoreDisplay");

let playerScore = 0
let computerScore = 0

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function playGame(playerChoice){
    // Randomly select a choice from the array for the computer's choice
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                // If the computer's choice is scissors you will win, otherwise you lose
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                // If the computer's choice is rock you will win, otherwise you lose
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                // If the computer's choice is paper you will win, otherwise you lose
                break;
        }   
    }
    //Displays the results of the game
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    //Removes the color class from the result display when a new game is played
    resultDisplay.classList.remove("greenText", "redText");
    //Adds a color class to the result display when you win or lose a game
    switch(result){
       case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            //Update player's score when you win
            playerScore++;
            playerScoreDisplay.textContent = playerScore
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            //Update the computer's score when you lose
            computerScore++;
            computerScoreDisplay.textContent = computerScore
            break;
    }
}