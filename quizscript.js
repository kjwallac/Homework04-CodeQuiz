const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// list of all questions, choices, and answers
let questions = [
    {
      question: "Commonly used data types DO NOT include:",
      choice1: 'strings',
      choice2: 'booleans',
      choice3: 'alerts',
      choice4: 'numbers',
      answer: 3
    },
    {
      question: 'The condition in an if / else statement is enclosed within ____.',
      choice1: 'quotes',
      choice2: 'curly brackets',
      choice3: 'parentheses',
      choice4: 'square brackets',
      answer: 3
    },
    {
      question: 'Arrays in JavaScript can be used to store ____.',
      choice1: 'numbers and strings',
      choice2: 'other arrays',
      choice3: 'booleans',
      choice4: 'all of the above',
      answer: 4
    },
    {
      question: 'String values must be enclosed within ____ when being assigned to variables.',
      choice1: 'commas',
      choice2: 'curly brackets',
      choice3: 'quotes',
      choice4: 'parentheses',
      answer: 3 
    },
    {
      question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
      choice1: 'JavaScript',
      choice2: 'terminal / bash',
      choice3: 'for loops',
      choice4: 'console.log',
      answer: 4
    }
  ];

//Constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5

startQuiz = () => {
    questionCounter = 0;
    scores = 0;
    availableQuestions = [ ... questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the high score page
        return window.location.assign/('/highscore.html');
    }
    questionCounter++;    
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;
        
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        //apply incorrect class as default. Change to correct if selected answer matches correct answer
        let classToApply = 'incorrect';
        if (selectedAnswer == currentQuestion.answer) {
            classToApply = 'correct';
        }
        
        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);

        
    });
});

startQuiz();