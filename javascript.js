function getComputerChoice() {
    return (Math.random() * 100);
}

function playRound(computernum, humanchoice, maxPoints) {

    let computerchoice;
    if(computernum < 33) {
        computerchoice = "rock"
    } else if(computernum < 66) {
        computerchoice = "paper"
    } else {
        computerchoice = "scissors"
    }

    // deciding who wins
    if ((computerchoice === "rock" && humanchoice === "scissors") ||
        (computerchoice === "paper" && humanchoice === "rock") ||
        (computerchoice === "scissors" && humanchoice === "paper")) 
        {
            computerScore++
            results.textContent = `Computer Wins! ${computerchoice} beats ${humanchoice} | Human: ${humanScore} points vs Computer: ${computerScore}`
        }
    else if ((humanchoice === "rock" && computerchoice === "scissors") ||
             (humanchoice === "paper" && computerchoice === "rock") ||
             (humanchoice === "scissors" && computerchoice === "paper"))
             {
                humanScore++
                results.textContent = `Human Wins! ${humanchoice} beats ${computerchoice} | Human: ${humanScore} points vs Computer: ${computerScore}`
             }
    else {
        results.textContent = `It's a Tie! | Human: ${humanScore} points vs Computer: ${computerScore}`
    }


    if(computerScore === maxPoints && computerScore > humanScore) {
        results.textContent = "Computer Wins!"
        return
    } else if (humanScore === maxPoints && humanScore > computerScore) {
        results.textContent = "Human Wins!"
        return
    }
    
}



let computerScore = 0;
let humanScore = 0;
let maxPoints = 5

let btnRock = document.getElementById("btnRock")
let btnPaper = document.getElementById("btnPaper")
let btnScissors = document.getElementById("btnScissors")
let results = document.getElementById("results")


btnRock.addEventListener("click", () => playRound(getComputerChoice(), "rock", maxPoints))
btnPaper.addEventListener("click", () => playRound(getComputerChoice(), "paper", maxPoints))
btnScissors.addEventListener("click", () => playRound(getComputerChoice(), "scissors", maxPoints))





