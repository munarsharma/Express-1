const express = require("express");
const app = express();

app.get("/add/:num1/:num2", (req, res) => {
  let n1 = parseInt(req.params.num1);
  let n2 = parseInt(req.params.num2);
  if (n1 === null || n2 === null) {
    res.send("Not a number, try again");
  }

  let sum = n1 + n2;
  res.send(
    `num1: ${req.params.num1} , num2: ${req.params.num2} , result: ${sum}`
  );
});

app.get("/sub/:num1/:num2", (req, res) => {
  let n1 = parseInt(req.params.num1);
  let n2 = parseInt(req.params.num2);
  if (n1 === null || n2 === null) {
    res.send("Not a number, try again");
  }

  let sub = n1 - n2;
  res.send(
    `num1: ${req.params.num1} , num2: ${req.params.num2} , result: ${sub}`
  );
});

app.get("/mul/:num1/:num2", (req, res) => {
  let n1 = parseInt(req.params.num1);
  let n2 = parseInt(req.params.num2);
  if (n1 === null || n2 === null) {
    res.send("Not a number, try again");
  }

  let mul = n1 * n2;
  res.send(
    `num1: ${req.params.num1} , num2: ${req.params.num2} , result: ${mul}`
  );
});

app.get("/div/:num1/:num2", (req, res) => {
  let n1 = parseInt(req.params.num1);
  let n2 = parseInt(req.params.num2);
  if (n1 === null || n2 === null) {
    res.send("Not a number, try again");
  }

  let div = n1 / n2;
  res.send(
    `num1: ${req.params.num1} , num2: ${req.params.num2} , result: ${div}`
  );
});

app.get("/*", (req, res) => {
  res.status(404).sendFile(__dirname + "/mod.html");
});

app.listen(8000, () => {
  console.log("you are listening to port 8000");
});
