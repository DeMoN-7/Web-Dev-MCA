function generateRandomQuestion() {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);

    const ops = ['+', '-', '*', '/'];
    const operator = ops[Math.floor(Math.random() * ops.length)];

    const ques = document.querySelector(".question");
    ques.append(num1, " ", operator, " ", num2); 
}
function createTimer(){
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
function myGreeting(){
    alert("Time over You looser");
}

generateRandomQuestion();
// createTimer();
