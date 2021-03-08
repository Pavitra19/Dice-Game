var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Generate a random # between 1 and 6
document
  .querySelector(".img1")
  .setAttribute("src", "images/dice" + randomNumber1 + ".png"); // change dice img to match random number

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Generate a second random # between 1 and 6
document
  .querySelector(".img2")
  .setAttribute("src", "images/dice" + randomNumber2 + ".png");
