//Set the choices of the game//
let choices = ["rock", "paper", "scissors"]
//Get a random int for the getComputerChoice function// 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
//Get a random choice for the computer//
function getComputerChoice() {
    let x = getRandomInt(3);
    return choices[x];
}
//Create a score//
let playerScore = 0
let computerScore = 0
function score () {
    return "Player win: " + playerScore + " Computer win: " + computerScore;
}
//Single round of rock paper scissors//
function rockPaperScissors () {
    let playerChoice = prompt("Enter 0 for Rock, 1 for Paper or 2 for Scissors: ")
    playerChoice = choices[playerChoice];
    let computerChoice = getComputerChoice();
    if (playerChoice ==  computerChoice){
        return "It's a tie, you both picked " + computerChoice;
    }
    else if (computerChoice == "rock" && playerChoice == "scissors"){
        ++computerScore;
        return "Computer win... He picked rock and you picked scissors..."
    }
    else if (computerChoice == "scissors" && playerChoice == "rock"){
        ++playerScore;
        return "You win! You picked scissors and he picked rock..."
    }
    else if (computerChoice == "rock" && playerChoice == "paper"){
        ++playerScore;
        return "You win! You picked paper and he picked rock..."
    }
    else if (computerChoice == "scissors" && playerChoice == "paper"){
        ++computerScore;
        return "Computer win... He picked scissors and you picked paper..."
    }
    else if (computerChoice == "paper" && playerChoice == "scissors"){
        ++playerScore
        return "You win! You picked scissors and he picked paper..."
    }
    else if (computerChoice == "paper" && playerChoice == "rock"){
        ++computerScore
        return "Computer win... He picked paper and you picked rock..."
    }
    else {
        console.log("Unknown variable entered... Try again!");
    }
}
//Loop repeating 5 times in order to play 5 round of rock paper scissors//
for (let i = 0; i < 6; i++){
    if (computerScore !== 3 && playerScore !==3) {
        console.log(rockPaperScissors(),`
        `,score());
    }
    else if (playerScore == 3) {
        console.log("Well played, you won!!!");
    }
    else if (computerScore == 3) {
        console.log("You lost... Try again...");
    }
    if (computerScore == playerScore) {
        i--;
    }
}
