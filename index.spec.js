const getScoreInText = require("./utils");
const {
  startTenisGame,
  serverScores,
  opponentScores,
  getScore,
} = require("./tenisGame");

describe("", () => {
  test("Server scores.", () => {
    startTenisGame();
    serverScores();
    // expect(serverScore).toBe("0 - 0"); // failing test
    // expect(getScore()).toBe("15 - Love"); // passing test
  });

  test("Opponent scores.", () => {
    startTenisGame();
    opponentScores();
    // expect(getScore()).toBe("15 - Love"); // failing test
    expect(getScore()).toBe("Love - 15"); // passing test
  });

  test("Server scores 4 times.", () => {
    startTenisGame();
    serverScores();
    serverScores();
    serverScores();
    serverScores();
    expect(getScore()).toBe("Game");
  });

  test("Server scores 3 time and opponent scores 3 times.", () => {
    startTenisGame();
    serverScores();
    serverScores();
    serverScores();
    opponentScores();
    opponentScores();
    opponentScores();
    expect(getScore()).toBe("Deuce");
  });

  test("Server advantage.", () => {
    startTenisGame();
    serverScores();
    serverScores();
    serverScores();
    opponentScores();
    opponentScores();
    opponentScores();
    serverScores();
    expect(getScore()).toBe("Advantage in");
  });

  test("Deuce.", () => {
    startTenisGame();
    serverScores();
    serverScores();
    serverScores();
    opponentScores();
    opponentScores();
    opponentScores();
    serverScores();
    opponentScores();
    expect(getScore()).toBe("Deuce");
  });

  test("Game.", () => {
    startTenisGame();
    serverScores();
    serverScores();
    serverScores();
    opponentScores();
    opponentScores();
    opponentScores();
    serverScores();
    opponentScores();
    opponentScores();
    opponentScores();
    expect(getScore()).toBe("Game");
  });

  test("Game is over.", () => {
    startTenisGame();
    serverScores();
    serverScores();
    serverScores();
    opponentScores();
    opponentScores();
    opponentScores();
    serverScores();
    opponentScores();
    opponentScores();
    opponentScores();
    opponentScores();
    expect(getScore()).toBe("Game is already over. You can't score anymore.");
  });
});
