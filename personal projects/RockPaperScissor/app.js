var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result >p");
var rock_div = document.getElementById("rock");
var paper_div = document.getElementById("paper");
var scissor_div = document.getElementById("scissor");

var getComputerChoice = () => {
  const choice = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choice[randomNumber];
};

var convertToWord = letter => {
  if (letter == "r") return "rock";
  if (letter == "p") return "paper";
  else return "scissor";
};

var win = (userChoice, computerChoice) => {
  var smallUserWord = "user".fontsize("3").sub();
  var smallCompWord = "comp".fontsize("3").sub();
  var userSelect = convertToWord(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} beats ${convertToWord(
    computerChoice
  )}${smallCompWord} You win! `;

  document.getElementById(userSelect).classList.add("green-glow");
  setTimeout(() => {
    document.getElementById(userSelect).classList.remove("green-glow");
  }, 300);
};

var lose = (userChoice, computerChoice) => {
  var smallUserWord = "user".fontsize("3").sub();
  var smallCompWord = "comp".fontsize("3").sub();
  computerScore++;
  var userSelect = convertToWord(userChoice);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} loses ${convertToWord(
    computerChoice
  )}${smallCompWord} You Lost! `;
  document.getElementById(userSelect).classList.add("red-glow");
  setTimeout(() => {
    document.getElementById(userSelect).classList.remove("red-glow");
  }, 300);
};

var draw = (userChoice, computerChoice) => {
  var smallUserWord = "user".fontsize("3").sub();
  var smallCompWord = "comp".fontsize("3").sub();
  var userSelect = convertToWord(userChoice);

  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} equals ${convertToWord(
    computerChoice
  )}${smallCompWord} Its and draw! `;
  document.getElementById(userSelect).classList.add("gray-glow");
  setTimeout(() => {
    document.getElementById(userSelect).classList.remove("gray-glow");
  }, 300);
};

var game = userChoice => {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
};

function main() {
  rock_div.addEventListener("click", () => {
    game("r");
  });

  paper_div.addEventListener("click", () => {
    game("p");
  });
  scissor_div.addEventListener("click", () => {
    game("s");
  });
}

main();
