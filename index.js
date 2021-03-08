var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Generate a random # between 1 and 6
document
  .querySelector(".img1")
  .setAttribute("src", "images/dice" + randomNumber1 + ".png"); // change dice img to match random number

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Generate a second random # between 1 and 6
document
  .querySelector(".img2")
  .setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!"; // if player 1 has a larger value, they win
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!"; // if player 2 has a larger value, they win
} else {
  document.querySelector("h1").innerHTML = "Draw!"; // if player 1 and 2 have the same value, it's a draw
}
