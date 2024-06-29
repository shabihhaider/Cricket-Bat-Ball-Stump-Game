//return computer choice
function getComputerChoice(randomChoice) {
    if (randomChoice > 0 && randomChoice <= 1) {
        return 'Bat';
    }
    else if (randomChoice > 1 && randomChoice <= 2) {
        return 'Ball';
    }
    else {
        return 'Stump';
    }
}
//who's win (computer or user)
function getResult(userMove, computerChoice) {
    if (computerChoice === userMove) {
        return`It's a Tie.`;
    }
    else if (computerChoice === 'Ball') {
        return `Congrats, You Win!`;
    }
    else {
        return `Computer Win!`;
    }
}
//Display the result
function popUpResult(userMove, computerChoice, result) {
    alert(`Your Choice is ${userMove}, Computer Choice is ${computerChoice} and ${result}`);
}