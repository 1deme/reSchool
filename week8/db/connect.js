const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("YOUR_CONNECTION_STRING");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;