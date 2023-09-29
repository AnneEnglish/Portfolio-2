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
];

// Variables to represent buttons and content areas
let previousButton = document.getElementById('previous');
let nextButton = document.getElementById('next');
let submitButton = document.getElementById('submit');
let restartButton = document.getElementById('restart');
let userScore = document.getElementById('score');
let questionText = document.getElementById('question-text');
let optionsArea = document.getElementById('opt');

// Variables for questions and score
let currentQuestion = 0;
let score = 0;

/*!BUG FIX 1! Flag variable to track if the quiz has been submitted already or 
not*/
let quizSubmitted = false;

/* !BUG FIX 2! Array to keep track of whether each question was answered 
correctly*/
let questionAnsweredCorrectly = Array(askQuestions.length).fill(false);

// Function to load the questions
function loadQuiz() {
    questionText.innerHTML = askQuestions[currentQuestion].question;
    optionsArea.innerHTML = '';

    /* For loop to iterate over the options while creating HTML elements
    for each option and also appending them to the optionsArea element */
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

/* Display user's score after completing the quiz, update userScore text with 
score*/
function loadScore() {
    userScore.textContent =`Well done on completing this quiz! Your score is 
    ${score} out of ${askQuestions.length}!`;
}

function updateScore() {
    score = 0;
    for (let i = 0; i < askQuestions.length; i++) {
        if (questionAnsweredCorrectly[i]) {
            score++;
        }
    }
}


function previousQuestion() {
    /* !BUG FIX 2! Check and see if the current questions was answered correctly
    before if it was decrement the score*/
    if (currentQuestion > 0) {
        if (questionAnsweredCorrectly[currentQuestion]) {
            score--;
            questionAnsweredCorrectly[currentQuestion] = false;
        }
        currentQuestion--;
        loadQuiz();
        updateScore();
    }
}

// Increment currentQuestions and load next question
function displayNextQuestion() {
    if (currentQuestion < askQuestions.length - 1) {
        currentQuestion++;
        loadQuiz();
    }
}

function nextQuestion() {
    let selectedRadio = document.querySelector('input[name="answer"]:checked');
    let selectedAnswer = parseInt(selectedRadio.value);
    handleAnswer(selectedAnswer);
    displayNextQuestion();
}

/* Check if the answer is correct and update the score accordingly.
!BUG FIX 2! Parts of the function below were edited to help fix the second bug*/
function handleAnswer(selectedAnswer) {
    if (askQuestions[currentQuestion].answer[selectedAnswer].isCorrect) {
        if (!questionAnsweredCorrectly[currentQuestion]) {
            score++;
            questionAnsweredCorrectly[currentQuestion] = true;
        }
    } else {
        questionAnsweredCorrectly[currentQuestion] = false;
    }
}

// Reset quiz to initial state, including current question and score
function restartQuiz() {
    // Reset current question and score to zero
    currentQuestion = 0;
    score = 0;
    loadQuiz();

    // Clear the user score text
    userScore.textContent = '';

    // Enable the submit button
    submitButton.disabled = false;

    // Reset the flag for quizSubmitted
    quizSubmitted = false;

    // !BUG FIX 3! Making the next and previous buttons visible again
    previousButton.style.display = 'inline-block';
    nextButton.style.display = 'inline-block';

    // Recalculate the score
    updateScore();
}

/* Function called when user clicks submit. Check if all questions have been 
answered and calculate final score*/
function checkAnswers() {
    let selectedRadio = document.querySelector('input[name="answer"]:checked');
    
    if (selectedRadio) {
        let selectedAnswer = parseInt(selectedRadio.value);
    
        if (askQuestions[currentQuestion].answer[selectedAnswer].isCorrect) {
            if (!questionAnsweredCorrectly[currentQuestion]) {
                score++;
                questionAnsweredCorrectly[currentQuestion] = true;
            }
        } else {
            questionAnsweredCorrectly[currentQuestion] = false;
        } 

        loadScore();

        // !BUG FIX 1! Disbale submit button once quiz has been submitted
        submitButton.disabled = true;
        quizSubmitted = true;
        // Hide buttons once quiz has been submitted
        previousButton.style.display = 'none';
        nextButton.style.display = 'none';
    } else {
        alert('Please answer all questions first');
    }
}

// Onclick events for buttons
previousButton.addEventListener('click', previousQuestion);
/* !BUG FIX 1! Add function to submitButton event listener that stops it from adding 
the score multiple times if clicked repeatedly at end of quiz*/
submitButton.addEventListener('click', function () {
    if (!quizSubmitted) {
        checkAnswers();
    }
});
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);

// Load the first question when the page loads
loadQuiz();