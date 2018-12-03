const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Muna"
  });
});

app.get("/:operator/:num1/:num2", (req, res) => {
  let n1 = parseInt(req.params.num1);
  let n2 = parseInt(req.params.num2);
  if (n1 === null || n2 === null) {
    res.send("Not a number, try again");
  } else {
    if (req.params.operator === "add") {
      return res.json({ num1: n2, num2: n1, result: n1 + n2 });
    } else if (req.params.operator === "sub") {
      return res.json({ num1: n2, num2: n1, result: n1 - n2 });
    } else if (req.params.operator === "mul") {
      return res.json({ num1: n2, num2: n1, result: n1 * n2 });
    } else if (req.params.operator === "div") {
      return res.json({ num1: n2, num2: n1, result: n1 / n2 });
    } else {
      return res.json({ answer: "invalid operator" });
    }
  }
});

app.get("/*", (req, res) => {
  res.status(404).sendFile(__dirname + "/404.html");
});

app.listen(8000, () => {
  console.log("you are listening to port 8000");
});
