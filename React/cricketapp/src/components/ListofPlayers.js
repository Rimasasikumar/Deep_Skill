import React from "react";

function ListofPlayers() {

  const players = [
    { name: "Virat Kohli", score: 92 },
    { name: "Rohit Sharma", score: 68 },
    { name: "KL Rahul", score: 85 },
    { name: "Shubman Gill", score: 65 },
    { name: "Hardik Pandya", score: 75 },
    { name: "Ravindra Jadeja", score: 55 },
    { name: "Rishabh Pant", score: 72 },
    { name: "Mohammed Shami", score: 45 },
    { name: "Jasprit Bumrah", score: 60 },
    { name: "Kuldeep Yadav", score: 30 },
    { name: "Suryakumar Yadav", score: 95 }
  ];

  const lowScorePlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>

      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h2>List of Players having Scores less than 70</h2>

      <ul>
        {lowScorePlayers.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default ListofPlayers;