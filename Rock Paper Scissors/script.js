const aiNumber = Math.ceil(Math.random() * 9); // 1/3 percent of getting rock paper or scissors
let aiChoice;
console.log(aiNumber);

function whoWon(plrChoice) { // create a function that has two arguements and checks who won
    // Get document element and change depending on plrChoice
    if (plrChoice == 'rock') {
        document.getElementById('myChoice').innerHTML = 'You Have Choosen: Rock';
    } else if (plrChoice == 'paper') {
        document.getElementById('myChoice').innerHTML = `You Have Choosen: Paper`;
    } else {
        document.getElementById('myChoice').innerHTML = 'You Have Choosen: Scissors';
    } 

    if (aiNumber == 1 || aiNumber == 2 || aiNumber == 3) { // Makes Ai choose
        console.log('Ai Has Choosen Rock');
        aiChoice = 'rock';
        document.getElementById('aiChoice').innerHTML = 'AI choosed: Rock';
    } else if (aiNumber == 4 || aiNumber == 5 || aiNumber == 6) {
        console.log('Ai Has Choosen Paper');
        aiChoice = 'paper';
        document.getElementById('aiChoice').innerHTML = 'AI choosed: Paper';
    } else {
        console.log('Ai Has Choosen Scissors');
        aiChoice = 'scissors';
        document.getElementById('aiChoice').innerHTML = 'AI choosed: Scissors';
    }

    // get document element for AI Choosed and sets based on number
    let winStatus;
    if (plrChoice == aiChoice) {
        console.log('You have tied the game');
        winStatus = 'tie';
    } else if (plrChoice == 'rock' && aiChoice == "scissors") {
        console.log('You have won the game');
        winStatus = 'win';
    } else if (plrChoice == 'scissors' && aiChoice == 'paper') {
        console.log('You have won the game');
        winStatus = 'win';
    } else if (plrChoice == 'paper' && aiChoice == 'rock') {
        console.log('You have won the game');
        winStatus = 'win';
    } else {
        console.log('The AI has beaten you');
        winStatus = 'lose';
    }

    if (winStatus == 'tie') {
        document.getElementById('game-message').innerHTML = 'You have tied the game';
        document.getElementById('game-message').style.visibility = 'visible';
    } else if (winStatus == 'win') {
        document.getElementById('game-message').innerHTML = 'You have won the game';
        document.getElementById('game-message').style.visibility = 'visible';
    } else {
        document.getElementById('game-message').innerHTML = 'The AI has beaten you';
        document.getElementById('game-message').style.visibility = 'visible';
    }
}

function rock() {
    whoWon('rock');
    document.getElementById('paperImg').style.visibility = 'hidden';
    document.getElementById('scissorsImg').style.visibility = 'hidden';
}

function paper() {
    whoWon('paper');
    document.getElementById('rockImg').style.visibility = 'hidden';
    document.getElementById('scissorsImg').style.visibility = 'hidden';
}

function scissors() {
    whoWon('scissors');
    document.getElementById('rockImg').style.visibility = 'hidden';
    document.getElementById('paperImg').style.visibility = 'hidden';
}

function restart_game() {
    location.reload();
}