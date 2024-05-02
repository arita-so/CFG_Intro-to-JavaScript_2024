const questions = [
    {
        question: "What is the most common mistake that new runners make when starting out?",
        options: {
            a: "Running too fast 🏃💨",
            b: "Not stretching before running",
            c: "Not hydrating enough 🚰",
            d: "Not wearing the right shoes"
        },
        answer: "a",
        info: "\n\nA run should be at a pace where you can maintain a conversation without struggling for breath, if you can't speak in complete sentences while running, you're likely going too fast."
    },
    {
        question: "What is the distance of a half-marathon?",
        options: {
            a: "8.37km",
            b: "17.1km",
            c: "21.1km",
            d: "42.2km"
        },
        answer: "c",
        info: "\n\nHalf-Marathon is 21.1km (13.10 miles) and the Marathon is 42.195km (26.22 miles)."
    },
    {
        question: "What is the term for the ability of a runner to maintain a steady pace over a long distance?",
        options: {
            a: "Endurance",
            b: "Speed",
            c: "Power",
            d: "Flexibility"
        },
        answer: "a",
        info: "\n\nIt's the ability of a runner to sustain prolonged, submaximal exercise without fatigue. It's a combination of cardiovascular, muscular and psychological factors that allow an individual to maintain a steady pace over a long distance."
    },
    {
        question: "How many lanes are there on an Olympic track?",
        options: {
            a: "7️⃣",
            b: "8️⃣",
            c: "9️⃣",
            d: "🔟"
        },
        answer: "b",
        info: "\n\nThe Olympic track has 8 lanes."
    },
    {
        question: "How many laps around a track do you have to run to equal 1km?",
        options: {
            a: "1 lap",
            b: "1.5 laps",
            c: "2 laps",
            d: "2.5 laps"
        },
        answer: "d",
        info: "\n\nYou have to run 2.5 laps."
    },
    {
        question: "Which of the following is the proper running form?",
        options: {
            a: "Left arm moves with the left leg",
            b: "Left arm moves with the right leg",
            c: "Right arm moves with the right leg",
            d: "Your arms stay at your side"
        },
        answer: "b",
        info: "\n\nThe proper running form is when the left arm moves with the right leg. This is because the opposite arm and leg should move together to maintain balance and coordination while running."
    }
];

let currentQuestion = 0; //current question the user is answering
let score = 0;

//this function updates the displayed question on the webpage to the current question in the quiz
function loadQuestion() {
    const q = questions[currentQuestion]; //assigns the retrieved object to the constant q. The constant q now represents the current question object.
    document.getElementById('quizQuestion').innerText = q.question;
    document.getElementById('optionA').innerText = q.options.a;
    document.getElementById('optionB').innerText = q.options.b;
    document.getElementById('optionC').innerText = q.options.c;
    document.getElementById('optionD').innerText = q.options.d;
}

//this function validates the user's answer, provides feedback, and progresses through the quiz.
function quizCheckAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    //Checks if an option is selected and displays an alert if not.
    if (!selectedOption) {
        alert('Please select an option');
        return;
    }
    //Compares the selected answer with the correct answer and updates the score accordingly.
    //Displays feedback to the user based on whether the answer was correct or incorrect.
    if (selectedOption.value === questions[currentQuestion].answer) {
        score++;
        alert(`🎉 Correct! 🎉 ${questions[currentQuestion].info}`);
    } else {
        alert(`😔 Wrong answer! 😔 The correct answer is ${questions[currentQuestion].options[questions[currentQuestion].answer]}. ${questions[currentQuestion].info}`);
    }

    currentQuestion++; //variable to move to the next question in the quiz
    //Advances to the next question or ends the quiz based on the current question index.
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

//this function is responsible for displaying the user's score and an appropriate message based on the score
function showResult() {
    document.getElementById('quiz').style.display = 'none'; //Hides the quiz section
    let message = ''; //determines the appropriate message to display based on the user's score
    if (score === questions.length) {
        message = "Congratulations!!! You are pro!!!";
    } else if (score >= Math.ceil(questions.length / 2)) {
        message = "Almost there!!!";
    } else {
        message = "Maybe next time. Try again!";
    }
    //display the user's score, the determined message, and a "Try Again" button
    document.getElementById('quizResult').innerHTML = `You scored ${score} out of ${questions.length}. <br>${message} <br><button class="quizBtn" onclick="restartQuiz()">Try Again</button>`;
}

//this function is responsible for resetting the quiz to its initial state, allowing the user to try the quiz again.
function restartQuiz() {
    currentQuestion = 0; //index reset to 0 (1st question will be loaded the next time loadQuestion() is called)
    score = 0; //score reset to 0
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('quizResult').innerHTML = ''; //removes the previous quiz result and "Try Again" button
    loadQuestion(); //loads the first question of the quiz, resetting the displayed question and options
}

//this function call ensures that the quiz starts with the first question
loadQuestion();