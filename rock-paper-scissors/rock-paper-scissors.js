//Declarations for Changing Text
const results = document.querySelector('#results');
const roundContainer = document.querySelector('#roundContainer');
const playerContainer = document.querySelector('#playerContainer');
const computerContainer = document.querySelector('#computerContainer');

//Basic Variables
let computerScore = 0;
let playerScore = 0;
let round = 0;

//Grabs Computer's Decision
function getComputerChoice(){
    result = Math.floor(Math.random()*3);
    if (result == 0){
        computerChoice = "ROCK";
    }
    else if (result == 1){
        computerChoice = "PAPER";
    }
    else {
        computerChoice = "SCISSORS";
    }
    return computerChoice
}

 //Compares Player's & Computer's Decision, Then Outputs Message & Score
function playRound(playerSelection){

    let computerSelection = getComputerChoice();
    
    if (playerSelection == computerSelection){
        results.textContent = "You Tie!";
        result = 2;
    }
    else if (playerSelection == "ROCK" && computerSelection == "PAPER"){
        results.textContent = "You Lose.";
        result = 0;
    }
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        results.textContent = "You Win!";
        result = 1;
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
        results.textContent = "You Win!";
        result = 1;
    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        results.textContent = "You Lose.";
        result = 0;
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        results.textContent = "You Lose.";
        result = 0;
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        results.textContent = "You Win!";
        result = 1;
    }
    return result
}

//Play A Round, Spit Out Results
function playGame(){
    roundContainer.textContent = "Round:".concat(round);

    playerContainer.textContent = "Player Total Points:".concat(" ",playerScore);

    computerContainer.textContent = "Computer Total Points:".concat(" ",computerScore);

    if(playerScore==5){
        roundContainer.textContent = "You Win The Match!";
        results.textContent = "";

    }
    else if(computerScore==5){
        roundContainer.textContent = "You Lose, Better Luck Next Time!";
        results.textContent = "";
    }
}

//Start Program on Button Clicks
const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        round++;
        let score = playRound(button.id);
        if (score==0){
            computerScore++;
        }
        else if (score==1){
            playerScore++;
        }
        playGame();
    });
});