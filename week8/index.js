const connectDB = require("./db/connect");
const Student = require("./models/Student");
const Course = require("./models/Course");

const run = async () => {
  await connectDB();

  // CLEAN (so students can re-run)
  await Student.deleteMany();
  await Course.deleteMany();

  // CREATE COURSES
  const math = await Course.create({
    title: "Mathematics",
    difficulty: "hard"
  });

  const english = await Course.create({
    title: "English",
    difficulty: "easy"
  });

  console.log("Courses created");

  // CREATE STUDENTS WITH COURSES
  await Student.create({
    name: "Alice",
    age: 20,
    courses: [math._id, english._id]
  });

  await Student.create({
    name: "Bob",
    age: 17,
    courses: [english._id]
  });

  console.log("Students created");

  // 🔍 READ ALL STUDENTS
  const allStudents = await Student.find().populate("courses");
  console.log("All students:", allStudents);

  // 🔍 FILTERED READ (age > 18)
  const adultStudents = await Student.find({ age: { $gt: 18 } }).populate("courses");
  console.log("Students older than 18:", adultStudents);

  // 🔍 FILTERED READ (students taking English)
  const englishStudents = await Student.find({
    courses: english._id
  }).populate("courses");

  console.log("Students taking English:", englishStudents);
  console.log(JSON.stringify(allStudents, null, 2));
  process.exit();
};

run();