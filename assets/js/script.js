// Variables to represent buttons and content areas
let trueButton = document.getElementById('true');
let falseButton = document.getElementById('false');
let previousButton = document.getElementById('previous');
let nextButton = document.getElementById('next');
let submitButton = document.getElementById('submit');
let correctScore = document.getElementById('correct-score');
let incorrectScore = document.getElementById('incorrect-score');
let questionText = document.getElementById('question-text');

// Onclick events for buttons
previousButton.addEventListener('click', previous);
nextButton.addEventListener('click', next);
submitButton.addEventListener('click', submit);

// Questions that will be asked
let questions = [
    {
        question: 'question 1',
        answers: [
            { option: 'True', answer: true },
            { option: 'False', answer: false }
        ]
    },
    {
        question: 'question 2',
        answers: [
            {option: 'True', answer:true},
            {option: 'False', answer:false}
        ]
    },
    {
        question: 'question 3',
        answers: [
            { option: 'True', answer: true },
            { option: 'False', answer: false }
        ]
    },
    {
        question: 'question 4',
        answers: [
            { option: 'True', answer: true },
            { option: 'False', answer: false }
        ]
    },
    {
        question: 'question 5',
        answers: [
            { option: 'True', answer: true },
            { option: 'False', answer: false }
        ]
    },
    {
        question: 'question 6',
        answers: [
            { option: 'True', answer: true },
            { option: 'False', answer: false }
        ]
    },
    {
        question: 'question 7',
        answers: [
            { option: 'True', answer: true },
            { option: 'False', answer: false }
        ]
    },
    {
        question: 'question 8',
        answers: [
            { option: 'True', answer: true },
            { option: 'False', answer: false }
        ]
    },
    {
        question: 'question 9',
        answers: [
            { option: 'True', answer: true },
            { option: 'False', answer: false }
        ]
    },
    {
        question: 'question 10',
        answers: [
            { option: 'True', answer: true },
            { option: 'False', answer: false }
        ]
    }
]

// Variables for questions and score
let currentQuestion = 0;
let score = 0;

// Function to load the questions
function quizQuestions() {
    questionText.innerHTML = questions[currentQuestion].question;
    trueButton.innerHTML = questions[currentQuestion].answers[0].option;
}