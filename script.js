let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors'
        default:
            return 'what the fuck';
    }
}

function play(playerSelection, computerSelection) {
    // It it returns 0, that means the player lost the round
    // If it returns -1, that means it's a tie
    // If it returns 1, that means the player won the round
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    document.querySelector('.playerChoice').textContent = `Player picked: ${playerSelection}`
    document.querySelector('.computerChoice').textContent = `Computer picked: ${computerSelection}`;
    const seperator = document.querySelector('.seperator');
    if (seperator.children.length === 0) seperator.append(document.createElement('hr'));
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 0;
        }
        else if (computerSelection === 'scissors') {
            return 1;
        }
        else {
            return -1;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            return -1;
        }
        else if (computerSelection === 'scissors') {
            return 0;
        }
        else {
            return 1;
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return 1;
        }
        else if (computerSelection === 'scissors') {
            return -1;
        }
        else {
            return 0;
        }
    }
}

const playBtns = document.querySelectorAll('.selectionBtn');

playBtns.forEach(function (btn) {
    btn.addEventListener('click', game);
});

function game() {
    if (computerScore >= 5 || playerScore >= 5) return;
    const roundInfo = document.querySelector('.roundInfo');
    const result = play(`${this.id}`, getComputerChoice());
    switch (result) {
        case -1:
            roundInfo.textContent = 'It\'s a tie!';
            roundInfo.style.backgroundColor = 'grey';
            break;
        case 0:
            roundInfo.textContent = 'You lost this round!';
            roundInfo.style.backgroundColor = 'red';
            computerScore++;
            document.querySelector('.compScore').textContent = `Computer Score: ${computerScore}`;
            checkVictory();
            break;
        case 1:
            roundInfo.textContent = 'You won this round!'
            roundInfo.style.backgroundColor = 'green';
            playerScore++;
            document.querySelector('.playerScore').textContent = `Player Score: ${playerScore}`;
            checkVictory();
            break;
        default:
            break;
    }
}

function checkVictory() {
    const victoryDiv = document.querySelector('.victoryText');
    if (computerScore >= 5) {
        victoryDiv.textContent = 'Game Over! Computer Wins!';
    } else if (playerScore >= 5) {
        victoryDiv.textContent = 'Game Over! Player Wins!';
    }
}