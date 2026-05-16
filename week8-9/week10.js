const express = require("express");
const connectDB = require("./db/connect");

const Student = require("./models/Student");
const Course = require("./models/Course");

const app = express();
app.use(express.json());

app.get("/seed", async (req, res) => {
  await Student.deleteMany();
  await Course.deleteMany();

  const math = await Course.create({
    title: "Mathematics",
    difficulty: "hard",
    durationMonth: 3
  });

  const english = await Course.create({
    title: "English",
    difficulty: "easy",
    durationMonth: 2
  });

  await Student.create({
    name: "Demetre",
    age: 20,
    email: "demetre@mail.com",
    courses: [math._id, english._id]
  });

  await Student.create({
    name: "Bob",
    age: 17,
    email: "bob@mail.com",
    courses: [english._id]
  });

  res.json({ message: "Seeded successfully" });
});


app.get("/students", async (req, res) => {
  const students = await Student.find().populate("courses");
  res.json(students);
});

app.get("/students/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate("courses");

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
});

app.post("/students", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.put("/students/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete("/students/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch {
    res.status(400).json({ message: "Invalid request" });
  }
});

app.get("/courses", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

app.get("/courses/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json(course);
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
});

app.post("/courses", async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete("/courses/:id", async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch {
    res.status(400).json({ message: "Invalid request" });
  }
});

const start = async () => {
  await connectDB();
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
};

start();