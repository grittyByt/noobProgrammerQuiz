let highScoreBoard = document.querySelector('.whoseHighScore');
let timer = document.querySelector('.ticktock');
let mason = document.querySelector('main');
let startBtn = document.querySelector('.startGame');
let questionBox = document.querySelector('.questionaire');
const questions = document.querySelector('.questions');
const answers = document.querySelector('.answers');
let feedBack = document.querySelector('.feedback');
let qnA = [{que: 'What year did JavaScript get published?', ans:['1955', '1999', '1995','2010']}, {que: 'What does HTML stand for?', ans:['Hiding Text Mobile Link', 'HyperText Markup Language', 'Hey There Marekting Language', 'HyperText Marking Language']}, {que: 'If HTML is the bones, and JavaScript the brain, what is CSS?', ans: ['The Skin', 'The Eyes', 'The Heart', 'The Feet']}, {que: 'What is a method in JavaScript?', ans: ['The way we go about things', 'The best solution', 'The way of the force', 'A function within an object']}, {que: "If you don't code today what will happen?", ans: ["You won't remember as much", "You'll not get that dream job in tech", "Bye bye to the title of being the best there is", "All of the above"]}];

let strtButton = document.createElement('button');
strtButton.textContent = 'Start Game';
strtButton.className = 'startBTN'
startBtn.appendChild(strtButton);

const aQuestion = 0;
const anAnswer = 0;
let countdown = 25;
timer.textContent = countdown + ' seconds';


highScoreBoard.addEventListener('mouseover', (e) => {
    e.target.style.color = 'red';
    setTimeout(() => {
        e.target.style.color = "";
      }, 1000);
})
startBtn.addEventListener('click', btnDisappear);

const iHave = qnA.map(theQuestion => theQuestion.que);
const iWant = qnA.map(theAnswer => theAnswer.ans);
// const iNeed = iWant.map(findAnswer => findAnswer);
iWant.forEach((item) => {console.log(item);})
const solution = iHave[Math.floor(Math.random() * iHave.length)];
const equation = iWant[Math.floor(Math.random() * iWant.length)];
console.log(iHave);
console.log(iWant[0][0]);

function timerStart(){

    setInterval(() => {
        if(countdown >= 2){
            countdown --;    
            timer.textContent = countdown + ' seconds';

            console.log(countdown);
    
        } else if(countdown === 1){
            countdown --;    
    
            timer.textContent = countdown + ' second';
    
        } else {
    
            alert('GAME OVER NOOB');
            return window.location.reload();
        }
    }, 1000);
    
}

highScoreBoard.addEventListener('click', function(e) {
    e.preventDefault;
    highScoreDisplay();
});

function btnDisappear(){
    timerStart();
    startBtn.style.display = 'none';
    
    quizBegin();
    // timesATicking();
}

function quizBegin(){
    questionBox.style.display = 'block';
    // document.querySelector('hr').style.display = 'block';
    questionBox.appendChild(questions);
    questionBox.appendChild(answers);
    const myQuestion = document.createElement('p');
    const theAnswers = document.createElement('ul');
    questions.appendChild(myQuestion);
    answers.appendChild(theAnswers);
    const myAnswerA = document.createElement('button');
    const myAnswerB = document.createElement('button');
    const myAnswerC = document.createElement('button');
    const myAnswerD = document.createElement('button');
    // const nxt = document.createElement('button');
    // nxt.className = 'next';
    myAnswerA.className = 'alpha';
    myAnswerB.className = 'bravo';
    myAnswerC.className = 'charlie';
    myAnswerD.className = 'delta';
    
    // question.appendChild(myQuestion);
    // questionBox.appendChild(theAnswers);
    // questionBox.appendChild(nxt);
    myAnswerA.appendChild(document.createElement('li'));
    myAnswerB.appendChild(document.createElement('li'));
    myAnswerC.appendChild(document.createElement('li'));
    myAnswerD.appendChild(document.createElement('li'));

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

    

    myAnswerA.addEventListener('click', (e) => {
        // e.target = true;
        e.preventDefault;
        myAnswerA.disabled = false;
        myAnswerB.disabled = true;
        myAnswerC.disabled = true;
        myAnswerD.disabled = true;
        wrongAnswerResult(myAnswerA);
        console.log('Wrong!');
    });
    myAnswerB.addEventListener('click', (e) => {
        // e.target = true;
        e.preventDefault;
        myAnswerA.disabled = true;
        myAnswerB.disabled = false;
        myAnswerC.disabled = true;
        myAnswerD.disabled = true;
        wrongAnswerResult(myAnswerB);
        console.log('Wrong!');
    });
    myAnswerC.addEventListener('click', (e) => {
        // e.target = true;
        e.preventDefault;
        myAnswerA.disabled = true;
        myAnswerB.disabled = true;
        myAnswerC.disabled = false;
        myAnswerD.disabled = true;
        // correctanswerResult();
        nextQuestion();
        console.log('Correct!');
    });
    myAnswerD.addEventListener('click', (e) => {
        // e.target = true;
        e.preventDefault;
        myAnswerA.disabled = true;
        myAnswerB.disabled = true;
        myAnswerC.disabled = true;
        myAnswerD.disabled = false;
        wrongAnswerResult(myAnswerD);
        console.log('Wrong!');
    });
    function wrongAnswerResult(wrongAnswer){
        // this will take away 5secs from the timer
        countdown -= countdown - (countdown - 5);
        timer.textContent = countdown + ' seconds';
        setTimeout(() => {
            wrongAnswer.disabled = true;
            setTimeout(() => {
                nextQuestion();
            }, 1300)
        }, 800)
        const theResult = document.createElement('p');
        const headLight = document.createElement('h3');
        headLight.appendChild(theResult);
        feedBack.appendChild(headLight);
        feedBack.style.display = 'block';
        theResult.textContent = 'Wrong Answer!'
    };

    function nextQuestion(){
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

        myAnswerA.addEventListener('click', (e) => {
            // e.target = true;
            e.preventDefault;
            myAnswerA.disabled = false;
            myAnswerB.disabled = true;
            myAnswerC.disabled = true;
            myAnswerD.disabled = true;
            wrongAnswerResult(myAnswerA);
            console.log('Wrong!');
        });
        myAnswerB.addEventListener('click', (e) => {
            // e.target = true;
            e.preventDefault;
            myAnswerA.disabled = true;
            myAnswerB.disabled = false;
            myAnswerC.disabled = true;
            myAnswerD.disabled = true;
            // correctAnswerResult();
            setTimeout(() => {
                myAnswerB.disabled = true;
                setTimeout(() => {
                    thirdQuestion();
                    
                }, 1300);
            }, 800);

            console.log('Correct!');
        });
        myAnswerC.addEventListener('click', (e) => {
            // e.target = true;
            e.preventDefault;
            myAnswerA.disabled = true;
            myAnswerB.disabled = true;
            myAnswerC.disabled = false;
            myAnswerD.disabled = true;
            // correctanswerResult();
            wrongAnswerResult(myAnswerC);

            console.log('Wrong!');
        });

        myAnswerD.addEventListener('click', (e) => {
            // e.target = true;
            e.preventDefault;
            myAnswerA.disabled = true;
            myAnswerB.disabled = true;
            myAnswerC.disabled = true;
            myAnswerD.disabled = false;
            wrongAnswerResult(myAnswerD);
            console.log('Wrong!');
        });
    }

    function thirdQuestion(){
        myAnswerA.disabled = false;
        myAnswerB.disabled = false;
        myAnswerC.disabled = false;
        myAnswerD.disabled = false;
        myQuestion.textContent = iHave[1];
        answerA = iWant[2][0];
        answerB = iWant[2][1];
        answerC = iWant[2][2];
        answerD = iWant[2][3];

        myAnswerA.textContent = answerA;
        myAnswerB.textContent = answerB;
        myAnswerC.textContent = answerC;
        myAnswerD.textContent = answerD;

        myAnswerA.addEventListener('click', (e) => {
            // e.target = true;
            e.preventDefault;
            myAnswerA.disabled = false;
            myAnswerB.disabled = true;
            myAnswerC.disabled = true;
            myAnswerD.disabled = true;
            setTimeout(() => {
                myAnswerA.disabled = true;
                setTimeout(() => {
                    fourthQuestion();
                    
                }, 1300);
            }, 800);

            console.log('Correct!');
        });
        myAnswerB.addEventListener('click', (e) => {
            // e.target = true;
            e.preventDefault;
            myAnswerA.disabled = true;
            myAnswerB.disabled = false;
            myAnswerC.disabled = true;
            myAnswerD.disabled = true;
            // correctAnswerResult();
            wrongAnswerResult(myAnswerB);

            console.log('Wrong!');
        });
        myAnswerC.addEventListener('click', (e) => {
            // e.target = true;
            e.preventDefault;
            myAnswerA.disabled = true;
            myAnswerB.disabled = true;
            myAnswerC.disabled = false;
            myAnswerD.disabled = true;
            // correctanswerResult();
            wrongAnswerResult(myAnswerC);

            console.log('Wrong!');
        });

        myAnswerD.addEventListener('click', (e) => {
            // e.target = true;
            e.preventDefault;
            myAnswerA.disabled = true;
            myAnswerB.disabled = true;
            myAnswerC.disabled = true;
            myAnswerD.disabled = false;
            wrongAnswerResult(myAnswerD);
            console.log('Wrong!');
        });
    }

    function fourthQuestion(){
        myAnswerA.disabled = false;
        myAnswerB.disabled = false;
        myAnswerC.disabled = false;
        myAnswerD.disabled = false;
        myQuestion.textContent = iHave[1];
        answerA = iWant[3][0];
        answerB = iWant[3][1];
        answerC = iWant[3][2];
        answerD = iWant[3][3];

        myAnswerA.textContent = answerA;
        myAnswerB.textContent = answerB;
        myAnswerC.textContent = answerC;
        myAnswerD.textContent = answerD;

        myAnswerA.addEventListener('click', (e) => {
            // e.target = true;
            e.preventDefault;
            myAnswerA.disabled = false;
            myAnswerB.disabled = true;
            myAnswerC.disabled = true;
            myAnswerD.disabled = true;
            wrongAnswerResult(myAnswerA);
            console.log('Wrong!');
        });
        myAnswerB.addEventListener('click', (e) => {
            // e.target = true;
            e.preventDefault;
            myAnswerA.disabled = true;
            myAnswerB.disabled = false;
            myAnswerC.disabled = true;
            myAnswerD.disabled = true;
            // correctAnswerResult();
            wrongAnswerResult(myAnswerB);


            console.log('Wrong!');
        });
        myAnswerC.addEventListener('click', (e) => {
            // e.target = true;
            e.preventDefault;
            myAnswerA.disabled = true;
            myAnswerB.disabled = true;
            myAnswerC.disabled = false;
            myAnswerD.disabled = true;
            // correctanswerResult();
            wrongAnswerResult(myAnswerC);

            console.log('Wrong!');
        });

        myAnswerD.addEventListener('click', (e) => {
            // e.target = true;
            e.preventDefault;
            myAnswerA.disabled = true;
            myAnswerB.disabled = true;
            myAnswerC.disabled = true;
            myAnswerD.disabled = false;
            setTimeout(() => {
                myAnswerD.disabled = true;
                setTimeout(() => {
                    fifthQuestion();
                    
                }, 1300);
            }, 800);
            console.log('Correct!');
        });
    }

    function fifthQuestion(){
        myAnswerA.disabled = false;
        myAnswerB.disabled = false;
        myAnswerC.disabled = false;
        myAnswerD.disabled = false;
        myQuestion.textContent = iHave[1];
        answerA = iWant[4][0];
        answerB = iWant[4][1];
        answerC = iWant[4][2];
        answerD = iWant[4][3];

        myAnswerA.textContent = answerA;
        myAnswerB.textContent = answerB;
        myAnswerC.textContent = answerC;
        myAnswerD.textContent = answerD;

        myAnswerA.addEventListener('click', (e) => {
            // e.target = true;
            e.preventDefault;
            myAnswerA.disabled = false;
            myAnswerB.disabled = true;
            myAnswerC.disabled = true;
            myAnswerD.disabled = true;
            wrongAnswerResult(myAnswerA);
            console.log('Wrong!');
        });
        myAnswerB.addEventListener('click', (e) => {
            // e.target = true;
            e.preventDefault;
            myAnswerA.disabled = true;
            myAnswerB.disabled = false;
            myAnswerC.disabled = true;
            myAnswerD.disabled = true;
            // correctAnswerResult();
            wrongAnswerResult(myAnswerB)

            console.log('Wrong');
        });
        myAnswerC.addEventListener('click', (e) => {
            // e.target = true;
            e.preventDefault;
            myAnswerA.disabled = true;
            myAnswerB.disabled = true;
            myAnswerC.disabled = false;
            myAnswerD.disabled = true;
            // correctanswerResult();
            wrongAnswerResult(myAnswerC);

            console.log('Wrong!');
        });

        myAnswerD.addEventListener('click', (e) => {
            // e.target = true;
            e.preventDefault;
            myAnswerA.disabled = true;
            myAnswerB.disabled = true;
            myAnswerC.disabled = true;
            myAnswerD.disabled = false;
            setTimeout(() => {
                
            }, 1300)

            setTimeout(() => {
                myAnswerD.disabled = true;
                setTimeout(() => {
                    gatherScore();
                    alert('You have successfully passed');
                }, 1300);
            }, 800);
            console.log('Correct!');
        });
    }
};

