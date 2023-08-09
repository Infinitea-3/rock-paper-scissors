
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

function playRound(playerSelection, computerSelection){
    //Compares Player's and Computer's Decision, Then Outputs Message
    if (playerSelection == computerSelection){
        let message = "You Tie!"
        return message
    }
    else if (playerSelection == "ROCK" && computerSelection == "PAPER"){
        let message = "You Lose!"
        return message
    }
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        let message = "You Win!"
        return message
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
        let message = "You Win!"
        return message
    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        let message = "You Lose!"
        return message
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        let message = "You Lose!"
        return message
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        let message = "You Win!"
        return message
    }
}

function game(playerChoice,totalScore){
    //Runs 5 Rounds of Rock, Paper, Scissors
    let computerChooses = getComputerChoice();
    if((playRound(playerChoice,computerChooses))=="You Win!"){
        console.log("You Win!");
        score = totalScore + 1;
    }
    else if ((playRound(playerChoice,computerChooses))=="You Tie!"){
        console.log("You Tie!");
        score = totalScore + 0.5;
    }
    else{
        console.log("You Lose!");
    }
    return score
}

//Main Function
let score = 0

const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        score = game(button.id,score);
        console.log(score);
    });
});

const container = document.querySelector('#container');
const div = document.createElement('div');
div.classList.add('div');
div.textContent = "Total Points: " & score;

container.appendChild(div);