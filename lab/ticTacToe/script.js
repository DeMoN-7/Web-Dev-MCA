let music=new Audio("res/music.mp3");
let click = new Audio("res/ting.mp3");
let gameOver=new Audio("res/gameOver.mp3");
let turn="X";

// function to change the turn from x to o
const changeTurn=()=>{
    return turn==="X"?"O":"X";
};


document.querySelectorAll(".box").forEach(element=>{
    let boxText=element.querySelector('.boxText');
    element.addEventListener('click',()=>{
        if(boxText.innerText===''){
            boxText.innerText=turn;
            changeTurn();
            click.play();
            // checkWin();
            console.log("clicked")
            document.querySelector(".turnn").innerText = "Turn for " + turn;

        }
    });
});