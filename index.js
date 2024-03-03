
function getComputerChoice (){
    let computerChoices = [ 'Rock', 'Paper', 'Scissor'];
    let computerChoice = Math.floor(Math.random()*3);
    return computerChoices[computerChoice];
}

let computerScore = 0;
let userScore = 0;

function playRound(computerSelection, playerSelection ){
    
    if (playerSelection === 'paper'){
        if(computerSelection === 'Rock'){
            userScore += 1;
            return "You Win! Paper beats Rock";
        } else if (computerSelection === 'Scissor'){
            computerScore += 1;
            return "You Lose! Scissor cuts Paper.";
        } else {
            return "It's a tie";
        }
    }
    else if (playerSelection === 'scissor'){
        if(computerSelection === 'Rock'){
            computerScore += 1;
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection === 'Paper'){
            userScore += 1;
            return "You Win! Scissor cuts Paper.";
        } else {
            return "It's a tie";
        }
    }
    else if (playerSelection === 'rock'){
        if(computerSelection === 'Scissor'){
            userScore += 1;
            return "You Win! Rock beats Scissors";
        } else if (computerSelection === 'Paper'){
            computerScore += 1;
            return "You Lose! Paper beats Rock";
        } else {
            return "It's a tie";
        }
    }
    else{
        userScore -= 1;
        return "Allowed inputs: Rock, Paper, Scissor";
    }
}


function playGame(){
    for (let i=0; i<5; i++){
        let computerChoice = getComputerChoice();
        let userChoice = prompt("Plz choose one option: \n1. Rock\n2. Paper\n3. Scissor").toLowerCase();
        let roundResult = playRound(computerChoice, userChoice);
        console.log(`Round ${i+1}:`,roundResult);
    }
}

playGame();

console.log("Computer score: ", computerScore);
console.log("User Score: ", userScore);

if (userScore > computerScore) {
    alert("You are the winner");
}else if (computerScore > userScore) {
    alert("You are the loser");
} else {
    alert("The match is a tie");
}