let highScoreBoard = document.querySelector('.whoseHighScore');
let timer = document.querySelector('.ticktock');
let startBtn = document.querySelector('.startGame');
let questionBox = document.querySelector('.questionaire');
const question = document.querySelector('.questions');
const answer = document.querySelector('.answers');
let feedBack = document.querySelector('.feedback');
let qnA = [{que: 'What year did JavaScript get published?', ans:['1955', '1999', '1995','2010']}, {que: 'What does HTML stand for?', ans:['Hiding Text Mobile Link', 'HyperText Markup Language', 'Hey There Marekting Language', 'HyperText Marking Language']}, {que: 'If HTML is the bones, and JavaScript the brain, what is CSS?', ans: ['The Skin', 'The Eyes', 'The Heart', 'The Feet']}, {que: 'What is a method in JavaScript?', ans: ['The way we go about things', 'The best solution', 'The way of the force', 'A function within an object']}, {que: "If you don't code today what will happen?", ans: ["You won't remember as much", "You'll not get that dream job in tech", "Bye bye to the title of being the best there is", "All of the above"]}];
let answers = [{one: ['1955', '1999', '1995','2010']}, {two: ['Hiding Text Mobile Link', 'HyperText Markup Language', 'Hey There Marekting Language', 'HyperText Marking Language']}, {three: ['The Skin', 'The Eyes', 'The Heart', 'The Feet']}, {four: ['The way we go about things', 'The best solution', 'The way of the force', 'A function within an object']}, {five: ["You won't remember as much", "You'll not get that dream job in tech", "Bye bye to the title of being the best there is", "All of the above"]}];
let strtButton = document.createElement('button');
button.textContent = 'Start Game';
startBtn.appendChild(strtButton);

const aQuestion = 0;
const anAnswer = 0;

startBtn.addEventListener('click', btnDisappear);

const iHave = qnA.map(theQuestion => theQuestion.que);
const iWant = qnA.map(theAnswer => theAnswer.ans);
// const iNeed = iWant.map(findAnswer => findAnswer);
iWant.forEach((item) => {console.log(item);})
const solution = iHave[Math.floor(Math.random() * iHave.length)];
const equation = iWant[Math.floor(Math.random() * iWant.length)];
console.log(iHave);
console.log(iWant[0][0]);


highScoreBoard.addEventListener('click', function(e) {
    e.preventDefault;
    highScoreDisplay();
});

function btnDisappear(){
    
    startBtn.style.display = 'none';
    quizBegin();
    // timesATicking();
}

function quizBegin(){
    questionBox.style.display = 'block';
    const myQuestion = document.createElement('p');
    const theAnswers = document.createElement('ul');

    const myAnswerA = document.createElement('li');
    const myAnswerB = document.createElement('li');
    const myAnswerC = document.createElement('li');
    const myAnswerD = document.createElement('li');
    const nxt = document.createElement('button');
    nxt.className = 'Next';

    questionBox.appendChild(myQuestion);
    questionBox.appendChild(theAnswers);
    // questionBox.appendChild(nxt);
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

    // myAnswers.appendChild(answerA);
    // myAnswers.appendChild(answerB);
    // myAnswers.appendChild(answerC);
    // myAnswers.appendChild(answerD);
    

    // myAnswers.textContent = iWant[anAnswer];

}

