let botChose = document.getElementById("bot-choise")
let winner = document.getElementById("winner")
let vs = []
let botrandomVar = ["rock", "paper", "scissors"]
function rock() {
  vs.push ("rock")
  randomBot()
}

function paper() {
  vs.push ("paper")
  randomBot()
}


function scissors() {
  vs.push ("scissors")
  randomBot()
}


let random = Math.floor((Math.random() * 3));

function randomBot() {
  vs.push(botrandomVar[random])
  if (vs[1] === "rock") {
  botChose.innerHTML = `rock </br> <img class="bot-result" src="images/icons8-rock-50.png" alt="rock" />`
  }
  if (vs[1] === "paper") {
  botChose.innerHTML = `paper </br> <img class="bot-result" src="images/icons8-paper-50.png" alt="rock" />`
  }
  if (vs[1] === "scissors") {
  botChose.innerHTML = `scissors </br> <img class="bot-result" src="images/icons8-scissors-50.png" alt="rock" />`
  }
  result()
}

function result() {
  if (vs[0] === "rock" & vs[1] === "scissors") {
    winner.innerHTML = `you are the winner !   <img
    src="images/icons8-check-circle-50.png"
    alt="scissors"
  />  `
  }
  
  else if (vs[0] === "paper" & vs[1] === "rock") {
    winner.innerHTML = `you are the winner !   <img
    src="images/icons8-check-circle-50.png"
    alt="scissors"
  />  `
  }
  
 else if (vs[0] === "scissors" & vs[1] === "paper") {
    winner.innerHTML = `you are the winner !   <img
    src="images/icons8-check-circle-50.png"
    alt="scissors"
  />  `
  }
  

  else if (vs[0] === "rock" & vs[1] === "paper") {
    winner.innerHTML = `The bot is the winner !   <img
    src="images/icons8-cross-mark-button-50.png"
    alt="scissors"
  />  `
  }
  
  
  else if (vs[0] === "paper" & vs[1] === "scissors") {
    winner.innerHTML = `The bot is the winner !   <img
    src="images/icons8-cross-mark-button-50.png"
    alt="scissors"
  />  `
  }
  
  
  else if (vs[0] === "scissors" & vs[1] === "rock") {
    winner.innerHTML = `The bot is the winner !   <img
    src="images/icons8-cross-mark-button-50.png"
    alt="scissors"
  />  `
  }
  

  else if (vs[0] === vs[1]) {
    winner.innerHTML = `Draw `
  }

  console.log(vs)
  setTimeout(function(){
    location.reload();
}, 2000);
}