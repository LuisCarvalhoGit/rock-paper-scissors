function getComputerChoice() {
    return (Math.random() * 100);
}

function getHumanChoice() {

    return prompt("Choose: ROCK | PAPER | SCISSORS").toLowerCase()
}

function playRound(computernum, humanchoice) {

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
            console.log(`Computer Wins! ${computerchoice} beats ${humanchoice} | Human: ${humanScore} points vs Computer: ${computerScore}`)
        }
    else if ((humanchoice === "rock" && computerchoice === "scissors") ||
             (humanchoice === "paper" && computerchoice === "rock") ||
             (humanchoice === "scissors" && computerchoice === "paper"))
             {
                humanScore++
                console.log(`Human Wins! ${humanchoice} beats ${computerchoice} | Human: ${humanScore} points vs Computer: ${computerScore}`)
             }
    else {
        console.log(`It's a Tie! | Human: ${humanScore} points vs Computer: ${computerScore}`)
    }

    
}

function playGame(numRounds) {

    // play till 5 points
    while(humanScore < numRounds && computerScore < numRounds) {

        playRound(getComputerChoice(), getHumanChoice())
    }

    if(humanScore > computerScore) {
        console.log("Human Wins!")
    } else {
        console.log("Computer Wins!")
    }
}

let computerScore = 0;
let humanScore = 0;

playGame(5);



