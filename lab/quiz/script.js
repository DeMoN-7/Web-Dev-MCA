let corr = 0;
let countdownInterval = null; // Global variable to track the timer interval
let points=null;
function generateRandomQuestion() {
  console.log("Generating a new question...");

  // Generate two random numbers
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100) + 1; // Avoid division by zero
  const ops = ["+", "-", "*", "/"];
  const operator = ops[Math.floor(Math.random() * ops.length)];

  // Display the question
  const ques = document.querySelector(".question");
  ques.textContent = `${num1} ${operator} ${num2}`;
  console.log(`New Question: ${num1} ${operator} ${num2}`);

  // Evaluate the correct answer
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
      correctAnswer = Math.floor(num1 / num2);
      break;
  }

  corr = correctAnswer; // Update the global variable
  console.log("Correct Answer Set:", corr);

  // Generate options
  const options = [
    correctAnswer,
    correctAnswer + 3,
    correctAnswer + 1,
    correctAnswer - 3,
  ];

  // Shuffle the options
  options.sort(() => Math.random() - 0.5);

  // Update radio button labels and values
  const labels = document.querySelectorAll("label");
  const radios = document.querySelectorAll('input[name="options"]');
  for (let i = 0; i < options.length; i++) {
    labels[i].textContent = options[i];
    radios[i].value = options[i];
    radios[i].checked = false; // Uncheck all radios
  }
  console.log("Options Updated:", options);

  // Reset the timer
  resetTimer();
}

function resetTimer() {
  console.log("Resetting the timer...");
  const timm = document.querySelector(".timer");
  let countdown = 10; // Start countdown at 10 seconds

  // Clear any existing timer
  if (countdownInterval) {
    clearInterval(countdownInterval);
    console.log("Cleared existing timer.");
  }

  // Display the timer and start counting down
  timm.textContent = `Timer: ${countdown} seconds`;
  countdownInterval = setInterval(() => {
    countdown--;
    timm.textContent = `Timer: ${countdown} seconds`;
    console.log("Timer Countdown:", countdown);

    if (countdown <= 0) {
      clearInterval(countdownInterval); // Stop the timer
      console.log("Timer ran out. Generating a new question.");
      alert("Time over! You lose.");
      // generateRandomQuestion(); // Load a new question
    }
  }, 1000);
}

function check(correctAnswer, selectedValue) {
  console.log("Checking answer...");
  console.log("Correct Answer:", correctAnswer);
  console.log("Selected Value:", selectedValue);

  if (correctAnswer === selectedValue) {
    alert("Correct answer");
    points++;
    generateRandomQuestion(); // Load a new question
  } else {
    alert("Wrong Answer Redirecting to home page");
    window.location.href="mainPage.html";
  }
}

function submit() {
  console.log("Submit button clicked.");
  const radios = document.querySelectorAll('input[name="options"]');
  let selectedValue = null;

  // Check which radio button is selected
  for (const radio of radios) {
    if (radio.checked) {
      selectedValue = Number(radio.value);
      break;
    }
  }

  if (selectedValue !== null) {
    console.log("Valid Option Selected:", selectedValue);
    check(corr, selectedValue); 
  } else {
    alert("Please select an option!"); // Handle no selection case
    console.log("No option selected.");
  }

}

// Start the first question
generateRandomQuestion();
