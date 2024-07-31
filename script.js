let userScore = 0;
let computerScore = 0;
let choices = document.querySelectorAll('.choice');

// get computer choice
function getComputerChoice() {
    const computerChoices = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    return computerChoices[randomNumber];
}

// update score user wins
function userWins() {   
    userScore++;
    document.getElementById('yourScore').innerText = userScore;
    document.getElementById('resultText').innerText = "You Win!";
    document.getElementById('resultText').style.backgroundColor = "green";

}
// update score computer wins
function computerWins() {
    computerScore++;
    document.getElementById('computerScore').innerText = computerScore;
    document.getElementById('resultText').innerText = "Computer Win!";
    document.getElementById('resultText').style.backgroundColor = "Red";
}
// update no score draw
function drawGame() {
    document.getElementById('resultText').innerText = "It's a Draw!";
    document.getElementById('resultText').style.backgroundColor = "yellow";
    document.getElementById('resultText').style.color = "black";
}

// play game
function playGame(userChoice) {
    console.log("User Choice =",userChoice);
    // generate computer choice --.Modular way of programing 
    let computerChoice = getComputerChoice();
    console.log("Computer Choice =",computerChoice);
    // check winner
    if(userChoice === computerChoice) {
        drawGame();
    }
    else if(userChoice === 'rock' && computerChoice === 'scissor' || userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'scissor' && computerChoice === 'paper') {
        userWins();
    }
    else {
        computerWins();
    }


}
// event listener for user choice
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        let userChoice = choice.getAttribute('id');
        playGame(userChoice);

       
    });
});
