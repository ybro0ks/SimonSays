let compOrder = [];
let playerOrder = [];
let flash;
let turn;
let compTurn;
let correct;
let on = false;
let win;
let intervalId;
let seconds = 0;
let progressValue = 0;
let highestScoreValue = 0; 
// initiaizwsd all my values
const firstCircle = document.querySelector('.circle2');
const secondCircle = document.querySelector('.circle3');
const thirdCircle = document.querySelector('.circle4');
const fourthCircle = document.querySelector('.circle5');
const onButton = document.querySelector("#button");
//var score = document.getElementById('.rectangle');
//var secondScore  = document.getElementById('.rectangle1');
//var scorec = score.querySelector("#text0");
//var secondScoreC = secondScore.querySelector("#text1");

onButton.addEventListener("click", () => {
    const lastElement = document.querySelector('.circlelast');

    if (lastElement) {
        lastElement.style.backgroundColor = 'green';
    } else {
        console.log("no such element"); // to avoid erros, this changes the red light to green
    }

    start();
});

function start() {
    setTimeout(() => {
        play(); // wait three seconds
    }, 3000);
}

function play() {
    win = false;
    compOrder = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    correct = true;
    turn = 1;
    compTurn = true; // default values

    for (let i = 0; i < 20; i++) {
        compOrder.push(Math.floor(Math.random() * 4) + 1);
    } // fill up the computer picks
  

    intervalId = setInterval(gameTurn, 800);
}

function gameTurn() { // the computers turns
    on = false;

    if (flash === turn) {
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
        on = true;

        if(turn === 5 || turn === 9 || turn === 13){
           intervalId -= 100; // speed up games
        }
    }

    if (compTurn) {
        clearColor();

        setTimeout(() => {
            if (compOrder[flash] === 1) one();
            if (compOrder[flash] === 2) two();
            if (compOrder[flash] === 3) three();
            if (compOrder[flash] === 4) four();
            flash++; // flashing the lights according to which is picked with functions
        }, 200);
    }
}

function one() {
    firstCircle.style.backgroundColor = "lightgreen"; // flash the lights
}

function two() {
    secondCircle.style.backgroundColor = "crimson";
}

function three() {
    thirdCircle.style.backgroundColor = "lightblue";
}

function four() {
    fourthCircle.style.backgroundColor = "lightyellow";
}

function clearColor() {
    firstCircle.style.backgroundColor = "green";
    secondCircle.style.backgroundColor = "red";
    thirdCircle.style.backgroundColor = "blue";
    fourthCircle.style.backgroundColor = "yellow"; // clear the colors very useful to return to default
}

firstCircle.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(1);
        check();
        one();
    

        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300); // code runs if first circle is clicked and so on and so forth
        }
           
        
    }
});

secondCircle.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(2);
        check();
        two();
       


        if (!win) {
            setTimeout(() => {
                clearColor(); // code runs if second circle is clicked
            }, 300);
        }
       
    }
});

thirdCircle.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(3);
        check();
        three();
       

        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    
        
    }
});

fourthCircle.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(4);
        check();
        four();
      

        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
        
    }
});


function restart(){
    const lastElement = document.querySelector('.circlelast');
    lastElement.style.backgroundColor= 'red';
    win = false;
    clearColor();
    compOrder = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    correct = true; // function is complicated but serves to restart
    turn = 1;
    compTurn = true;
    onButton.addEventListener("click", () => {
        const lastElement = document.querySelector('.circlelast');
        
        
        if (lastElement) {
            lastElement.style.backgroundColor = 'green';
        } else {
            console.log("no such element");
        }
    
        start();
    });
}
function gameOver() {
    on = false; // this happens if the game is over
    console.log("Game Over!");
    flashAllButtons();
    if (progressValue > highestScoreValue) {
        highestScoreValue = progressValue;
        updateHighestScoreDisplay(); // update the highest score next to the start button in prep for game n
    }
    progressValue = 0;
    updateProgressDisplay();


restart();
}

function flashcolor(){

        firstCircle.style.backgroundColor = "white";
        secondCircle.style.backgroundColor = "white";
        thirdCircle.style.backgroundColor = "white"; // flash colors all white when user fails
        fourthCircle.style.backgroundColor = "white";
    
}

function check() {
    if(playerOrder[playerOrder.length-1] !== compOrder[playerOrder.length - 1]){
    correct = false; // check if what the player entered is correct with the computers if not game over
    gameOver();
   flashAllButtons();
    }

   
    if(correct == false){
        flashcolor();
        console.log("gameover");
        setTimeout(() =>{
            console.log("restart button"); // if its false and is not true, game over
            clearColor();

            
        }, 800);
    }
   
    

    if(turn == playerOrder.length && correct && !win){
        progressValue++;
        updateProgressDisplay();
        turn++;
        playerOrder = [];
        compTurn = true; // if it is true we just go again
        flash = 0;
        intervalId = setInterval(gameTurn, 800);
      
    }
}
function flashAllButtons() {
    for (let i = 0; i < 5; i++) { // supposed to flash 5 times but m
        setTimeout(() => {
            clearColor();
            flashcolor(); 
        }, 1000); 
    }
}

function updateHighestScoreDisplay() {
    const highestScoreElement = document.getElementById('highest-score-value');
    highestScoreElement.textContent = highestScoreValue;
}
function updateProgressDisplay() {
    const progressElement = document.getElementById('progress-value');
    progressElement.textContent = progressValue;
}
// last two functions update the scores.