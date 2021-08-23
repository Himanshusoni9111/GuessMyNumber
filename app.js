"use strict";
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// document.querySelector(".secretNumber").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // no number selected
  if (!guess) {
    document.querySelector(".message").textContent = "No number";
  }
  // winner
  else if (guess === secretNumber) {
    document.querySelector(".secretNumber").textContent = secretNumber;
    document.querySelector(".message").textContent = "Correct answer";
    score++;
    document.querySelector(".score").textContent = score;

    // color change
    document.querySelector("body").style.backgroundColor = "grey";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".high_score").textContent = highScore;
    }
  }
  //guess is high
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "too high" : "too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});
    // guess is low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Too low";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "you lost the game";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// });

// reset buttton
document.querySelector(".btn_again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "guess Again !!";
  document.querySelector("body").style.backgroundColor = "rgb(160, 241, 78);";
  //   const secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".secretNumber").textContent = "?";
  document.querySelector(".guess").value = "";
});
