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
let point = 0;

const buttons = document.querySelectorAll('button');
const score = document.querySelector('.score');
buttons.forEach((button) => {
    // button.addEventListener('click', playRound(button.))
    button.addEventListener('click', () => {
        let result = playRound(button.className, computerPlay());
        console.log(result);
        if(result === 'You Win!'){
            point += 1;
            score.textContent = point;

            if (point == 5){
                alert('You won the game!');
            }
        }
    });
});