//-----Menu Functionalities

//Get menu buttons
let toHome = document.getElementById("toHome");
let toRunning = document.getElementById("toRunning");
let toPaceCalculator = document.getElementById("toPaceCalculator");
let toHealth = document.getElementById("toHealth");
let toMealCalculator = document.getElementById("toMealCalculator");
let toBMI = document.getElementById("toBMI");
let toAbout = document.getElementById("toAbout");
let buttons = [
  toHome,
  toRunning,
  toPaceCalculator,
  toHealth,
  toMealCalculator,
  toBMI,
  toAbout
];

//Get pages content
let homeContent = document.getElementById("hide-home");
let quizContent = document.getElementById("hide-quiz");
let paceContent = document.getElementById("hide-pace-calc");
let mealContent = document.getElementById("hide-meal-calc");
let bmiContent = document.getElementById("hide-bmi");
let aboutContent = document.getElementById("hide-about");
let content = [
  homeContent,
  quizContent,
  paceContent,
  mealContent,
  bmiContent,
  aboutContent
];

//Function to show only the content of a given page
function showContent(toShow) {
  for (let i = 0; i < content.length; i++) {
    let cont = content[i];
    if (cont === toShow) {
      cont.style.display = "";
    } else {
      cont.style.display = "none";
    }
  }
}

//Make active exactly one menu button
function makeActive(button) {
  for (let i = 0; i < buttons.length; i++) {
    let but = buttons[i];
    if (but === button) {
      but.style.backgroundColor = "#64dfdf";
    } else {
      but.style.backgroundColor = "#72efdd";
    }
  }
}

//Menu functionalities
toHome.addEventListener("click", function () {
  showContent(homeContent);
  makeActive(toHome);
});
toRunning.addEventListener("click", function () {
  showContent(quizContent);
  makeActive(toRunning);
});
toPaceCalculator.addEventListener("click", function () {
  showContent(paceContent);
  makeActive(toPaceCalculator);
});
toMealCalculator.addEventListener("click", function () {
  showContent(mealContent);
  makeActive(toHealth);
});
toBMI.addEventListener("click", function () {
  showContent(bmiContent);
  makeActive(toHealth);
});
toAbout.addEventListener("click", function () {
  showContent(aboutContent);
  makeActive(toAbout);
});

//----- Quiz Functionalities
const questions = [
  {
    question:
      "What is the most common mistake that new runners make when starting out?",
    options: {
      a: "Running too fast 🏃💨",
      b: "Not stretching before running",
      c: "Not hydrating enough 🚰",
      d: "Not wearing the right shoes"
    },
    answer: "a",
    info:
      "\n\nA run should be at a pace where you can maintain a conversation without struggling for breath, if you can't speak in complete sentences while running, you're likely going too fast."
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
    info:
      "\n\nHalf-Marathon is 21.1km (13.10 miles) and the Marathon is 42.195km (26.22 miles)."
  },
  {
    question:
      "What is the term for the ability of a runner to maintain a steady pace over a long distance?",
    options: {
      a: "Endurance",
      b: "Speed",
      c: "Power",
      d: "Flexibility"
    },
    answer: "a",
    info:
      "\n\nIt's the ability of a runner to sustain prolonged, submaximal exercise without fatigue. It's a combination of cardiovascular, muscular and psychological factors that allow an individual to maintain a steady pace over a long distance."
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
    info:
      "\n\nThe proper running form is when the left arm moves with the right leg. This is because the opposite arm and leg should move together to maintain balance and coordination while running."
  }
];

let currentQuestion = 0; //current question the user is answering
let score = 0;

//this function updates the displayed question on the webpage to the current question in the quiz
function loadQuestion() {
  const q = questions[currentQuestion]; //assigns the retrieved object to the constant q. The constant q now represents the current question object.
  document.getElementById("quizQuestion").innerText = q.question;
  document.getElementById("optionA").innerText = q.options.a;
  document.getElementById("optionB").innerText = q.options.b;
  document.getElementById("optionC").innerText = q.options.c;
  document.getElementById("optionD").innerText = q.options.d;
  document.getElementById("quizFeedback").innerText = "";
  document.getElementById("quizNextBtn").style.display = "none";
  document.getElementById("quizNextBtn").innerText = "Next Question";
  document.getElementById("quizSubmitBtn").style.display = "";
  document.getElementById("quizOptions").style.display = "";
  var ele = document.getElementsByName("option");
  for (var i = 0; i < ele.length; i++) {
    ele[i].checked = false;
  }
}

//this function validates the user's answer, provides feedback, and progresses through the quiz.
function quizCheckAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  //Checks if an option is selected and displays an alert if not.
  if (!selectedOption) {
    alert("Please select an option");
    return;
  }
  //Compares the selected answer with the correct answer and updates the score accordingly.
  //Displays feedback to the user based on whether the answer was correct or incorrect.
  if (selectedOption.value === questions[currentQuestion].answer) {
    score++;
    // alert(`🎉 Correct! 🎉 ${questions[currentQuestion].info}`);
    document.getElementById("quizQuestion").innerText = `🎉 Correct! 🎉`;
    document.getElementById(
      "quizFeedback"
    ).innerText = `${questions[currentQuestion].info}`;
    document.getElementById("quizOptions").style.display = "none";
    document.getElementById("quizNextBtn").style.display = "";
    if (currentQuestion == questions.length - 1) {
      document.getElementById("quizNextBtn").innerText = "Results";
    }
    document.getElementById("quizSubmitBtn").style.display = "none";
  } else {
    document.getElementById("quizQuestion").innerText = `😔 Wrong answer! 😔`;
    document.getElementById(
      "quizFeedback"
    ).innerText = `The correct answer is ${
      questions[currentQuestion].options[questions[currentQuestion].answer]
    }. ${questions[currentQuestion].info}`;
    document.getElementById("quizOptions").style.display = "none";
    document.getElementById("quizNextBtn").style.display = "";
    if (currentQuestion == questions.length - 1) {
      document.getElementById("quizNextBtn").innerText = "Results";
    }
    document.getElementById("quizSubmitBtn").style.display = "none";
  }

  currentQuestion++; //variable to move to the next question in the quiz
}

function quizNext() {
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

//D-----isplaying the user's score and an appropriate message based on the score
function showResult() {
  document.getElementById("quiz").style.display = "none"; //Hides the quiz section
  let message = ""; //determines the appropriate message to display based on the user's score
  if (score === questions.length) {
    message = "Congratulations!!! You are pro!!!";
  } else if (score >= Math.ceil(questions.length / 2)) {
    message = "Almost there!!!";
  } else {
    message = "Maybe next time. Try again!";
  }
  //display the user's score, the determined message, and a "Try Again" button
  document.getElementById(
    "quizResult"
  ).innerHTML = `You scored ${score} out of ${questions.length}. <br>${message} <br><button class="quizBtn" onclick="restartQuiz()">Try Again</button>`;
}

//Resetting the quiz to its initial state, allowing the user to try the quiz again.
function restartQuiz() {
  currentQuestion = 0; //index reset to 0 (1st question will be loaded the next time loadQuestion() is called)
  score = 0; //score reset to 0
  document.getElementById("quiz").style.display = "block";
  document.getElementById("quizResult").innerHTML = ""; //removes the previous quiz result and "Try Again" button
  loadQuestion(); //loads the first question of the quiz, resetting the displayed question and options
}

//this function call ensures that the quiz starts with the first question
loadQuestion();

//-----Pace Calculator Functionalities
function calculatePace() {
  const distance = parseFloat(document.getElementById("distance").value) || 0;
  const hours = parseInt(document.getElementById("hours").value) || 0;
  const minutes = parseInt(document.getElementById("minutes").value) || 0;
  const seconds = parseInt(document.getElementById("seconds").value) || 0;

  console.log(`Distance: ${distance}`);
  console.log(`Hours: ${hours}`);
  console.log(`Minutes: ${minutes}`);
  console.log(`Seconds: ${seconds}`);

  // Validate input (optional)
  if (
    distance <= 0 ||
    hours < 0 ||
    minutes < 0 ||
    minutes > 59 ||
    seconds < 0 ||
    seconds > 59
  ) {
    alert("Please enter valid values for distance and time.");
    return;
  }

  const totalMinutes = hours * 60 + minutes + seconds / 60;
  const pace = totalMinutes / distance;
  const paceMinutes = Math.floor(pace);
  const paceSeconds = Math.round((pace - paceMinutes) * 60);

  const formattedSeconds = paceSeconds < 10 ? "0" + paceSeconds : paceSeconds;
  const paceResult = `Your Pace: <br> ${paceMinutes} min ${formattedSeconds} sec`;
  document.getElementById("pace-result").innerHTML = paceResult;
}

const calculatePaceButton = document.getElementById("calculate-pace");
const clearPaceButton = document.getElementById("clear-pace");

calculatePaceButton.addEventListener("click", calculatePace);
clearPaceButton.addEventListener("click", function () {
  document.getElementById("pace-result").textContent = "";
});

//-----Meal calories calculator Functionalities

document.addEventListener("DOMContentLoaded", function (event) {
  let counter = document.querySelector(".cal-counter").innerHTML;
});

let enoughFoodMsg = document.getElementById("enoughFoodMsg");

function calcCalories(event) {
  let counter = document.querySelector(".cal-counter");
  let startCalories = parseInt(counter.innerHTML, 10);
  let mealCalories = parseInt(event.target.value, 10);
  let totalCalories = startCalories + mealCalories;
  counter.innerHTML = totalCalories;
  if (totalCalories >= 2500) {
    counter.style.color = "red";
    enoughFoodMsg.className = "calories";
    enoughFoodMsg.textContent = "You ate enough!";
    enoughFoodMsg.style.color = "red";
    //alert("You ate enough!!");
  }
}

function reset() {
  var counter = document.querySelector(".cal-counter");
  counter.innerHTML = 0;
  counter.style.color = "black";
  enoughFoodMsg.textContent = "";
}

//-----BMI Calculator Functionalities
function calculateBMI(weight, height) {
  return weight / (height * height);
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal weight";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

function handleSubmit(event) {
  if (event.target.id === "calculateBMI") {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var bmi = calculateBMI(weight, height);
    var category = getBMICategory(bmi);
    document.getElementById("resultBMI").innerHTML =
      "Your BMI is: " + bmi.toFixed(2) + "<br>Category: " + category;
  }
}

document.getElementById("calculateBMI").addEventListener("click", handleSubmit);
document.getElementById("clearBMI").addEventListener("click", function () {
  document.getElementById("resultBMI").innerHTML = "";
});