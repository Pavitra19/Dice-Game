var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Generate a random # between 1 and 6
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");