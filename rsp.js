var rockImg = '<img src="http://homastudio.com/img/rock.jpg" alt="rock">';
var paperImg = '<img src="http://homastudio.com/img/paper.jpg" alt="paper">';
var scissorsImg =
  '<img src="http://homastudio.com/img/scissors.jpg" alt="scissors">';

var rock = "Rock crushes scissors";
var paper = "Paper covers Rock";
var scissors = "Scissors Cuts Paper";
var you = "You Win! ";
var comp = "Computer Wins! ";
var tie = "Tie!";

var rnImg = [rockImg, paperImg, scissorsImg];
var mess = document.getElementById("message");
var ypoints = 0;
var cpoints = 0;

function pickRock() {
  var rn = Math.random()*3;
  rn = Math.floor(rn);
  document.getElementById("c-choice-img").innerHTML=rnImg[rn];
  document.getElementById("your-choice-img").innerHTML=rockImg;
    if (rnImg[rn]==scissorsImg) {                     document.getElementById('message').innerHTML=you+rock;
  mess.style.color = "#43A047";
   ypoints +=1;
  } else if (rnImg[rn]==paperImg) {
    document.getElementById('message').innerHTML=comp+paper;
    mess.style.color = "#D32F2F";
    cpoints+=1
  } else {
    document.getElementById('message').innerHTML=tie;
    mess.style.color = "#2962FF";
  }
  checkPoints();
}
function pickPaper() {
  var rn = Math.random()*3;
  rn = Math.floor(rn);
  document.getElementById("c-choice-img").innerHTML=rnImg[rn];
  document.getElementById("your-choice-img").innerHTML=paperImg;
     if (rnImg[rn]==rockImg) {                     document.getElementById('message').innerHTML=you+paper;
  mess.style.color = "#43A047";
   ypoints +=1;
  } else if (rnImg[rn]==scissorsImg) {
    document.getElementById('message').innerHTML=comp+scissors;
    mess.style.color = "#D32F2F";
    cpoints +=1;
  } else {
    document.getElementById('message').innerHTML=tie;
    mess.style.color = "#2962FF";
  }
  checkPoints();
}
function pickScissors() {
  var rn = Math.random()*3;
  rn = Math.floor(rn);
  document.getElementById("c-choice-img").innerHTML=rnImg[rn];
  document.getElementById("your-choice-img").innerHTML=scissorsImg;
    if (rnImg[rn]==paperImg) {                     document.getElementById('message').innerHTML=you+scissors;
  mess.style.color = "#43A047";
   ypoints +=1;
  } else if (rnImg[rn]==rockImg) {
    document.getElementById('message').innerHTML=comp+rock;
    mess.style.color = "#D32F2F";
    cpoints +=1;
  } else {
    document.getElementById('message').innerHTML=tie;
    mess.style.color = "#2962FF";
  }
  checkPoints();
}
function show() {
  document.getElementById('reset').style.opacity = 1;
}

function reset() {
  document.getElementById('c-choice-img').innerHTML="";
  document.getElementById('your-choice-img').innerHTML="";
  document.getElementById('message').innerHTML="";
  document.getElementById('rock-btn').disabled=false;
  document.getElementById('paper-btn').disabled=false;
  document.getElementById('scissors-btn').disabled=false;
  
  ypoints=0;
  cpoints=0;
}

function checkPoints() {
  if (ypoints>=5) {
    mess.innerHTML="Game Over - You Win!";
    mess.style.color = "#43A047";
    document.getElementById('rock-btn').disabled=false;
    document.getElementById('paper-btn').disabled=false;
    document.getElementById('scissors-btn').disabled=false;
  } else if (cpoints>=5) {
    mess.innerHTML="Game Over - Computer Wins.";
    mess.style.color = "#D32F2F";
    document.getElementById('rock-btn').disabled=false;
    document.getElementById('paper-btn').disabled=false;
    document.getElementById('scissors-btn').disabled=false;
  }
}
