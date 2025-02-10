let corr = 0;
let countdownInterval = null;
let points = 0;

// Initialize the game by generating the first question
generateRandomQuestion();

function generateRandomQuestion() {
  console.log("Generating a new question...");

  // Generate two random numbers based on the points level
  let num1, num2;
  if (points < 2) {
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10) + 1;
  } else if (points < 4) {
    document.body.style.backgroundImage="url('res/bg3.gif')";
    num1 = Math.floor(Math.random() * 50);
    num2 = Math.floor(Math.random() * 50) + 1;
  } else {
    document.body.style.backgroundImage="url('res/bg8.gif')";
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100) + 1;
  }

  // Generate a random operator
  const ops = ["+", "-", "*", "/"];
  const operator = ops[Math.floor(Math.random() * ops.length)];

  // Display the question
  const ques = document.querySelector(".question");
  ques.textContent = `${num1} ${operator} ${num2}`;

  // Compute the correct answer
  let correctAnswer;
  switch (operator) {
    case "+":
      correctAnswer = num1 + num2;
      break;
    case "-":
      correctAnswer = num1 - num2;
      break;
    case "*":
      correctAnswer = num1 * num2;
      break;
    case "/":
      correctAnswer = num1 % num2 === 0 ? num1 / num2 : Math.floor(num1 / num2);
      break;
  }

  corr = correctAnswer;
  console.log(`New Question: ${num1} ${operator} ${num2}, Answer: ${corr}`);

  // Generate and shuffle options
  const options = [
    correctAnswer,
    correctAnswer + 3,
    correctAnswer + 1,
    correctAnswer - 3,
  ];
  options.sort(() => Math.random() - 0.5);

  // Update the radio button labels and values
  const labels = document.querySelectorAll("label");
  const radios = document.querySelectorAll('input[name="options"]');
  for (let i = 0; i < options.length; i++) {
    labels[i].textContent = options[i];
    radios[i].value = options[i];
    radios[i].checked = false;
  }

  resetTimer();
}

function resetTimer() {
  const timm = document.querySelector(".timer");
  let countdown = 10;

  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  timm.textContent = `Timer: ${countdown} seconds`;

  countdownInterval = setInterval(() => {
    countdown--;
    timm.textContent = `Timer: ${countdown} seconds`;

    if (countdown <= 0) {
      clearInterval(countdownInterval);
      alert("Time over! Generating a new question.");
      points = 0;
      updatePointsDisplay();
      generateRandomQuestion();
    }
  }, 1000);
}

function check(correctAnswer, selectedValue) {
  if (correctAnswer === selectedValue) {
    alert("Correct answer!");
    points++;
    updatePointsDisplay();
    generateRandomQuestion();
  } else {
    alert("Wrong answer! Redirecting to the home page.");
    points = 0;
    updatePointsDisplay();
    window.location.href = "mainPage.html";
  }
}

function updatePointsDisplay() {
  const pointsDisplay = document.querySelector(".points-display");
  pointsDisplay.textContent = `Points: ${points}`;
}

function submit() {
  const radios = document.querySelectorAll('input[name="options"]');
  let selectedValue = null;

  for (const radio of radios) {
    if (radio.checked) {
      selectedValue = Number(radio.value);
      break;
    }
  }

  if (selectedValue !== null) {
    check(corr, selectedValue);
  } else {
    alert("Please select an option!");
    points = 0;
    updatePointsDisplay();
    generateRandomQuestion();
  }
}
