const result = document.querySelector(".result");
const yourScore = document.querySelector(".your-score");
const myScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");

let humanScoreNumber = 0;
let machineScoreNumber = 0;



const playHuman = (humanChoice) => {
    // Corpo da função

    playTheGame(humanChoice.id, playMachine());

};

const playMachine = () => {
    // Corpo da função
    const choices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * 3)

    return choices[randomIndex];
};

const playTheGame = (human, machine) => {
    // Corpo da função


    if (human === machine) {
        result.innerHTML = `Empatou!!!`;
    } else if (
        human === 'paper' && machine === 'rock' ||
        human === 'rock' && machine === 'scissors' ||
        human === 'scissors' && machine === 'paper') {
        result.innerHTML = "Você Ganhou!!!";
        humanScoreNumber++;
        myScore.innerHTML = humanScoreNumber;

    } else {
        result.innerHTML = "Você Perdeu!!!";
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;

    }


};