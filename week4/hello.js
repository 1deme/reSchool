const express = require("express");

const app = express();

// Root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// About route
app.get("/about", (req, res) => {
  res.send("About page");
});

// Contact route
app.get("/contact", (req, res) => {
  res.send("Contact page");
});

// User route returning JSON
app.get("/user", (req, res) => {
  res.json({
    name: "Alice",
    age: 20
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});