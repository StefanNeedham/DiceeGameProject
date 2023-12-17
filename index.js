const randomNumber1 = Math.ceil(Math.random() * 6);
const randomNumber2 = Math.ceil(Math.random() * 6);

let headerText;

if (randomNumber1 > randomNumber2) headerText = "🚩 Player 1 Wins!";
else if (randomNumber1 < randomNumber2)  headerText = "Player 2 Wins! 🚩";
else headerText = "Draw!";

document.body.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
document.body.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

document.body.querySelector(".container h1").textContent = headerText;