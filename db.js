//inside file index.js ------------------
const connectDB = require("./db/connect");
//const Student = require("./models/Student");

const run = async () => {
  await connectDB();
  process.exit();
};

run();


// in file connect.js --------------------------

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://testuser:test123@cluster0.yoqm7lx.mongodb.net/?appName=Cluster0");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
