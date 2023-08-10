function getComputerChoice(){
    //Grabs Computer's Decision
    result = Math.floor(Math.random()*3)+1;
    if (result == 1){
        computerChoice = "ROCK";
    }
    else if (result == 2){
        computerChoice = "PAPER";
    }
    else {
        computerChoice = "SCISSORS";
    }
    return computerChoice
}

function playRound(playerSelection, score){
    const results = document.querySelector('#results');

    totalScore = score

    //Compares Player's & Computer's Decision, Then Outputs Message & Score
    let computerSelection = getComputerChoice();
    
    if (playerSelection == computerSelection){
        results.textContent = "You Tie!"
        score = totalScore + 0;
    }
    else if (playerSelection == "ROCK" && computerSelection == "PAPER"){
        results.textContent = "You Lose."
        score = totalScore + 0;
    }
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        results.textContent = "You Win!"
        score = totalScore + 1;
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
        results.textContent = "You Win!"
        score = totalScore + 1;
    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        results.textContent = "You Lose."
        score = totalScore + 0;
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        results.textContent = "You Lose."
        score = totalScore + 0;
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        results.textContent = "You Win!"
        score = totalScore + 1;
    }
    return score
}

//Main Function
let score = 0
let round = 0

const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        score = playRound(button.id, score);
        round = round + 1
        const roundContainer = document.querySelector('#roundContainer');
        roundContainer.textContent = "Round:".concat(round);
        const playerContainer = document.querySelector('#playerContainer');
        playerContainer.textContent = "Player Total Points:".concat(" ",score);
        const computerContainer = document.querySelector('#computerContainer');
        computerContainer.textContent = "Player Total Points:".concat(" ",round - score);
    });
});

