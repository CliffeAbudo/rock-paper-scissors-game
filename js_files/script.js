let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
  let randomNumber  = Math.random();

if (randomNumber <= 0.33){
    return "rock";
}else if(randomNumber < 0.66){
    return "paper";
}else{
    return "scissors";
}
}


function getHumanChoice(){
   let answer = prompt("Pick a choice");
   return answer;
}
