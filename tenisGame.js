const getScoreInText = require("./utils");

let score = [0, 0];
let deuce = false;
let isGameOver = false;
let error = false;

function startTenisGame() {
  score = [0, 0];
  deuce = false;
  isGameOver = false;
  error = false;
  return score;
}

function serverScores() {
  if (isGameOver) {
    error = true;
    return;
  }
  score[0]++;
  getScore();
}

function opponentScores() {
  if (isGameOver) {
    error = true;
    return;
  }
  score[1]++;
  getScore();
}

function getScore() {
  if (error) return "Game is already over. You can't score anymore.";

  // advantages
  if (deuce) {
    if (score[0] > score[1] && Math.abs(score[0] - score[1]) <= 1) {
      return "Advantage in";
    } else if (score[0] < score[1] && Math.abs(score[0] - score[1]) <= 1)
      return "Advantage out";
  }

  // deuce
  if (score[0] >= 3 && score[1] >= 3 && score[0] === score[1]) {
    deuce = true;
    return "Deuce";
  }

  // game
  if (!deuce && (score[0] === 4 || score[1] === 4)) {
    isGameOver = true;
    return "Game";
  }
  if (deuce && Math.abs(score[0] - score[1]) > 1) {
    isGameOver = true;
    return "Game";
  }

  // return text score
  return `${getScoreInText(score[0], deuce)} - ${getScoreInText(
    score[1],
    deuce
  )}`;
}

module.exports = {
  startTenisGame: startTenisGame,
  serverScores: serverScores,
  opponentScores: opponentScores,
  getScore: getScore,
};
