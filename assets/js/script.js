// Questions that will be asked
let askQuestions = [
    {
        question: '1. Which famous river runs through Dublin?',
        answer: [
            { option: 'River Liffey', isCorrect: true },
            { option: 'River Boyne', isCorrect: false },
            { option: 'River Barrow', isCorrect: false },
            { option: 'River Nore', isCorrect: false }
        ]
    },
    {
        question: '2. What is the national symbol of Ireland?',
        answer: [
            { option: 'Pint of Guiness', isCorrect: false },
            { option: 'Shamrock', isCorrect: false },
            { option: 'The Harp', isCorrect: true },
            { option: 'Trinity Knot', isCorrect: false }
        ]
    },
    {
        question: "3. In which county is the Giant's Causeway located?",
        answer: [
            { option: 'Tyrone', isCorrect: false },
            { option: 'Armagh', isCorrect: false },
            { option: 'Derry', isCorrect: false },
            { option: 'Antrim', isCorrect: true }
        ]
    },
    {
        question: '4. What is the largest county in Ireland?',
        answer: [
            { option: 'Dublin', isCorrect: false },
            { option: 'Cork', isCorrect: true },
            { option: 'Galway', isCorrect: false },
            { option: 'Mayo', isCorrect: false }
        ]
    },
    {
        question: '5. What is the highest mountain in Ireland?',
        answer: [
            { option: 'Croagh Patrick', isCorrect: false },
            { option: 'Knockmealdown', isCorrect: false },
            { option: 'Brandon Peak', isCorrect: false },
            { option: 'Carrauntoohil', isCorrect: true }
        ]
    },
    {
        question: '6. What is the smallest county in Ireland',
        answer: [
            { option: 'Offaly', isCorrect: false },
            { option: 'Carlow', isCorrect: false },
            { option: 'Louth', isCorrect: true },
            { option: 'Waterford', isCorrect: false }
        ]
    },
    {
        question: '7. How many counties does County Tipperary border?',
        answer: [
            { option: 'Nine', isCorrect: false },
            { option: 'Seven', isCorrect: false },
            { option: 'Five', isCorrect: false },
            { option: 'Eight', isCorrect: true }
        ]
    },
    {
        question: '8. In Connacht, which county does not have a coastline?',
        answer: [
            { option: 'Roscommon', isCorrect: true },
            { option: 'Meath', isCorrect: false },
            { option: 'Laois', isCorrect: false },
            { option: 'Cavan', isCorrect: false }
        ]
    },
    {
        question: '9. Which river flows under Dublin Castle?',
        answer: [
            { option: 'Boyle River', isCorrect: false },
            { option: 'River Poddle', isCorrect: true },
            { option: 'Annalee River', isCorrect: false },
            { option: 'River Feale', isCorrect: false }
        ]
    },
    {
        question: '10. Where in Ireland would you find Bangor Erris?',
        answer: [
            { option: 'Wicklow', isCorrect: false},
            { option: 'Kildare', isCorrect: false},
            { option: 'Tipperary', isCorrect: false},
            { option: 'Mayo', isCorrect: true} 
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
        inputChoices.id = 'option' + (i + 1);

        let labelChoices = document.createElement('label');
        labelChoices.className = 'label-choices';
        labelChoices.setAttribute('for', 'option' + (i + 1));

        labelChoices.textContent = askQuestions[currentQuestion].answer[i].option;

        divChoices.appendChild(inputChoices);
        divChoices.appendChild(labelChoices);

        optionsArea.appendChild(divChoices);
    }
}

function loadScore() {
    userScore.textContent =
        `Well done on completing this quiz! Your score is ${score} out of 
        ${askQuestions.length}!`;
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
        alert('Please answer all questions first');
    }
}

// Onclick events for buttons
previousButton.addEventListener('click', previousQuestion);
submitButton.addEventListener('click', checkAnswers);
nextButton.addEventListener('click', nextQuestion);

// Load the first question when the page loads
loadQuiz();