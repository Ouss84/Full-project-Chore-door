let cleaningTask = "https://lakelandcamel.scene7.com/is/image/LakelandCamel/26045_1?$800$";
let watchMovie = "https://engagingmedia.info/wp-content/uploads/2010/10/4687194723_b183bc7fcf_o-Bartosch-Salmanski-m4tik-CC-BY-NC-2.0.jpg";
let sleepingTime = "https://singularityhub.com/wp-content/uploads/2019/02/learning-while-sleeping-neuroscience-shutterstock-686222875.png";
let closedDoor = "https://envato-shoebox-0.imgix.net/fc9f/9721-2a5c-4011-a330-23767fc313f2/000010_01.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=600&s=d3e543749cbbc1ae78377c8276d6c9cf"
let currentlyPlaying = true;

let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById ('start');

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

const isBot = (door) =>{
  if (door.src === cleaningTask){
    return true;
  } else {
    return false;
  }
};

const isClicked = (door) =>{
  if (door.src === closedDoor ){ 
    return false;
  } else {
    return true;
  }
};

const playDoor = (door) => {
  numClosedDoors -- ;
  if (numClosedDoors === 0){
    gameOver('win');
  } else if (isBot(door)){
    gameOver ('lose');
  }

};

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random()* numClosedDoors);
  if (choreDoor === 0){
    openDoor1 = cleaningTask;
    openDoor2 = sleepingTime;
    openDoor3 = watchMovie;
  } else if(choreDoor === 1){
    openDoor2 = cleaningTask;
    openDoor1 = watchMovie;
    openDoor3 = sleepingTime;
  } else {
    openDoor1 = sleepingTime;
    openDoor2 = watchMovie; 
    openDoor3 = cleaningTask; 
  }
};


doorImage1.onclick = () => { 
  if (currentlyPlaying && !isClicked(doorImage1)){
  doorImage1.src = openDoor1;
  playDoor(doorImage1);
  }
};


doorImage2.onclick =() =>{
  if (currentlyPlaying && !isClicked(doorImage2)){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};


doorImage3.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage3)){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};

startButton.onclick = () => {
  if (!currentlyPlaying){
  startRound()
  }
};

const startRound = () => {
  doorImage1.src = closedDoor;
  doorImage2.src = closedDoor;
  doorImage3.src = closedDoor;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
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






