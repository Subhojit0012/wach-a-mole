const squares = document.querySelectorAll(".square");
const timeLeft = document.querySelector("#time-left");
const scores = document.querySelector("#score");
const mole = document.querySelector(".mole");

let result = 0;
let hitPosition;
let currentTime = 10;
let timerId = 0;

function startGame() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  let randomPosition = squares[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");

  hitPosition = randomPosition.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      console.log(result);
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function moveMole() {
  let timerId = null;
  timerId = setInterval(startGame, 500);
}

moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert("GAME OVER! your final score is" + result);
  }
}

let countDownTimerId = setInterval(countDown, 1000);
