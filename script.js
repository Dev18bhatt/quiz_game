document.addEventListener('DOMContentLoaded', () => {


    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');
    const questionContainer = document.getElementById('question-container');
    const questionText = document.getElementById('question-text');
    const choicesList = document.getElementById('choices-list');
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
    let score = 0;
    let questionIndex = 0;

    startBtn.addEventListener('click', startQuiz);
    function startQuiz() {
        startBtn.classList.add('hidden');
        resultContainer.classList.add('hidden');
        questionContainer.classList.remove('hidden');
        showQuestion();
    }
    function showQuestion() {
        nextBtn.classList.add('hidden');
        questionText.textContent = questions[questionIndex].question;
        choicesList.innerHTML = "";
        questions[questionIndex].choices.forEach((choice) => {
            const li = document.createElement('li');
            li.textContent = choice;
            li.addEventListener('click', () => { checkAns(choice) });
            choicesList.appendChild(li);
        })
    }
    function checkAns(choice) {
        const ans = questions[questionIndex].answer;
        if (ans === choice) {
            score++;
        }
        nextBtn.classList.remove('hidden');
    }
    nextBtn.addEventListener('click', () => {

        questionIndex++;
        if (questionIndex < questions.length) {
            showQuestion();
        }
        else {
            showResult();
        }
    });

    function showResult() {
        questionContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        scoreDisplay.textContent = `${score} out of ${questions.length}`;
    }

    restartBtn.addEventListener('click', () => {
        score = 0;
        questionIndex = 0;
        questionContainer.classList.remove('hidden');
        resultContainer.classList.add('hidden');
        startQuiz();
    })

})