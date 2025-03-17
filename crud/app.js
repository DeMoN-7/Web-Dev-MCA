const express = require("express");
const app = express();
const studentModel = require("./studentsModel");

app.get("/", (req, res) => {
  res.send("heyff");
});
app.get("/create", async (req, res) => {
  let createdStudent = await studentModel.create({
    name: "Aman Choudhary",
    course: "MCA",
    specialization: "AI",
  });

  res.send(createdStudent);
});
app.get("/update", async (req, res) => {
  let UpdateStudent = await studentModel.findOneAndUpdate(
    { name: "Ayush" },
    { name: "Ayush Singh" },
    { new: true }
  );

  res.send(UpdateStudent);
});

app.get("/read", async (req, res) => {
  let ReadStudent = await studentModel.find();
  res.send(ReadStudent);
});

app.listen(3000);
