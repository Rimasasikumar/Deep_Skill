import React from "react";

function IndianPlayers() {

  const players = [
    "Virat",
    "Rohit",
    "Gill",
    "Rahul",
    "Hardik",
    "Jadeja",
    "Pant",
    "Shami",
    "Bumrah",
    "Kuldeep",
    "Surya"
  ];

  const oddPlayers = players.filter((player, index) => index % 2 === 0);
  const evenPlayers = players.filter((player, index) => index % 2 !== 0);

  const T20Players = [
    "Virat",
    "Rohit",
    "Surya"
  ];

  const RanjiPlayers = [
    "Pujara",
    "Rahane",
    "Iyer"
  ];

  const mergedPlayers = [...T20Players, ...RanjiPlayers];

  return (
    <div>

      <h2>Odd Players</h2>

      <ul>
        {oddPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Players</h2>

      <ul>
        {evenPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>List of Indian Players Merged</h2>

      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

    </div>
  );
}

export default IndianPlayers;