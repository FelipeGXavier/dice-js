function sum(xs) {
  return xs.reduce((acc, x) => acc + x);
}

function generateRandomNumbers(start = 1, end = 6, size = 4) {
  const results = [];
  for (let i = 0; i < size; i++) {
    results.push(Math.floor(Math.random() * (start - end) + end));
  }
  return results;
}

function winnerMessage(playerTotal, computerTotal) {
  if (playerTotal > computerTotal) {
    return "O vencedor é o Jogador";
  } else if (computerTotal > playerTotal) {
    return "O vencedor é o Computador";
  } else {
    return "Empate!";
  }
}

function getDicePaths(plays) {
  const paths = {
    1: "assets/img/Alea_1.png",
    2: "assets/img/Alea_2.png",
    3: "assets/img/Alea_3.png",
    4: "assets/img/Alea_4.png",
    5: "assets/img/Alea_5.png",
    6: "assets/img/Alea_6.png",
  };
  const result = [];
  for (let i = 0; i < plays.length; i++) {
    result.push(paths[plays[i]]);
  }
  return result;
}

function getResultContent(plays) {
  const images = getDicePaths(plays);
  let result = "";
  for (let i = 0; i < images.length; i++) {
    result += `<img src='${images[i]}' alt='Imagem Dado'>`;
  }
  return result;
}

function renderResult(playerRolls, computerRolls) {
  const playerTotal = sum(playerRolls);
  const computerTotal = sum(computerRolls);

  const userElement = document.querySelector(
    "#player-result > div.player-images"
  );
  const computerElement = document.querySelector(
    "#computer-result > div.computer-images"
  );
  const playerTotalElement = document.querySelector(
    "#player-result > span.total"
  );
  const computerTotalElement = document.querySelector(
    "#computer-result > span.total"
  );
  const resultElement = document.querySelector("div.result > span.info");

  userElement.innerHTML = getResultContent(playerRolls);
  computerElement.innerHTML = getResultContent(computerRolls);
  playerTotalElement.textContent = `Total: ${playerTotal}`;
  computerTotalElement.textContent = `Total: ${computerTotal}`;

  resultElement.innerHTML = winnerMessage(playerTotal, computerTotal);
}

document.addEventListener("DOMContentLoaded", function (event) {
  const playBtn = document.getElementById("btn-play");

  playBtn.addEventListener("click", function () {
    const numbers = generateRandomNumbers();
    const userPlays = [numbers[0], numbers[1]];
    const computerPlays = [numbers[2], numbers[3]];

    const rollResultsElement = document.getElementById("roll-results");
    rollResultsElement.style.display = "block";
    renderResult(userPlays, computerPlays);
  });
});
