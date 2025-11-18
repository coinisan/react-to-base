window.FarcadeSDK.singlePlayer.actions.ready();

let startTime = null;
let waiting = true;

const screen = document.getElementById("screen");
const text = document.getElementById("text");

function startGame() {
  waiting = true;
  text.textContent = "GET READY";
  screen.classList.remove("blue");

  const delay = Math.random() * 2000 + 1000;

  setTimeout(() => {
    screen.classList.add("blue");
    text.textContent = "TAP NOW!";
    startTime = performance.now();
    waiting = false;

    window.FarcadeSDK.singlePlayer.actions.hapticFeedback();
  }, delay);
}

screen.addEventListener("click", () => {
  if (waiting) return;

  const reaction = Math.floor(performance.now() - startTime);

  text.textContent = `YOUR REACTION: ${reaction} MS`;
  screen.classList.remove("blue");

  window.FarcadeSDK.singlePlayer.actions.gameOver({ score: reaction });

  setTimeout(() => startGame(), 1500);
});

window.FarcadeSDK.on("play_again", () => {
  startGame();
});

startGame();
