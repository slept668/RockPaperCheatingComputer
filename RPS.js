var person = window.prompt ("How many rounds would you like to play?");
  person = parseInt(person);  
  let userWin= 0;
  let compWin = 0;
  let ties = 0;
  
  for (let i = 0; i< person; i++){
  var userChoice = window.prompt ("R, P, or S")
  let randomNumber = Math.floor(Math.random() * 3);  
  if (userChoice === "R" && randomNumber === 0){
    alert("Computer chose Rock, it's a tie!");
  }
  else if (userChoice === "R" && randomNumber === 1){
    alert("The computer chose paper, you lose!");
  }
  else if (userChoice === "R" && randomNumber === 2){
    alert("The computer chose Scissors, you win!");
  }
  else if (userChoice === "P" && randomNumber === 0){
    alert("The computer chose Rock, you win!");
  }
  else if (userChoice === "P" && randomNumber === 1){
    alert("The computer chose Paper, it's a tie!");
  }
  else if(userChoice === "P" && randomNumber === 2){
    alert("The computer chose Scissors, you lose!")
  }
  else if (userChoice === "S" && randomNumber === 0){
    alert("The computer chose Rock, you lose!");
  }
  else if (userChoice === "S" && randomNumber === 1){
    alert("The computer chose Paper, you a Win!");
  }
  else if(userChoice === "S" && randomNumber === 2){
    alert("The computer chose Scissors, it's a tie!")
  }
  else {
    alert("Sorry, that command is unavailable, please enter R for Rock, P for paper or S for scissors, or use a capital letter")
  }  if (userChoice === "R" && randomNumber === 0){
    ties++
    alert(userWin + "-" +compWin + "-" +ties);
  }
  else if (userChoice === "R" && randomNumber === 1){
    compWin++
    alert(userWin + "-" +compWin + "-" +ties);
  }
  else if (userChoice === "R" && randomNumber === 2){
    userWin++
    alert(userWin + "-" +compWin + "-" +ties);
  }
  else if (userChoice === "P" && randomNumber === 0){
    userWin++
    alert(userWin + "-" +compWin + "-" +ties);
  }
  else if (userChoice === "P" && randomNumber === 1){
    ties++
    alert(userWin + "-" +compWin + "-" +ties);
  }
  else if(userChoice === "P" && randomNumber === 2){
    compWin++
    alert(userWin + "-" +compWin + "-" +ties);
  }
  else if (userChoice === "S" && randomNumber === 0){
    compWin++
    alert(userWin + "-" +compWin + "-" +ties);
  }
  else if (userChoice === "S" && randomNumber === 1){
    userWin++
    alert(userWin + "-" +compWin + "-" +ties);
  }
  else if(userChoice === "S" && randomNumber === 2){
    ties++
    alert(userWin + "-" +compWin + "-" +ties);
  }
}if(userWin > compWin && ties){
  alert("Congratulations! You have beat the computer in this series of Rock, Paper, Scissors! Refresh to play again!");
}
else if(compWin > userWin && ties){
  alert("Better luck next time! Unfortunately the computer has won this series of Rock, Paper, Scissors. Refresh to play again!");
}
else if(ties > compWin && userWin){
  alert("You almost had'em! This series of Rock, Paper, Scissors has ended in a tie! Refresh to play again");
}
else{
  alert("You almost had'em! This series of Rock, Paper, Scissors has ended in a tie! Refresh to play again");
}