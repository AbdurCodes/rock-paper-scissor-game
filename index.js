let roundResultHtml = document.querySelector(".roundResult");
let scores = document.querySelector('.scores');

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
            return "\nYour choice: Paper\nComputer's choice: Rock\nYou Win! Paper beats Rock";
        } else if (computerSelection === 'Scissor'){
            computerScore += 1;
            return "\nYour choice: Paper\nComputer's choice: Scissor\nYou Lose! Scissor cuts Paper";
        } else {
            return "\nYour choice: Paper\nComputer's choice: Paper\nIt's a tie";
        }
    }
    else if (playerSelection === 'scissor'){
        if(computerSelection === 'Rock'){
            computerScore += 1;
            return "\nYour choice: Scissor\nComputer's choice: Rock\nYou Lose! Rock beats Scissors";
        } else if (computerSelection === 'Paper'){
            userScore += 1;
            return "\nYour choice: Scissor\nComputer's choice: Paper\nYou Win! Scissor cuts Paper";
        } else {
            return "\nYour choice: Scissor\nComputer's choice: Scissor\nIt's a tie";
        }
    }
    else if (playerSelection === 'rock'){
        if(computerSelection === 'Scissor'){
            userScore += 1;
            return "\nYour choice: Rock\nComputer's choice: Scissor\nYou Win! Rock beats Scissors";
        } else if (computerSelection === 'Paper'){
            computerScore += 1;
            return "\nYour choice: Rock\nComputer's choice: Paper\nYou Lose! Paper beats Rock";
        } else {
            return "\nYour choice: Rock\nComputer's choice: Rock\nIt's a tie";
        }
    }
}

let rockBtn = document.querySelector('.rock');
let paperBtn = document.querySelector('.paper');
let scissorBtn = document.querySelector('.scissor');
let chooseOptionText = document.querySelector('.rps-options-buttons');
let replayBtn = document.querySelector('.replayBtn');
let h2 = document.querySelector('h2');


let counter = 1;

let callback = (e)=>{
    let computerChoice = getComputerChoice();
    let target = e.target;
    let userChoice = target.value;
    let roundResult = playRound(computerChoice, userChoice);

    let round = document.createElement('div');

    round.innerText = (counter>1) ? `\nRound ${counter++}: ${roundResult}` : `Round ${counter++}: ${roundResult}`;
    roundResultHtml.appendChild(round);

    if (counter>5){
        chooseOptionText.innerText = "Game over!";
        removeEventListener('click', callback);
        h2.style.display = 'none';
        replayBtn.style.display = 'inline';
        chooseOptionText.appendChild(replayBtn);
        replayBtn.addEventListener('click', ()=>{
            location.reload();
        });
        
        let computerScoreHtml = document.createElement('div');
        let userScoreHtml = document.createElement('div');
        computerScoreHtml.textContent = `Computer score: ${computerScore}`;
        userScoreHtml.textContent = `Your score: ${userScore}`;
        scores.appendChild(computerScoreHtml);
        scores.appendChild(userScoreHtml);

        let finalResult = document.createElement('div');
        finalResult.textContent = '';
        if (userScore > computerScore) {
            finalResult.textContent = "You Won!";
        }else if (computerScore > userScore) {
            finalResult.textContent = "You Lost!";
        } else {
            finalResult.textContent = "The match is a tie!";
        }
        scores.appendChild(finalResult);
    }
}

rockBtn.addEventListener('click', callback);
paperBtn.addEventListener('click', callback);
scissorBtn.addEventListener('click', callback);

// rockBtn.removeEventListener('click', callback);
// paperBtn.removeEventListener('click', callback);
// scissorBtn.removeEventListener('click', callback);