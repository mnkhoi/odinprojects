function computerPlay() {
    const rand = Math.floor((Math.random() * 100) + 1);

    const rem = rand % 3;
    if (rem == 0){
        return 'Scissors';
    } else if (rem == 1) {
        return 'Rock';
    } else {
        return 'Paper';
    }
}

function playRound(playerSelection, computerSelection) {
    let out;

    const player = playerSelection.toLowerCase();

    if(player == 'scissors'){
        if(computerSelection == 'Scissors'){
            out = "T";
        }else if (computerSelection == 'Paper'){
            out = "W";
        }else {
            out = "L";
        }
    } else if (player == 'paper') {
        if(computerSelection == 'Scissors'){
            out = "L";
        }else if (computerSelection == 'Paper'){
            out = "T";
        }else {
            out = "W";
        }
    } else {
        if(computerSelection == 'Scissors'){
            out = "W";
        }else if (computerSelection == 'Paper'){
            out = "L";
        }else {
            out = "T";
        }
    }

    if(out == "W"){
        return "You Win!";
    }else if(out == "L"){
        return "You Lose!";
    }else{
        return "Tied!";
    }
}

function game() {
    for (let index = 0; index < 5; index++) {
        const playerSelection = prompt("What weapon do you chose?");
        const computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
    }
}

game();