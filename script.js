document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');

    const questionContainer = document.getElementById('question-container');
    const questionText = document.getElementById('question-text');
    const choiceList = document.getElementById('choices-list');
    const resultContainer = document.getElementById('result-container');
    const scoreDisplay = document.getElementById('score');


    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris",
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars",
        },
        {
            question: "Who wrote 'Hamlet'?",
            choices: [
                "Charles Dickens",
                "Jane Austen",
                "William Shakespeare",
                "Mark Twain",
            ],
            answer: "William Shakespeare",
        },
    ];

    // variable to track the question list
    let currentQuestionIndex = 0;
    let score = 0;

    startBtn.addEventListener("click", startQuiz);
    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        }
        else {
            showResult();
        }
    });
    restartBtn.addEventListener("click", () => {
        currentQuestionIndex = 0;
        score = 0;
        resultContainer.classList.add('hiddent');
        startQuiz();
    })

    function startQuiz() {
        startBtn.classList.add("hidden");
        resultContainer.classList.add('hidden');
        questionContainer.classList.remove('hidden');
        showQuestion();
    }

    function showQuestion() {
        nextBtn.classList.add('hidden');
        questionText.textContent = questions[currentQuestionIndex].question;
        choiceList.innerHTML = ""; // clear previous choices.
        // display all the choices.
        questions[currentQuestionIndex].choices.forEach((choice) => {
            const li = document.createElement('li');
            li.textContent = choice;
            li.addEventListener('click', () => checkAnswer(choice));
            choiceList.appendChild(li);
        })
    }
    function checkAnswer(choice) {

        const correctAnswer = questions[currentQuestionIndex].answer;
        if (correctAnswer === choice) {
            score++;
        }
        nextBtn.classList.remove('hidden');
    }

    function showResult() {
        questionContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        scoreDisplay.textContent = `${score} out of ${questions.length}`;
    }



})