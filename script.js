function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
      return 'rock'
    } else if (choice === 1) {
      return 'paper'
    } else {
      return 'scissors'
    }
  }

  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a tie!"
      }
      if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
          return '0'
        } else {
          return '1'
        }
      }
    
      if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
          return '0'
        } else {
          return '1'
        }
      }
    
      if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
          return '0'
        } else {
          return '1'
        }
      }
  }

  function playGame() {
    let playerScore = 0
    let computerScore = 0
    for (let step = 0; step < 5; step++) {
        const playerSelection = prompt('Select - Rock, Paper or Scissors')
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection)
        if (result == 0) {
            computerScore++
        } else if (result == 1) {
            playerScore++
        } else {
            console.log('Ties! Play again!')
        }
        console.log(`Your score is: ${playerScore} Computer score is: ${computerScore}`)
       }
  }


playGame();

