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

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

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


for(let i = 0; i < 5; i++ ){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(humanSelection, computerSelection);

    playRound(humanSelection, computerSelection);

}

    //final result
    console.log("Final Score:");
    console.log("Human:", humanScore);
    console.log("Computer:", computerScore);


    if(humanScore > computerScore){
        console.log("You win the game!");
    }
    else if(computerScore > humanScore){
        console.log("Computer wins");
    }
    else{
        console.log("This game ends in a draw");
    }
}
playGame();