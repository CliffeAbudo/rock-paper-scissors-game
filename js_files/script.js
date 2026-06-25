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



function playRound(humanChoice,computerChoice){

    humanChoice=humanChoice.toLowerCase();
    if (humanChoice === computerChoice){
         console.log("This is a draw");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
         humanScore ++ ;
         console.log("Human wins!rock beats scissors");
         
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
         humanScore ++ ;
         console.log("Human wins! paper beats rock");
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
         humanScore ++ ;
         console.log("Human wins! scissors beats paper");
    }
    else{
        computerScore ++ ;
        console.log("Computer wins");
         
    }

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);