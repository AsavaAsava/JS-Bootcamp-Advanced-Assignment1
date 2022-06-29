const flipButton = document.querySelector("#flip-coin")
const flipImage = document.querySelector("#coin-image")
const compChoice = document.querySelector("#computer-guess")
const flip = document.querySelector("#resltOut")
const uselect = document.querySelector("#uChoice")

const totalPlays = document.querySelector("#total-plays")
const userWins = document.querySelector("#user-wins")
const compWins = document.querySelector("#computer-wins")

const finalOutput = document.querySelector("#final-result")
const resetButton = document.querySelector("#resetBtn")

let userChoice = document.querySelector('input[name="guess"]:checked').value;

let numOfTries = 0;
let flipResult
let compGuessResult

let doCoinFlip = () => {
    if(Math.floor(Math.random() * 100)%2 == 0){
        flip.textContent = "Heads"
        flipResult = 0
        flipImage.setAttribute("src","./assets/images/heads-coinflip.gif");
    }
    else{
        flip.textContent = "Tails"
        flipResult = 1
        flipImage.setAttribute("src","./assets/images/coins-tails.gif");
    }
}

let doComputerGuess = () => {
    if(Math.floor(Math.random() * 100)%2 == 0){
        compGuessResult = 0
        compChoice.textContent ="Heads"
    }
    else{
        compGuessResult = 1
        compChoice.textContent= "Tails"
    }
}

    resetButton.addEventListener("click",() => {
        numOfTries = 0
        flipImage.setAttribute("src","./assets/images/aqua-color-solid-background-1920x1080.png");
        compWins.textContent = "0"
        userWins.textContent = "0"
        totalPlays.textContent = "0"
        finalOutput.textContent= "Choose your Guess and Flip Coin"
    })

    flipButton.addEventListener('click', () => {
        
        if(numOfTries<5){
        
        doCoinFlip();
        doComputerGuess();
        totalPlays.textContent = (parseInt(totalPlays.textContent) + 1).toString()
        if(userChoice == compGuessResult && userChoice == flipResult){
            finalOutput.textContent= "Tied!"
            userWins.textContent = (parseInt(userWins.textContent) + 1).toString()
            compWins.textContent = (parseInt(compWins.textContent) + 1).toString()
            setTimeout(() => {finalOutput.textContent = "Game "+ totalPlays.textContent+". Play again" },3000)
        }
        else if(userChoice == flipResult){
            finalOutput.textContent= "User Wins!"
            userWins.textContent = (parseInt(userWins.textContent) + 1).toString()
            setTimeout(() => {finalOutput.textContent = "Game "+ totalPlays.textContent+". Play again" },3000)
        }
        else if(compGuessResult == flipResult){
            finalOutput.textContent= "Computer Wins!"
            compWins.textContent = (parseInt(compWins.textContent) + 1).toString()
            setTimeout(() => {finalOutput.textContent = "Game "+ totalPlays.textContent+". Play again" },3000)
        }
        numOfTries+=1
    }

    if(numOfTries == 5){
        if ((parseInt(userWins.textContent)) > (parseInt(compWins.textContent))){
            finalOutput.textContent= "Game Over. You Win!"
        }
        else if((parseInt(userWins.textContent)) < (parseInt(compWins.textContent))){
            finalOutput.textContent= "Game Over. Computer Wins!"
        }
        else {
            finalOutput.textContent = "Game Over. Tie"
        }
        }
        
      })

