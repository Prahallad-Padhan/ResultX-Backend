const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  reg: Number,
  branch : String,
  sem1_grades: Number,
  sem2_grades: Number,
  cgpa: Number
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
