// Iteration 8: Making scoreboard functional
const scoreboard=document.getElementById("score-board");
scoreboard.innerHTML=localStorage.getItem('total')

const playagainbutton=document.getElementById("play-again-button")
playagainbutton.onclick=function(){
    // window.location.href="index.html";
    window.location.href="index.html";
}
