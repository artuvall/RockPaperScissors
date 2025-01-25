let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    let num2 = prompt("Rock, paper or scissors?");
    return num2;
}

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        return "rock";
    } else if (num === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    let humanInput = humanChoice.toLowerCase();
    let computerInput = computerChoice.toLowerCase();

    console.log(`You chose ${humanInput} while the computer chose ${computerInput}.`);

    if (humanInput === computerInput) {
        console.log("Looks like this is a tie, no one wins this round.");
    } else if (
        (humanInput === "rock" && computerInput === "scissors") ||
        (humanInput === "paper" && computerInput === "rock") ||
        (humanInput === "scissors" && computerInput === "paper")
    ) {
        console.log(`Congrats! ${humanInput} beats ${computerInput}, YOU WIN!`);
        humanScore++;
    } else {
        console.log(`Oh, you lost, ${computerInput} beats ${humanInput}. Better luck next time!`);
        computerScore++;
    }
}

function playGame() {
    for (let round = 1; round <= 5; round++) {
        console.log(`This is round ${round}.`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log(`The final score is: You - ${humanScore}, Computer - ${computerScore}`);
    if (humanScore === computerScore) {
        console.log("This is a tie.");
    } else if (humanScore > computerScore) {
        console.log("YOU ARE THE WINNER!");
    } else {
        console.log("The computer wins.");
    }
}

playGame();

//console.log("The Human has chosen" + " " + getHumanChoice());

//console.log("The Computer has chosen" + " " + getComputerChoice());