let cleaningTask = "https://lakelandcamel.scene7.com/is/image/LakelandCamel/26045_1?$800$";
let watchMovie = "https://engagingmedia.info/wp-content/uploads/2010/10/4687194723_b183bc7fcf_o-Bartosch-Salmanski-m4tik-CC-BY-NC-2.0.jpg";
let sleepingTime = "https://singularityhub.com/wp-content/uploads/2019/02/learning-while-sleeping-neuroscience-shutterstock-686222875.png";
let closedChoice = "https://images-na.ssl-images-amazon.com/images/I/21u5Kw1n+IL._SX331_BO1,204,203,200_.jpg"
let currentlyPlaying = true;

let guessImage1 = document.getElementById('guess1');
let guessImage2 = document.getElementById('guess2');
let guessImage3 = document.getElementById('guess3');
let startButton = document.getElementById ('start');

let numClosedChoices = 3;
let openChoice1;
let openChoice2;
let openChoice3;

const isChore = (choice) =>{
  if (choice.src === cleaningTask){
    return true;
  } else {
    return false;
  }
};

const isClicked = (choice) =>{
  if (choice.src === closedChoice ){ 
    return false;
  } else {
    return true;
  }
};

const playChoice = (choice) => {
  numClosedChoices -- ;
  if (numClosedChoices === 0){
    gameOver('win');
  } else if (isChore(choice)){
    gameOver ('lose');
  }

};

const randomChoreChoiceGenerator = () => {
  let choreChoice = Math.floor(Math.random()* numClosedChoices);
  if (choreChoice === 0){
    openChoice1 = cleaningTask;
    openChoice2 = sleepingTime;
    openChoice3 = watchMovie;
  } else if(choreChoice === 1){
    openChoice2 = cleaningTask;
    openChoice1 = watchMovie;
    openChoice3 = sleepingTime;
  } else {
    openChoice1 = sleepingTime;
    openChoice2 = watchMovie; 
    openChoice3 = cleaningTask; 
  }
};


guessImage1.onclick = () => { 
  if (currentlyPlaying && !isClicked(guessImage1)){
  guessImage1.src = openChoice1;
  playChoice(guessImage1);
  }
};


guessImage2.onclick =() =>{
  if (currentlyPlaying && !isClicked(guessImage2)){
    guessImage2.src = openChoice2;
    playChoice(guessImage2);
  }
};


guessImage3.onclick = () => {
  if (currentlyPlaying && !isClicked(guessImage3)){
    guessImage3.src = openChoice3;
    playChoice(guessImage3);
  }
};

startButton.onclick = () => {
  if (!currentlyPlaying){
  startRound()
  }
};

const startRound = () => {
  guessImage1.src = closedChoice;
  guessImage2.src = closedChoice;
  guessImage3.src = closedChoice;
  numClosedChoices = 3;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomChoreChoiceGenerator();
};

const gameOver =(status) => {
  if (status === 'win') {
  startButton.innerHTML = 'You win! Play again?';
} else {
  startButton.innerHTML = 'Game over! Play again?'
}
currentlyPlaying = false;

};

startRound();






