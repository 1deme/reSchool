const express = require("express");
const app = express();

/*
GLOBAL MIDDLEWARE
Runs for every request
*/
app.use((req, res, next) => {
  console.log("New request:", req.method, req.url);
  next();
});

/*
ANOTHER GLOBAL MIDDLEWARE
Modifying request object
*/
app.use((req, res, next) => {
  req.requestTime = new Date().toLocaleTimeString();
  next();
});

/*
MULTIPLE MIDDLEWARE CHAIN
Shows execution order
*/
function firstMiddleware(req, res, next) {
  console.log("First middleware");
  next();
}

function secondMiddleware(req, res, next) {
  console.log("Second middleware");
  next();
}

/*
ROUTE
*/
app.get("/", firstMiddleware, secondMiddleware, (req, res) => {
  res.send("Home page");
});

/*
SHOWING MIDDLEWARE CHANGING DATA
*/
app.get("/time", (req, res) => {
  res.send("Request time: " + req.requestTime);
});

/*
ROUTE WITH PARAM
*/
app.get("/users/:id", (req, res) => {
  res.send("User id: " + req.params.id);
});

/*
ROUTE MIDDLEWARE
Protect route
*/
function checkAdmin(req, res, next) {
  const isAdmin = false;

  if (!isAdmin) {
    return res.status(403).send("Access denied");
  }

  next();
}

app.get("/admin", checkAdmin, (req, res) => {
  res.send("Welcome admin");
});

/*
ERROR EXAMPLE
*/
app.get("/error", (req, res) => {
  throw new Error("Something broke");
});

/*
ERROR HANDLING MIDDLEWARE
*/
app.use((err, req, res, next) => {
  console.log("Error:", err.message);
  res.status(500).send("Server error happened");
});

/*
404 HANDLER
*/
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});