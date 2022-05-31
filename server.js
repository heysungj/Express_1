const express = require("express");
const app = express();
const port = 3000;

// app.get("/calc/:num1/:num2", (req, res) => {
//     let sum = parseInt(req.params.num1) + parseInt(req.params.num2);
//     res.send(`${req.params.num1} + ${req.params.num2} is ${sum}`);
//   });

app.get("/greeting/:name", (req, res) => {
  res.send(`Hello there , ${req.params.name}`);
});

app.get("/tip/:total/:percentage", (req, res) => {
  let total = parseFloat(req.params.total);
  let percentage = parseFloat(req.params.percentage) / 100;
  let tip = total * percentage;
  res.send(`The tip is : ${tip}`);
});

app.listen(port, () => {
  console.log("app is running on port", port);
});
