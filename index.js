let scoreHome= document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

let homeScoreBtnOne = document.getElementById("home-score-button-1")
let homeScoreBtnTwo = document.getElementById("home-score-button-2")
let homeScoreBtnThree = document.getElementById("home-score-button-3")

let guestScoreBtnOne = document.getElementById("guest-score-button-1")
let guestScoreBtnTwo = document.getElementById("guest-score-button-2")
let guestScoreBtnThree = document.getElementById("guest-score-button-3")

let guestScore= 0;
let homeScore = 0;


function add1(){
  homeScore += 1
  scoreHome.textContent = homeScore
}
function add2(){
   homeScore += 2
  scoreHome.textContent = homeScore
}
function add3(){
     homeScore += 3
  scoreHome.textContent = homeScore
}


function gadd1(){
  guestScore += 1
  scoreGuest.textContent = guestScore
}
function gadd2(){
    guestScore += 2
    scoreGuest.textContent = guestScore
}
function gadd3(){
     guestScore += 3
    scoreGuest.textContent = guestScore
}