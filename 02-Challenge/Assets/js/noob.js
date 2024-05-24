let highScoreBtn = document.querySelector('.whoseHighScore');
let scoreBox = document.querySelector('.boardBox');
let highScoreBoard = document.querySelector('.highScore');
let timer = document.querySelector('.ticktock');
let mason = document.querySelector('main');
let startBtn = document.querySelector('.startGame');
let questionBox = document.querySelector('.questionaire');
const questions = document.querySelector('.questions');
const answers = document.querySelector('.answers');
let feedBack = document.querySelector('.feedback');
const myQuestion = document.createElement('p');
const theAnswers = document.createElement('ul');
const playerInfo = document.createElement('h5');
const playerName = document.createElement('input');
const enterPlayerBtn = document.createElement('button');
enterPlayerBtn.textContent = 'Enter';
playerName.type = 'text';
playerName.placeholder = 'Enter Your Name Player';
let inputTag = document.createElement('p');
inputTag.id = 'inputTitle';
inputTag.textContent = 'What Is Your Name Player?';
inputTag.setAttribute('style', 'display: block');
playerInfo.appendChild(inputTag);
highScoreBoard.appendChild(playerInfo);
highScoreBoard.appendChild(playerName);
highScoreBoard.appendChild(enterPlayerBtn);
const myAnswerA = document.createElement('button');
const myAnswerB = document.createElement('button');
const myAnswerC = document.createElement('button');
const myAnswerD = document.createElement('button');
const answerArr = Array.from(document.getElementsByClassName('answerBtn'));
myAnswerA.className = 'answerBtn';
myAnswerB.className = 'answerBtn';
myAnswerC.className = 'answerBtn';
myAnswerD.className = 'answerBtn';

myAnswerA.appendChild(document.createElement('li'));
myAnswerB.appendChild(document.createElement('li'));
myAnswerC.appendChild(document.createElement('li'));
myAnswerD.appendChild(document.createElement('li'));
answerArr.push(myAnswerA, myAnswerB, myAnswerC, myAnswerD);
console.log(answerArr);


// questions and answers as an array containing objects
let qnA = [{que: 'What year did JavaScript get published?', ans:['1955', '1999', '1995','2010']}, {que: 'What does HTML stand for?', ans:['Hiding Text Mobile Link', 'HyperText Markup Language', 'Hey There Marekting Language', 'HyperText Marking Language']}, {que: 'If HTML is the bones, and JavaScript the brain, what is CSS?', ans: ['The Skin', 'The Eyes', 'The Heart', 'The Feet']}, {que: 'What is a method in JavaScript?', ans: ['The way we go about things', 'The best solution', 'The way of the force', 'A function within an object']}, {que: "If you don't code today what will happen?", ans: ["You won't remember as much", "You'll not get that dream job in tech", "Bye bye to the title of being the best there is", "All of the above"]}];

let enteredPlayerName = playerName.value;
let playerScore;

scoreBox.appendChild(enteredPlayerName);
scoreBox.appendChild(playerScore);


const iHave = qnA.map(theQuestion => theQuestion.que);
const iWant = qnA.map(theAnswer => theAnswer.ans);

console.log(iWant.length);
const correctAnswers = [
    iWant[0][2],
    iWant[1][1],
    iWant[2][0],
    iWant[3][3],
    iWant[4][3]
];

const wrongAnswers = [
    [iWant[0][0], iWant[0][1], iWant[0][3]],
    [iWant[1][0], iWant[1][2], iWant[1][3]],
    [iWant[2][0], iWant[2][1], iWant[2][3]],
    [iWant[3][0], iWant[3][1], iWant[3][2]],
    [iWant[4][0], iWant[4][1], iWant[4][2]]
];

console.log(wrongAnswers[0][2]);

// start button to get game initiated
let strtButton = document.createElement('button');
strtButton.textContent = 'Start Game';
strtButton.className = 'startBTN'
startBtn.appendChild(strtButton);

const aQuestion = 0;
const anAnswer = 0;





// setting timer to show in bold and putting it inside of it's parent element
let countdown = 45;
const time = document.createElement('h2');
time.textContent = countdown + ' sec';
timer.appendChild(time);

const theResult = document.createElement('p');
const headLight = document.createElement('h3');
headLight.appendChild(theResult);
feedBack.appendChild(headLight);


highScoreBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    scoreBox.style.display = 'flex';
    // highScoreBoard.style.display = 'flex';
    
    
})

startBtn.addEventListener('click', btnDisappear);


// const iNeed = iWant.map(findAnswer => findAnswer);
// iWant.forEach((item) => {console.log(item);})
const solution = iHave[Math.floor(Math.random() * iHave.length)];
const equation = iWant[Math.floor(Math.random() * iWant.length)];


function timerStart(){
    

    let limit = setInterval(() => {
        if(countdown > 0){
            countdown --;
            time.innerText = countdown + ' sec';
            console.log(countdown);

        } else {

            alert('GAME OVER NOOB');
            clearInterval(limit);
            return window.location.reload();
        }
    }, 1000);
    
}

function correctAnswerResult(correctAnswer) {
   
    for (let section = 0; section < correctAnswers.length; section++) {
        if (correctAnswers[section].includes(correctAnswer)) {
            
            feedBack.style.display = 'block';
            theResult.textContent = 'Right Answer!';
            pointsUp(correctAnswer, 500);
            setTimeout(() => {
                feedBack.style.display = 'none';
                followUpQuestion();
            }, 1500);

            break;
        }
    }

}

function wrongAnswerResult(wrongAnswer) {
    
    for (let i = 0; i < wrongAnswers.length; i++) {
        if (wrongAnswers[i].includes(wrongAnswer)) {
            countdown -= 5;
            console.log('minus 5');
            feedBack.style.display = 'block';
            theResult.textContent = 'Wrong Answer!';
            pointsDown(wrongAnswer, 500);
            setTimeout(() => {
                feedBack.style.display = 'none';
                rotateQuestions(wrongAnswer);
            }, 1500);

            break;
        }
    }

}

// point system

function pointsUp(result, pointAdded){
    result = true;
    if (result){
        // pointAdded += 
    }
}

function pointsDown(result, pointDeducted){

}
// highScoreBoard.addEventListener('click', function(e) {
//     e.preventDefault;
//     highScoreDisplay();
// });

function btnDisappear(){
    timerStart();
    startBtn.style.display = 'none';
    
    quizBegin();
}

function quizBegin(){
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

    myQuestion.textContent = iHave[aQuestion];
    
    let answerA = iWant[0][0];
    let answerB = iWant[0][1];
    let answerC = iWant[0][2];
    let answerD = iWant[0][3];
    myAnswerA.textContent = answerA;
    myAnswerB.textContent = answerB;
    myAnswerC.textContent = answerC;
    myAnswerD.textContent = answerD;

    answerArr.forEach((button) => {
        button.addEventListener("click", (e) => {
          console.log(button.textContent);
         
          let chosen = button.textContent;
          e.target = true;
            
            if (e.target){
                for(chapter = 0; chapter < correctAnswers.length; chapter++){
                    if(chosen !== correctAnswers[chapter]){
                        myAnswerA.disabled = true;
                        myAnswerB.disabled = true;
                        myAnswerC.disabled = true;
                        myAnswerD.disabled = true;
                        wrongAnswerResult(chosen);
                        break;
                        
                    } else {
                        myAnswerA.disabled = true;
                        myAnswerB.disabled = true;
                        myAnswerC.disabled = true;
                        myAnswerD.disabled = true;
                        correctAnswerResult(chosen, rotateQuestions);
                        break;     
                    }
                }
            }
           
        });
    });
};

const questionContainer = [{funct: secondQuestion}, {funct: thirdQuestion}, {funct: fourthQuestion}, {funct: fifthQuestion}];

const nextQuestions = questionContainer.map(nextQuestion => nextQuestion.funct);

// function rotateQuestions(theGivenAnswer){
//     for (let cycle = 0; cycle < wrongAnswers.length; cycle++) {
//         for (let index = 0; index < nextQuestions.length; index++) {
//             if (wrongAnswers[cycle] === 0 && nextQuestions[index] === 0){
//                 if (theGivenAnswer == wrongAnswers[0][0] || theGivenAnswer == wrongAnswers[0][1] || theGivenAnswer == wrongAnswers[0][2]) {
//                     nextQuestions[0];
//                 }
//                 // for (let bookmark = 0; bookmark <)
//                 return;
//             } else if (wrongAnswers[cycle] === 1 && nextQuestions[index] === 1) {
//                 if (theGivenAnswer == wrongAnswers[1][0] || theGivenAnswer == wrongAnswers[1][1] || theGivenAnswer == wrongAnswers[1][2]) {
//                     nextQuestions[1];
//                 }
//                 return;
//             } else if (wrongAnswers[cycle] === 2 && nextQuestions[index] === 2) {
//                 if (theGivenAnswer == wrongAnswers[2][0] || theGivenAnswer == wrongAnswers[2][1] || theGivenAnswer == wrongAnswers[2][2]) {
//                     nextQuestions[2];
//                 }
//                 return;
//             } else if (wrongAnswers[cycle] === 3 && nextQuestions[index] === 3) {
//                 if (theGivenAnswer == wrongAnswers[3][0] || theGivenAnswer == wrongAnswers[3][1] || theGivenAnswer == wrongAnswers[3][2]) {
//                     nextQuestions[3];
//                 }
//                 return;
//             } else if (wrongAnswers[cycle] === 4 && nextQuestions[index] === 4) {
//                 if (theGivenAnswer == wrongAnswers[4][0] || theGivenAnswer == wrongAnswers[4][1] || theGivenAnswer == wrongAnswers[4][2]) {
//                     nextQuestions[4];
//                 }
//                 return;
//             }
            
//         }
//     }
    
// }

function rotateQuestions(theGivenAnswer) {
    for (let index = 0; index < wrongAnswers.length; index++) {
        if (wrongAnswers[index].includes(theGivenAnswer)) {
            nextQuestions[index](); // Call the corresponding function
            return;
        }
    }
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
}

