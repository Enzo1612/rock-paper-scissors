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
    gameScore.textContent = "Player win: " + playerScore + " Computer win: " + computerScore;
}
//create 3 buttons for each choices//

//rock//
let rock = document.createElement('button')
rock.textContent = 'rock'
rock.classList.add('rock', 'choiceButton');
document.body.appendChild(rock);
//paper//
let paper = document.createElement('button')
paper.textContent = 'paper'
paper.classList.add('paper', 'choiceButton');
document.body.appendChild(paper);
//scissors//
let scissors = document.createElement('button')
scissors.textContent = 'scissors'
scissors.classList.add('scissors', 'choiceButton');
document.body.appendChild(scissors);
//addEventListener to buttons//
const choiceButtons = document.querySelectorAll('.choiceButton');
choiceButtons.forEach(button => button.addEventListener('click', () => {

    playerChoice = button.textContent;
    rockPaperScissors();
    playRound();

}))
//create a div element to display results//
let div = document.createElement('div');
div.classList.add('div');
div.textContent = 'ROCK PAPER SCISSORS'
document.body.appendChild(div);
//create a p element to display result of the round in div//
let roundResult = document.createElement('p');
roundResult.textContent = "";
div.appendChild(roundResult);
//create a p element to display the word 'score'//
let scoreP = document.createElement('p');
scoreP.textContent = "Score:";
div.appendChild(scoreP);
//create a p element to display the score//
let gameScore = document.createElement('p');
gameScore.textContent = "";
div.appendChild(gameScore);
//Single round of rock paper scissors//
    function rockPaperScissors() {
        let computerChoice = getComputerChoice();
        if (playerChoice ==  computerChoice){
            roundResult.textContent = `It's a tie, you both picked ${computerChoice}`;
        }
        else if (computerChoice == "rock" && playerChoice == "scissors"){
            ++computerScore;
            roundResult.textContent = "Computer win... He picked rock and you picked scissors..."
        }
        else if (computerChoice == "scissors" && playerChoice == "rock"){
            ++playerScore;
            roundResult.textContent = "You win! You picked scissors and he picked rock..."
        }
        else if (computerChoice == "rock" && playerChoice == "paper"){
            ++playerScore;
            roundResult.textContent = "You win! You picked paper and he picked rock..."
        }
        else if (computerChoice == "scissors" && playerChoice == "paper"){
            ++computerScore;
            roundResult.textContent = "Computer win... He picked scissors and you picked paper..."
        }
        else if (computerChoice == "paper" && playerChoice == "scissors"){
            ++playerScore
            roundResult.textContent = "You win! You picked scissors and he picked paper..."
        }
        else if (computerChoice == "paper" && playerChoice == "rock"){
            ++computerScore
            roundResult.textContent = "Computer win... He picked paper and you picked rock..."
        }
        else {
            roundResult.textContent = "Unknown variable entered... Try again!";
        }
    }
        //Loop repeating 5 times in order to play 5 round of rock paper scissors//
        function playRound(){
                if (computerScore !== 3 && playerScore !==3) {
                    rockPaperScissors(),`
                    `,score();
                }
                if (playerScore == 3) {
                    gameScore.textContent = "Well played, you won!!!";
                    playerScore = 0
                    computerScore = 0
                }
                else if (computerScore == 3) {
                    gameScore.textContent = "You lost... Try again...";
                    computerScore = 0
                    playerScore = 0
                }
            }

    ////playRound()
