
function getComputerChoice(){
    result = Math.floor(Math.random()*3)+1;
    if (result == 1){
        computerChoice = "ROCK";
        console.log("ROCK");
    }
    else if (result == 2){
        computerChoice = "PAPER";
        console.log("PAPER");
    }
    else {
        computerChoice = "SCISSORS";
        console.log("SCISSORS");
    }
    return computerChoice
}

function playRound(playerSelection, computerSelection){

    if (playerSelection.toUpperCase() == computerSelection){
        let message = "You Tie!"
        return message
    }
    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "PAPER"){
        let message = "You Lose!"
        return message
    }
    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "SCISSORS"){
        let message = "You Win!"
        return message
    }
    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "ROCK"){
        let message = "You Win!"
        return message
    }
    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "SCISSORS"){
        let message = "You Lose!"
        return message
    }
    else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "ROCK"){
        let message = "You Lose!"
        return message
    }
    else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "PAPER"){
        let message = "You Win!"
        return message
    }
}

function game(){
    let score = 0
    for (let count = 1; count <= 5; count++){
        let playerChooses = prompt("Choose Rock, Paper, or Scissors");
        let computerChooses = getComputerChoice();
        if((playRound(playerChooses,computerChooses))=="You Win!"){
            console.log("You Win!");
            score = ++score;
        }
        else if ((playRound(playerChooses,computerChooses))=="You Tie!"){
            console.log("You Tie!");
            score = score + 0.5;
        }
        else{
            console.log("You Lose!");
        }
    }
    return score
}


finalScore = game();
console.log("Your Final Score Is " + finalScore + " Out Of 5 Rounds Won")

