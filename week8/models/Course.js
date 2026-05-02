const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  difficulty: String // "easy", "medium", "hard"
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;