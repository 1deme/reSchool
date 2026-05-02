const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course"
    }
  ]
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;