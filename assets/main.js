const flipButton = document.querySelector("#flip-coin")
const flipImage = document.querySelector("#coin-image")
const compChoice = document.querySelector("#computer-guess")

const totalPlays = document.querySelector("#total-plays")
const userWins = document.querySelector("#user-wins")
const compWins = document.querySelector("#computer-wins")

const finalOutput = document.querySelector("#final-result")
const resetButton = document.querySelector("#reset")

let userChoice

let numOfTries = 0;
let flipResult
let compGuessResult

let doCoinFlip = () => {
    if(Math.floor(Math.random() * 100)%2 == 0){
        flipResult = 0
        flipImage.setAttribute("src","./assets/images/heads-coinflip.gif");
    }
    else{
        flipResult = 1
        flipImage.setAttribute("src","./assets/images/coins-tails.gif");
    }
}

let doComputerGuess = () => {
    if(Math.floor(Math.random() * 100)%2 == 0){
        compGuessResult = 0
        compChoice.textContent("Heads")
    }
    else{
        compGuessResult = 1
        compChoice.textContent("Tails")
    }
}

while(numOfTries<5){
    flipButton.addEventListener('click', () => {
        let userChoice = document.querySelector('input[name="guess"]:checked').value;
        doCoinFlip();
        doComputerGuess();
        totalPlays.textContent = (parseInt(totalPlays.textContent) + 1).toString()
        if(userChoice == compGuessResult){
            userWins.textContent = (parseInt(userWins.textContent) + 1).toString()
        }
        if(compGuessResult == compGuessResult){
            compWins.textContent = (parseInt(compWins.textContent) + 1).toString()
        }
        numOfTries++
      })
    
}
if ((parseInt(userWins.textContent)) > (parseInt(compWins.textContent))){
    finalOutput.textContent("Game Over. You Win!");
}
else if((parseInt(userWins.textContent)) < (parseInt(compWins.textContent))){
    finalOutput.textContent("Game Over. Computer Wins!");
}
else {
    finalOutput.textContent("Tie");
}

resetButton.addEventListener("click",() => numOfTries =0)


