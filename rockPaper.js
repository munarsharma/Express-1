const express = require("express");

const app = express();

app.get("/:choice", (req, res) => {
  let aiChoice = Math.floor(Math.random() * 3);

  let rock = [
    { user: "rock", ai: "rock", result: "tie" },
    { user: "rock", ai: "paper", result: "lose" },
    { user: "rock", ai: "scissors", result: "win" }
  ];
  let paper = [
    { user: "paper", ai: "paper", result: "tie" },
    { user: "paper", ai: "scissors", result: "lose" },
    { user: "paper", ai: "rock", result: "win" }
  ];

  let scissors = [
    { user: "scissors", ai: "scissors", result: "tie" },
    { user: "scissors", ai: "rock", result: "lose" },
    { user: "scissors", ai: "paper", result: "win" }
  ];

  if (req.params.choice === "rock") {
    res.json(rock[aiChoice]);
  } else if (req.params.choice === "paper") {
    res.json(paper[aiChoice]);
  } else if (req.params.choice === "scissors") {
    res.json(scissors[aiChoice]);
  }
});

app.listen(8000, () => {
  console.log("you are listening to port 8000");
});
