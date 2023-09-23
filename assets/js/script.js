// Questions that will be asked
let askQuestions = [
    {
        question: 'question 1',
        answer: [
            { option: 'option 1', isCorrect: true },
            { option: 'option 2', isCorrect: false },
            { option: 'option 3', isCorrect: false },
            { option: 'option 4', isCorrect: false }
        ]
    },
    {
        question: 'question 2',
        answer: [
            { option: 'option 1', isCorrect: false },
            { option: 'option 2', isCorrect: false },
            { option: 'option 3', isCorrect: true },
            { option: 'option 4', isCorrect: false }
        ]
    },
    {
        question: 'question 3',
        answer: [
            { option: 'option 1', isCorrect: false },
            { option: 'option 2', isCorrect: false },
            { option: 'option 3', isCorrect: false },
            { option: 'option 4', isCorrect: true }
        ]
    },
    {
        question: 'question 4',
        answer: [
            { option: 'option 1', isCorrect: false },
            { option: 'option 2', isCorrect: true },
            { option: 'option 3', isCorrect: false },
            { option: 'option 4', isCorrect: false }
        ]
    },
    {
        question: 'question 5',
        answer: [
            { option: 'option 1', isCorrect: false },
            { option: 'option 2', isCorrect: false },
            { option: 'option 3', isCorrect: false },
            { option: 'option 4', isCorrect: true }
        ]
    },
    {
        question: 'question 6',
        answer: [
            { option: 'option 1', isCorrect: false },
            { option: 'option 2', isCorrect: false },
            { option: 'option 3', isCorrect: true },
            { option: 'option 4', isCorrect: false }
        ]
    },
    {
        question: 'question 7',
        answer: [
            { option: 'option 1', isCorrect: false },
            { option: 'option 2', isCorrect: false },
            { option: 'option 3', isCorrect: false },
            { option: 'option 4', isCorrect: true }
        ]
    },
    {
        question: 'question 8',
        answer: [
            { option: 'option 1', isCorrect: true },
            { option: 'option 2', isCorrect: false },
            { option: 'option 3', isCorrect: false },
            { option: 'option 4', isCorrect: false }
        ]
    },
    {
        question: 'question 9',
        answer: [
            { option: 'option 1', isCorrect: false },
            { option: 'option 2', isCorrect: true },
            { option: 'option 3', isCorrect: false },
            { option: 'option 4', isCorrect: false }
        ]
    },
    {
        question: 'question 10',
        answer: [
            {option: 'option 1', isCorrect: false},
            {option: 'option 2', isCorrect: false},
            {option: 'option 3', isCorrect: false},
            {option: 'option 4', isCorrect: true} 
        ]
    },
]

// Variables to represent buttons and content areas
let previousButton = document.getElementById('previous');
let nextButton = document.getElementById('next');
let submitButton = document.getElementById('submit');
let userScore = document.getElementById('score');
let questionText = document.getElementById('question-text');
let optionsArea = document.getElementById('opt');

// Variables for questions and score
let currentQuestion = 0;
let score = 0;

// Function to load the questions
function loadQuiz() {
    questionText.innerHTML = askQuestions[currentQuestion].question;
    optionsArea.innerHTML = '';

    for (let i = 0; i < askQuestions[currentQuestion].answer.length; i++) {
        let divChoices = document.createElement('div');
        divChoices.className = 'div-choices';

        let inputChoices = document.createElement('input');
        inputChoices.className = 'input-choices';
        inputChoices.type = 'radio';
        inputChoices.name = 'answer';
        inputChoices.value = i;
        inputChoices.id = 'option' + (i + 1); // Assign unique IDs to the input fields

        let labelChoices = document.createElement('label');
        labelChoices.className = 'label-choices';
        labelChoices.setAttribute('for', 'option' + (i + 1)); // Set the 'for' attribute

        labelChoices.textContent = askQuestions[currentQuestion].answer[i].option;

        divChoices.appendChild(inputChoices);
        divChoices.appendChild(labelChoices);

        optionsArea.appendChild(divChoices);
    }
}

function loadScore() {
    userScore.textContent =
        `Well done on completing this quiz! Your score is ${score} out of ${askQuestions.length}!`;
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuiz();
    }
}

function displayNextQuestion() {
    if (currentQuestion < askQuestions.length - 1) {
        currentQuestion++;
        loadQuiz();
    } else {
        loadScore();
    }
}

function nextQuestion() {
    let selectedRadio = document.querySelector('input[name="answer"]:checked');
    let selectedAnswer = parseInt(selectedRadio.value);
    handleAnswer(selectedAnswer);
    displayNextQuestion();
}

function handleAnswer(selectedAnswer) {
    if (askQuestions[currentQuestion].answer[selectedAnswer].isCorrect) {
        score++;
    }
}

function checkAnswers() {
    let selectedRadio = document.querySelector('input[name="answer"]:checked');
    
    if (selectedRadio) {
        let selectedAnswer = parseInt(selectedRadio.value);
    
        if (askQuestions[currentQuestion].answer[selectedAnswer].isCorrect) {
            score++;
        } 

        nextQuestion();
    } else {
        alert('Please select an answer');
    }

}

// Onclick events for buttons
previousButton.addEventListener('click', previousQuestion);
submitButton.addEventListener('click', checkAnswers);
nextButton.addEventListener('click', nextQuestion);

// Load the first question when the page loads
loadQuiz();