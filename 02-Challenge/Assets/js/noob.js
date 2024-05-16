let highScoreBoard = document.querySelector('.whoseHighScore');
let timer = document.querySelector('.ticktock');
let mason = document.querySelector('main');
let startBtn = document.querySelector('.startGame');
let questionBox = document.querySelector('.questionaire');
const questions = document.querySelector('.questions');
const answers = document.querySelector('.answers');
let feedBack = document.querySelector('.feedback');

// questions and answers as an array containing objects
let qnA = [{que: 'What year did JavaScript get published?', ans:['1955', '1999', '1995','2010']}, {que: 'What does HTML stand for?', ans:['Hiding Text Mobile Link', 'HyperText Markup Language', 'Hey There Marekting Language', 'HyperText Marking Language']}, {que: 'If HTML is the bones, and JavaScript the brain, what is CSS?', ans: ['The Skin', 'The Eyes', 'The Heart', 'The Feet']}, {que: 'What is a method in JavaScript?', ans: ['The way we go about things', 'The best solution', 'The way of the force', 'A function within an object']}, {que: "If you don't code today what will happen?", ans: ["You won't remember as much", "You'll not get that dream job in tech", "Bye bye to the title of being the best there is", "All of the above"]}];

// start button to get game initiated
let strtButton = document.createElement('button');
strtButton.textContent = 'Start Game';
strtButton.className = 'startBTN'
startBtn.appendChild(strtButton);

const aQuestion = 0;
const anAnswer = 0;


// setting timer to show in bold and putting it inside of it's parent element
let countdown = 25;
const time = document.createElement('h2');
time.textContent = countdown + ' sec';
// time.appendChild(timesATicking);
timer.appendChild(time);

const theResult = document.createElement('p');
const headLight = document.createElement('h3');
headLight.appendChild(theResult);
feedBack.appendChild(headLight);


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
// iWant.forEach((item) => {console.log(item);})
const solution = iHave[Math.floor(Math.random() * iHave.length)];
const equation = iWant[Math.floor(Math.random() * iWant.length)];
console.log(iHave);
console.log(...iWant);

// correctAnswerResult();

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

function correctAnswerResult(correctAnswer, followUpQuestion) {

    let correctAnswers = [
        iWant[0][2],
        iWant[1][1],
        iWant[2][0],
        iWant[3][3],
        iWant[4][3]
    ];

    // const correctAnswerFound = false;

    for (let i = 0; i < correctAnswers.length; i++) {
        if (correctAnswer === correctAnswers[i]) {
            
            feedBack.style.display = 'block';
            theResult.textContent = 'Right Answer!';
            setTimeout(() => {
                feedBack.style.display = 'none';
                followUpQuestion();
            }, 1500);

            // correctAnswerFound = true;
            break;
        }
    }

    // if (!correctAnswerFound) {
    //     winner();
    // }
}

function wrongAnswerResult(wrongAnswer, followUpQuestion) {
    let wrongAnswers = [
        [iWant[0][0], iWant[0][1], iWant[0][3]],
        [iWant[1][0], iWant[1][2], iWant[1][3]],
        [iWant[2][0], iWant[2][1], iWant[2][3]],
        [iWant[3][0], iWant[3][1], iWant[3][2]],
        [iWant[4][0], iWant[4][1], iWant[4][2]]
    ];

    // const wrongAnswerFound = false;
    
    for (let i = 0; i < wrongAnswers.length; i++) {
        if (wrongAnswers[i].includes(wrongAnswer)) {
            countdown -= 5;

            feedBack.style.display = 'block';
            theResult.textContent = 'Wrong Answer!';
            setTimeout(() => {
                feedBack.style.display = 'none';
                followUpQuestion();
            }, 1500);

            // wrongAnswerFound = true;
            break;
        }
    }

    // if (!correctAnswerFound) {
    //     loseGame();
    // }
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
    const answerArr = Array.from(document.querySelector('button'));
    // theAnswers.appendChild(answerArr);
    

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
    answerArr.push(myAnswerA, myAnswerB, myAnswerC, myAnswerD);
    console.log(answerArr);
    // let cycleAnswers = answerArr.forEach();
    // console.log(cycleAnswers);
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
        e.target = true;
        
        if (e.target){
            myAnswerA.disabled = true;
            setTimeout(() => {
                myAnswerB.disabled = true;
                myAnswerC.disabled = true;
                myAnswerD.disabled = true;
            }, 500);
            wrongAnswerResult(answerA, nextQuestion);
        }
    });

    myAnswerB.addEventListener('click', (e) => {
        e.target = true;
        if (e.target){
            myAnswerB.disabled = true;
            setTimeout(() => {
                myAnswerA.disabled = true;
                myAnswerC.disabled = true;
                myAnswerD.disabled = true;
            }, 500);
            wrongAnswerResult(answerB, nextQuestion);
        }
    });

    myAnswerC.addEventListener('click', (e) => {
        e.target = true;
        if (e.target){
            myAnswerC.disabled = true;
            setTimeout(() => {
                myAnswerA.disabled = true;
                myAnswerB.disabled = true;
                myAnswerD.disabled = true;
                correctAnswerResult(answerC, nextQuestion);
            }, 500);
        }
    });

    myAnswerD.addEventListener('click', (e) => {
        e.target = true;
        if (e.target){
            myAnswerD.disabled = true;
            setTimeout(() => {
                myAnswerA.disabled = true;
                myAnswerB.disabled = true;
                myAnswerC.disabled = true;
                wrongAnswerResult(answerD, nextQuestion);

            }, 500);
        }
    });

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
        
            if (e.target){
                myAnswerA.disabled = true;
                setTimeout(() => {
                    myAnswerB.disabled = true;
                    myAnswerC.disabled = true;
                    myAnswerD.disabled = true;
                }, 500);
                wrongAnswerResult(answerA, thirdQuestion);
            }
            
        });

        myAnswerB.addEventListener('click', (e) => {
            if (e.target){
                myAnswerB.disabled = true;
                setTimeout(() => {
                    myAnswerA.disabled = true;
                    myAnswerC.disabled = true;
                    myAnswerD.disabled = true;
                }, 500);
                correctAnswerResult(answerB, thirdQuestion);
            }
            console.log('Correct!');
        });

        myAnswerC.addEventListener('click', (e) => {
            if (e.target){
                myAnswerC.disabled = true;
                setTimeout(() => {
                    myAnswerA.disabled = true;
                    myAnswerB.disabled = true;
                    myAnswerD.disabled = true;
                }, 500);
                wrongAnswerResult(answerC, thirdQuestion);
            }
            console.log('Wrong!');
        });

        myAnswerD.addEventListener('click', (e) => {
            if (e.target){
                myAnswerD.disabled = true;
                setTimeout(() => {
                    myAnswerA.disabled = true;
                    myAnswerB.disabled = true;
                    myAnswerC.disabled = true;
                }, 500);
                wrongAnswerResult(answerD, thirdQuestion);
            }
            console.log('Wrong!');
        });
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

        myAnswerA.addEventListener('click', (e) => {
            // e.target = true;
            e.target = true;
            if (e.target){
                myAnswerA.disabled = true;
                setTimeout(() => {
                    myAnswerB.disabled = true;
                    myAnswerC.disabled = true;
                    myAnswerD.disabled = true;
                    correctAnswerResult(answerA, fourthQuestion);
                }, 500);
            }

            console.log('Correct!');
        });
        myAnswerB.addEventListener('click', (e) => {
            // e.target = true;
            e.target = true;
            if (e.target){
                myAnswerB.disabled = true;
                setTimeout(() => {
                    myAnswerA.disabled = true;
                    myAnswerC.disabled = true;
                    myAnswerD.disabled = true;
                    wrongAnswerResult(answerB, fourthQuestion);
                }, 500);
            }
            console.log('Wrong!');
        });

        myAnswerC.addEventListener('click', (e) => {
            // e.target = true;
            e.target = true;
            if (e.target){
                myAnswerC.disabled = true;
                setTimeout(() => {
                    myAnswerA.disabled = true;
                    myAnswerB.disabled = true;
                    myAnswerD.disabled = true;
                    wrongAnswerResult(answerC, fourthQuestion);
                }, 500);
            }

            console.log('Wrong!');
        });

        myAnswerD.addEventListener('click', (e) => {

            e.target = true;
            if (e.target){
                myAnswerC.disabled = true;
                setTimeout(() => {
                    myAnswerA.disabled = true;
                    myAnswerB.disabled = true;
                    myAnswerD.disabled = true;
                    wrongAnswerResult(answerD, fourthQuestion);
                }, 500);
            }
            console.log('Wrong!');
        });
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

        myAnswerA.addEventListener('click', (e) => {
            e.target = true;
            if (e.target){
                myAnswerA.disabled = true;
                setTimeout(() => {
                    myAnswerB.disabled = true;
                    myAnswerC.disabled = true;
                    myAnswerD.disabled = true;
                    wrongAnswerResult(answerA, fifthQuestion);
                }, 500);
            }
        });
        myAnswerB.addEventListener('click', (e) => {
            e.target = true;
            if (e.target){
                myAnswerB.disabled = true;
                setTimeout(() => {
                    myAnswerA.disabled = true;
                    myAnswerC.disabled = true;
                    myAnswerD.disabled = true;
                    wrongAnswerResult(answerB, fifthQuestion);
                }, 500);
            }
            console.log('Wrong!');
        });
        myAnswerC.addEventListener('click', (e) => {
            e.target = true;
            if (e.target){
                myAnswerC.disabled = true;
                setTimeout(() => {
                    myAnswerA.disabled = true;
                    myAnswerB.disabled = true;
                    myAnswerD.disabled = true;
                    wrongAnswerResult(answerC, fifthQuestion);
                }, 500);
            }

            console.log('Wrong!');
        });

        myAnswerD.addEventListener('click', (e) => {
            e.target = true;
            if (e.target){
                myAnswerD.disabled = true;
                setTimeout(() => {
                    myAnswerA.disabled = true;
                    myAnswerB.disabled = true;
                    myAnswerC.disabled = true;
                    correctAnswerResult(answerD, fifthQuestion);
                }, 500);
            }
            console.log('Correct!');
        });
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

        myAnswerA.addEventListener('click', (e) => {
            e.target = true;
            if (e.target){
                myAnswerA.disabled = true;
                setTimeout(() => {
                    myAnswerB.disabled = true;
                    myAnswerC.disabled = true;
                    myAnswerD.disabled = true;
                    wrongAnswerResult(answerA, fifthQuestion);
                }, 500);
            }
            console.log('Wrong!');
        });
        myAnswerB.addEventListener('click', (e) => {
            e.target = true;
            if (e.target){
                myAnswerB.disabled = true;
                setTimeout(() => {
                    myAnswerA.disabled = true;
                    myAnswerC.disabled = true;
                    myAnswerD.disabled = true;
                    wrongAnswerResult(answerB, fifthQuestion);
                }, 500);
            }
            console.log('Wrong');
        });

        myAnswerC.addEventListener('click', (e) => {
           e.target = true;
            if (e.target){
                myAnswerC.disabled = true;
                setTimeout(() => {
                    myAnswerA.disabled = true;
                    myAnswerB.disabled = true;
                    myAnswerD.disabled = true;
                    wrongAnswerResult(answerC, fifthQuestion);
                }, 500);
            }

            console.log('Wrong!');
        });

        myAnswerD.addEventListener('click', (e) => {
            e.target = true;
            if (e.target){
                myAnswerD.disabled = true;
                setTimeout(() => {
                    myAnswerA.disabled = true;
                    myAnswerB.disabled = true;
                    myAnswerC.disabled = true;
                    correctAnswerResult(answerD, fifthQuestion);
                }, 500);
            }

            // setTimeout(() => {
            //     myAnswerD.disabled = true;
            //     setTimeout(() => {
            //         gatherScore();
            //         alert('You have successfully passed');
            //     }, 1300);
            // }, 800);
            console.log('Correct!');
        });
    }
};



// function decode(message_file){
//     let saitama = 1;
//     while(saitama <= 6){
//         saitama++;
//         let seriousPunch = 1 * saitama;

//         if(message_file)
//     }
// }