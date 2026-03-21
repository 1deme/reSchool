const express = require("express");
const app = express();

/*
Middleware 1
*/
app.use((req, res, next) => {
  console.log("Step 1");
  next();
});

/*
Middleware 2
*/
app.use((req, res, next) => {
  console.log("Step 2");
  next();
});

/*
Middleware 3
*/
app.use((req, res, next) => {
  console.log("Step 3");
  next();
});

/*
Route
*/
app.get("/", (req, res) => {
  res.send("Finished");
});

app.listen(3000, () => {
  console.log("Server started");
});