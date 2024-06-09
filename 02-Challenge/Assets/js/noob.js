// assigning variables by class names
let highScoreBtn = document.querySelector('.whoseHighScore');
let scoreBox = document.querySelector('.boardBox');
let highScoreBoard = document.querySelector('.highScore');
let timer = document.querySelector('.ticktock');
const gameStart = document.querySelector('.startGame');
const endGame = document.querySelector('.endOfGame');
let startButton = document.createElement('button');
let questionBox = document.querySelector('.questionaire');
const questions = document.querySelector('.questions');
const answers = document.querySelector('.answers');
let feedBack = document.querySelector('.feedback');
let theCountdown;
let countdown = 45;
const answerArr = Array.from(document.getElementsByClassName('answerBtn'));
// const playerArr = Array.from(document.getElementsByClassName('playerList'));

let storedPlayerArr = localStorage.getItem("Player's Points");
let playerArr = [];

if (storedPlayerArr) {
    try {
        playerArr = JSON.parse(storedPlayerArr);
    } catch (e) {
        console.error("Error parsing playerArr from localStorage:", e);
        playerArr = [];
    }
}


// creating various elements
const myQuestion = document.createElement('h3');
const theAnswers = document.createElement('ul');
const playerInfo = document.createElement('h5');
const playerName = document.createElement('input');
const enterPlayerBtn = document.createElement('button');
const formForPlayer = document.createElement('form');
const inputArea = document.createElement('div')
let inputTag = document.createElement('p');
const myAnswerA = document.createElement('button');
const myAnswerB = document.createElement('button');
const myAnswerC = document.createElement('button');
const myAnswerD = document.createElement('button');
const startOver = document.createElement('button');
const scoreJug = document.createElement('div');
const scoreListing = document.createElement('ul');

// id names
endGame.id = 'gameOver';
inputArea.id = 'formInput';
playerName.id = 'playerName';
inputTag.id = 'inputTitle';
enterPlayerBtn.id = 'submit';
myAnswerA.id = 'alpha';
myAnswerB.id = 'bravo';
myAnswerC.id = 'charlie';
myAnswerD.id = 'delta';
scoreBox.id = 'theHighScores';
startOver.id = 'startOverBtn';
myQuestion.id = 'questions';

// form submit button
enterPlayerBtn.type = submit;

// various styling commands
// input for player to enter their name to be stored in local storage
inputTag.textContent = 'What Is Your Name Player?';
inputTag.setAttribute('style', 'display: block');
enterPlayerBtn.textContent = 'Enter';
playerName.type = 'text';
playerName.placeholder = 'Enter Your Name Player';

// start button for the game to begin
startButton.textContent = 'Start Game';
startButton.className = 'startBTN';
gameStart.appendChild(startButton);

startOver.textContent = 'Play Again';

// attaching elements to other elements by their variable names
playerInfo.appendChild(inputTag);
highScoreBoard.appendChild(playerInfo);
inputArea.appendChild(playerName);
inputArea.appendChild(enterPlayerBtn);
formForPlayer.appendChild(inputArea);
myAnswerA.appendChild(document.createElement('li'));
myAnswerB.appendChild(document.createElement('li'));
myAnswerC.appendChild(document.createElement('li'));
myAnswerD.appendChild(document.createElement('li'));
scoreJug.appendChild(scoreListing);
scoreBox.appendChild(scoreJug);
scoreBox.appendChild(startOver);


// giving class names ot the buttons that will go for the answers in the quiz
myAnswerA.className = 'answerBtn';
myAnswerB.className = 'answerBtn';
myAnswerC.className = 'answerBtn';
myAnswerD.className = 'answerBtn';
endGame.className = 'winGame';

// putting answer buttons in the array titled answerArr
answerArr.push(myAnswerA, myAnswerB, myAnswerC, myAnswerD);


// questions and answers as an array containing objects
let qnA = [{que: 'What year did JavaScript get published?', ans:['1955', '1999', '1995','2010']}, {que: 'What does HTML stand for?', ans:['Hiding Text Mobile Link', 'HyperText Markup Language', 'Hey There Marekting Language', 'HyperText Marking Language']}, {que: 'If HTML is the bones, and JavaScript the brain, what is CSS?', ans: ['The Skin', 'The Eyes', 'The Heart', 'The Feet']}, {que: 'What is a method in JavaScript?', ans: ['The way we go about things', 'The best solution', 'The way of the force', 'A function within an object']}, {que: "If you don't code today what will happen?", ans: ["You won't remember as much", "You'll not get that dream job in tech", "Bye bye to the title of being the best there is", "All of the above"]}];

let enteredPlayerName = playerName.value;
let playerScore;

// scoreBox.appendChild(enteredPlayerName);
// scoreBox.appendChild(playerScore);

// these variables loop through the array (qnA) items that are objects by their respective key names
const iHave = qnA.map(theQuestion => theQuestion.que);
const iWant = qnA.map(theAnswer => theAnswer.ans);



// the right answers
const correctAnswers = [
    iWant[0][2],
    iWant[1][1],
    iWant[2][0],
    iWant[3][3],
    iWant[4][3]
];

// the wrong answers
const wrongAnswers = [
    [iWant[0][0], iWant[0][1], iWant[0][3]],
    [iWant[1][0], iWant[1][2], iWant[1][3]],
    [iWant[2][1], iWant[2][2], iWant[2][3]],
    [iWant[3][0], iWant[3][1], iWant[3][2]],
    [iWant[4][0], iWant[4][1], iWant[4][2]]
];


// start button to get game initiated
startButton.addEventListener('click', btnDisappear);
function btnDisappear(){
    // time function
    timerStart();
    startButton.style.display = 'none';
    // quiz will begin function
    quizBegin();
}

// play again button
startOver.addEventListener('click', () => {
    location.reload();
    resetPoints();

})


const aQuestion = 0;
const anAnswer = 0;


// localStorage.clear();



// setting timer to show in bold and putting it inside of it's parent element
const time = document.createElement('h2');
time.textContent = countdown + ' sec';
timer.appendChild(time);

// Answers' feedback
const theResult = document.createElement('p');
const headLight = document.createElement('h3');
headLight.appendChild(theResult);
feedBack.appendChild(headLight);


highScoreBtn.addEventListener('click', () => {
    startButton.style.display = 'none';
    questionBox.style.display = 'none';
    clearInterval(theCountdown);
    scoreBox.style.display = 'flex';
})


function submit(e) {
    e.preventDefault();
    // index++;
    let thePlayer = playerName.value.toLowerCase().trim();
    if (thePlayer === "") {
        console.log('It is blank!');
        alert("please insert at least one character");
        return;
    } else {
        playerName.value = '';
        let player = `${thePlayer} scored: ${localStorage.getItem('highPoints')}`;
        

        playerArr.push(player);
        console.log(playerArr);
        localStorage.setItem("Player's Points", JSON.stringify(playerArr));
        endGame.style.display = 'none';
        // resetPoints();
        printHighscores();

    }
  
}
  
function printHighscores() {
    scoreListing.innerHTML = '';
    scoreBox.style.display = 'flex';
    
    playerArr.forEach((players) => {
        let playList = document.createElement('li');
        playList.textContent = players;
        scoreListing.appendChild(playList);

    });
}


function highScoreDisplay() {
    questionBox.style.display = 'none';
    highScoreBoard.style.display = 'block';

}

function timerStart(){
    

    theCountdown = setInterval(() => {
        if(countdown > 0){
            countdown --;
            time.innerText = countdown + ' sec';

        } else {
            clearInterval(theCountdown);
            lostGame();
            return;
        }
    }, 1000);
    
}

function lostGame() {
    questionBox.style.display = 'none';
    endGame.style.display = 'flex';
    let header = document.createElement('h4');
    header.innerText = 'You Lost'
    endGame.appendChild(header);
    endGame.appendChild(startOver);
    clearInterval(theCountdown);
}

function gameOver() {
    time.style.display = 'none';
    questionBox.style.display = 'none';
    feedBack.style.display = 'none';
    theResult.textContent = '';
    endGame.style.display = 'flex';
    endGame.appendChild(formForPlayer);
    formForPlayer.addEventListener('submit', submit);
}

// point system

function pointsUp(pointAdded){
    
    let playerPoints = JSON.parse(localStorage.getItem('highPoints'));

    // adds points to the local storage
    
    playerPoints += pointAdded;

    // stores points
    localStorage.setItem('highPoints', playerPoints);
 
}
resetPoints();
// Function to reset points

function resetPoints() {
    localStorage.setItem('highPoints', 0);
}

// highscores will render upon page load and remain
// printHighscores();



highScoreBoard.addEventListener('click', function(e) {
    e.preventDefault;
    highScoreDisplay();
});




function quizBegin(){


    let answerA;
    let answerB;
    let answerC;
    let answerD;

    

    function correctAnswerResult(correctAnswer) {
   
        for (let goku = 0; goku < correctAnswers.length; goku++) {
            if (correctAnswers[goku].includes(correctAnswer)) {
                console.log(correctAnswers[goku]);
                feedBack.style.display = 'block';
                theResult.textContent = 'Right Answer!';
                pointsUp(500);
                setTimeout(() => {
                    feedBack.style.display = 'none';
                    rotateQuestions(correctAnswer);
                }, 1500);
    
                break;
            }

            if (correctAnswer === iWant[4][3]){
                feedBack.style.display = 'none';
                clearInterval(theCountdown);

                gameOver();
            }
        }
    
    }
    
    function wrongAnswerResult(wrongAnswer) {
            
        for (let strawHat = 0; strawHat < wrongAnswers.length; strawHat++) {
            for (let luffy = 0; luffy < wrongAnswers[strawHat].length; luffy++) {

                if (wrongAnswers[strawHat][luffy].includes(wrongAnswer)) {
                    countdown -= 5;
                    feedBack.style.display = 'block';
                    theResult.textContent = 'Wrong Answer!';
                    // pointsDown(wrongAnswer, 500);
                    setTimeout(() => {
                        feedBack.style.display = 'none';
                        rotateQuestions(wrongAnswer);
                    }, 1500);
        
                    break;
                }
                
                if (wrongAnswer === iWant[4][0] || wrongAnswer === iWant[4][1] || wrongAnswer === iWant[4][2]) {
                    feedBack.style.display = 'none';
                    clearInterval(theCountdown);

                    gameOver();
                }
            }
        }
    
    }
    
    questionBox.style.display = 'block';
    // document.querySelector('hr').style.display = 'block';
    questionBox.appendChild(questions);
    questionBox.appendChild(answers);
   
    questions.appendChild(myQuestion);
    answers.appendChild(theAnswers);
   
    theAnswers.appendChild(myAnswerA);
    theAnswers.appendChild(myAnswerB);
    theAnswers.appendChild(myAnswerC);
    theAnswers.appendChild(myAnswerD);

    firstQuestion();

    answerArr.forEach((button) => {
        button.addEventListener("click", (e) => {
            let pressedAnswer = e.target.textContent;
            console.log(pressedAnswer);
    
            let isCorrect = false;
            
            for (let gohan = 0; gohan < correctAnswers.length; gohan++) {
                if (pressedAnswer === correctAnswers[gohan]) {
                    isCorrect = true;
                    break;
                }
            }
    
            myAnswerA.disabled = true;
            myAnswerB.disabled = true;
            myAnswerC.disabled = true;
            myAnswerD.disabled = true;
    
            if (isCorrect) {
                correctAnswerResult(pressedAnswer);
            } else {
                wrongAnswerResult(pressedAnswer);
            }
        });
    });

    const questionContainer = [{funct: secondQuestion}, {funct: thirdQuestion}, {funct: fourthQuestion}, {funct: fifthQuestion}];

    const nextQuestions = questionContainer.map(nextQuestion => nextQuestion.funct);

    function rotateQuestions(theGivenAnswer) {
        for (let sasuke = 0; sasuke < wrongAnswers.length; sasuke++) {
            if (wrongAnswers[sasuke].includes(theGivenAnswer)) {
                let nextUp = nextQuestions[sasuke];
                if (typeof nextUp === 'function') {
                    nextUp(); // Call the corresponding function
                    console.log(nextQuestions[sasuke]);
                } else {
                    console.error(`nextQuestions[${sasuke}] is not a function`);
                }
                return;
            }
        }
    
        for (let gai = 0; gai < correctAnswers.length; gai++) {
            if (correctAnswers[gai].includes(theGivenAnswer)) {
                let nextYup = nextQuestions[gai];
                if (typeof nextYup === 'function') {
                    nextYup();
                } 
                return;
            }
        }
    }
    

    function firstQuestion(){
        myAnswerA.disabled = false;
        myAnswerB.disabled = false;
        myAnswerC.disabled = false;
        myAnswerD.disabled = false;
        myQuestion.textContent = iHave[aQuestion];
        answerA = iWant[0][0];
        answerB = iWant[0][1];
        answerC = iWant[0][2];
        answerD = iWant[0][3];
        myAnswerA.textContent = answerA;
        myAnswerB.textContent = answerB;

        myAnswerC.textContent = answerC;

        myAnswerD.textContent = answerD;

    }

    function secondQuestion(){
        myAnswerA.disabled = false;
        myAnswerB.disabled = false;
        myAnswerC.disabled = false;
        myAnswerD.disabled = false;
        myQuestion.textContent = iHave[1];
        answerA = iWant[1][0];
        answerB = iWant[1][1];
        answerC = iWant[1][2];
        answerD = iWant[1][3];
        myAnswerA.textContent = answerA;
        myAnswerB.textContent = answerB;
        myAnswerC.textContent = answerC;
        myAnswerD.textContent = answerD;

    }

    function thirdQuestion(){
        myAnswerA.disabled = false;
        myAnswerB.disabled = false;
        myAnswerC.disabled = false;
        myAnswerD.disabled = false;
        myQuestion.textContent = iHave[2];
        answerA = iWant[2][0];
        answerB = iWant[2][1];
        answerC = iWant[2][2];
        answerD = iWant[2][3];

        myAnswerA.textContent = answerA;
        myAnswerB.textContent = answerB;
        myAnswerC.textContent = answerC;
        myAnswerD.textContent = answerD;
    }

    function fourthQuestion(){
        myAnswerA.disabled = false;
        myAnswerB.disabled = false;
        myAnswerC.disabled = false;
        myAnswerD.disabled = false;
        myQuestion.textContent = iHave[3];
        answerA = iWant[3][0];
        answerB = iWant[3][1];
        answerC = iWant[3][2];
        answerD = iWant[3][3];

        myAnswerA.textContent = answerA;
        myAnswerB.textContent = answerB;
        myAnswerC.textContent = answerC;
        myAnswerD.textContent = answerD;
    }

    function fifthQuestion(){
        myAnswerA.disabled = false;
        myAnswerB.disabled = false;
        myAnswerC.disabled = false;
        myAnswerD.disabled = false;
        myQuestion.textContent = iHave[4];
        answerA = iWant[4][0];
        answerB = iWant[4][1];
        answerC = iWant[4][2];
        answerD = iWant[4][3];

        myAnswerA.textContent = answerA;
        myAnswerB.textContent = answerB;
        myAnswerC.textContent = answerC;
        myAnswerD.textContent = answerD;
        
        // if (lastQuestion) {
        //     new Promise((questionAnswered, questionNotAnswered) => {
        //         questionAnswered = function answeredLast(answerButton) {
        //             answerButton = answerArr;
        //             if (answerButton)
        //         }
        //     })
        // }
    }
}




