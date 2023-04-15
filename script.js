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
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    console.log(`Computer played ${computerSelection}`);
    console.log(`And the player played ${playerSelection}`);
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            console.log('You Lose! Paper beats Rock');
            return 0;
        }
        else if (computerSelection === 'scissors') {
            console.log('You Win! Rock beats Scissors');
            return 1;
        }
        else {
            console.log('Both played rock');
            return -1;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            console.log('Both played paper');
            return -1;
        }
        else if (computerSelection === 'scissors') {
            console.log('You Lose! Scissors beats Paper');
            return 0;
        }
        else {
            console.log('You Win! Paper beats Rock');
            return 1;
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            console.log('You Win! Scissors beats Paper');
            return 1;
        }
        else if (computerSelection === 'scissors') {
            console.log('Both played scissors');
            return -1;
        }
        else {
            console.log('You Lose! Rock beats Scissors');
            return 0;
        }
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;

    console.log('--- Round 1 ---');


    let playerSelection = prompt("Rock, Paper or Scissors?");
    let computerSelection = getComputerChoice();
    let result = play(playerSelection, computerSelection);
    if (result === 0) {
        computerScore++;
    } else if (result === 1) {
        playerScore++;
    }

    console.log('--- Round 2 ---');
    playerSelection = prompt("Rock, Paper or Scissors?");
    computerSelection = getComputerChoice();

    result = play(playerSelection, computerSelection);
    if (result === 0) {
        computerScore++;
    } else if (result === 1) {
        playerScore++;
    }

    console.log('--- Round 3 ---');

    playerSelection = prompt("Rock, Paper or Scissors?");
    computerSelection = getComputerChoice();

    result = play(playerSelection, computerSelection);
    if (result === 0) {
        computerScore++;
    } else if (result === 1) {
        playerScore++;
    }

    console.log('--- Round 4 ---');

    playerSelection = prompt("Rock, Paper or Scissors?");
    computerSelection = getComputerChoice();

    result = play(playerSelection, computerSelection);
    if (result === 0) {
        computerScore++;
    } else if (result === 1) {
        playerScore++;
    }

    console.log('--- Round 5 ---');

    playerSelection = prompt("Rock, Paper or Scissors?");
    computerSelection = getComputerChoice();

    result = play(playerSelection, computerSelection);
    if (result === 0) {
        computerScore++;
    } else if (result === 1) {
        playerScore++;
    }

    console.log('Game OVER!');
    console.log('Final result:');
    console.log('Player Score: ' + playerScore);
    console.log('Computer Score: ' + computerScore);

    console.log('The winner is: '
        + (computerScore < playerScore
            ? 'The Player'
            : (computerScore > playerScore
                ? 'La Computadora'
                : 'It\'s a focking tie bruv')    )    );


}

console.log('Okay bruv, \'ere we go')

game();