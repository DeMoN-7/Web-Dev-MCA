let music = new Audio("res/music.mp3");
let click = new Audio("res/ting.mp3");
let gameOver = new Audio("res/gameOver.mp3");
let turn = "X";
let finish=false;

music.play();
// function to change the turn from x to o
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

// main logic for wining
const checkWin = () => {
  let textbox = document.getElementsByClassName("boxText");
  let winPattern = [
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 4, 8], 
    [2, 4, 6], 
  ];
  let line = document.querySelector(".line");
  let won=false;
  winPattern.forEach((e, index) => {
    if (
      textbox[e[0]].innerText === textbox[e[1]].innerText &&
      textbox[e[1]].innerText === textbox[e[2]].innerText &&
      textbox[e[0]].innerText !== ""
    ) {
      document.querySelector(".turnn").innerText = textbox[e[0]].innerText + " Won";
      finish = true;
      music.pause();
      won=true;
      // gameOver.play();

      // Make the line visible
      line.style.visibility = "visible";

      // Positioning the line
      let positions = [
        { top: "33.7%", left: "37.5%", rotate: "0deg" }, 
        { top: "49.5%", left: "37.5%", rotate: "0deg" }, 
        { top: "65.7%", left: "37.5%", rotate: "0deg" }, 
        { top: "50%", left: "29.7%", rotate: "90deg" }, 
        { top: "50%", left: "38.2%", rotate: "90deg" }, 
        { top: "50%", left: "46.7%", rotate: "90deg" }, 
        { top: "50%", left: "38%", rotate: "45deg" }, 
        { top: "50%", left: "38%", rotate: "-45deg" }, 
      ];

      // Apply styles based on the winning pattern index
      line.style.top = positions[index].top;
      line.style.left = positions[index].left;
      line.style.transform = `rotate(${positions[index].rotate})`;
    }
    
  });
  if (!won) {
    let allFilled = [...textbox].every(box => box.innerText !== "");
    if (allFilled) {
      document.querySelector(".turnn").innerText = "Draw";
      finish = true;
      music.pause();
    }
  }
};

// eventlistener for playing turn
document.querySelectorAll(".box").forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxText.innerText === "" && !finish) {
      boxText.innerText = turn;
      turn = changeTurn();
      click.play();
      checkWin();
      if(!finish){
        document.getElementsByClassName("turnn")[0].innerText =
        "Turn for " + turn;
      }
      console.log("clicked");
      
    }
  });
});

function reset(){
  location.reload(); 

}