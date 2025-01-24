function generateRandomQuestion() {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const ops = ["+", "-", "*", "/"];
  const operator = ops[Math.floor(Math.random() * ops.length)];

  const ques = document.querySelector(".question");
  ques.textContent = `${num1} ${operator} ${num2}`;

  // evaluating the answer
  const correctAnswer = Math.floor(eval(`${num1} ${operator} ${num2}`));
  const options = [
    correctAnswer,
    correctAnswer + 3,
    correctAnswer + 1,
    correctAnswer - 3,
  ];

  // suffling the option
  options.sort(() => Math.random() - 0.5);

  const labels = document.querySelectorAll("label"); // Select all labels
  labels[0].textContent = options[0]; // Update text of the first label
  labels[1].textContent = options[1]; // Update text of the second label
  labels[2].textContent = options[2]; // Update text of the third label
  labels[3].textContent = options[3];
}

function createTimer() {
  const timm = document.querySelector(".timer");
  let countdown = 5; // Start countdown at 5 seconds

  timm.textContent = `Timer: ${countdown} seconds`;

  // Use setInterval for a countdown effect
  const interval = setInterval(() => {
    countdown--;
    timm.textContent = `Timer: ${countdown} seconds`;

    if (countdown <= 0) {
      clearInterval(interval); // Stop the timer when it reaches 0
      myGreeting();
    }
  }, 1000);
}
function myGreeting() {
  alert("Time over You looser");
}
function check(correctAnswer, answer ){
  if (correctAnswer==answer){
    generateRandomQuestion();
  }
  else{
    alert("Wrong answer");
  }
}
function submit(){
  
}
generateRandomQuestion();
// createTimer();
