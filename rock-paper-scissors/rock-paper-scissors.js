//Declarations for Changing Text
const playerContainer = document.querySelector('#playerContainer');
const computerContainer = document.querySelector('#computerContainer');
const results = document.querySelector('#results');

//Basic Variables
let computerScore = 0;
let playerScore = 0;
let round = 0;

//Grabs Computer's Decision
function getComputerChoice(){
    result = Math.floor(Math.random()*3);
    if (result == 0){
        computerChoice = "Rock";
    }
    else if (result == 1){
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
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
    else if (playerSelection == "Rock" && computerSelection == "Paper"){
        results.textContent = "You Lose.";
        result = 0;
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors"){
        results.textContent = "You Win!";
        result = 1;
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock"){
        results.textContent = "You Win!";
        result = 1;
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        results.textContent = "You Lose.";
        result = 0;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        results.textContent = "You Lose.";
        result = 0;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        results.textContent = "You Win!";
        result = 1;
    }
    return result
}

//Play A Round, Spit Out Results
function playGame(){
    playerContainer.textContent = "Player: ".concat(playerScore);
    computerContainer.textContent = "Computer: ".concat(computerScore);

    if(playerScore==5){
        results.textContent = "You Win The Match!";
    }
    else if(computerScore==5){
        results.textContent = "You Lose, Better Luck Next Time!";
    }
}

//Start Program on Button Clicks
const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(playerScore == 5||computerScore == 5){
            return;
        }
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