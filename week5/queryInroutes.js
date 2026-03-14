const express = require("express");
const app = express();

const users = [
  { id: 1, name: "Demetre", age: 21 },
  { id: 2, name: "Giorgi", age: 25 },
  { id: 3, name: "Temo", age: 21 }
];

app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

app.get("/home", (req, res) => {
  res.redirect("/");
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  const user = users.find(u => u.id == id);

  if (!user) {
    return res.status(404).send("User not found");
  }

  res.json(user);
});

app.get("/users", (req, res) => {
  const age = req.query.age;

  if (!age) {
    return res.json(users);
  }

  const filtered = users.filter(u => u.age == age);

  res.json(filtered);
});

app.get("/users/admin", (req, res) => {
  res.send("Admin page");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});