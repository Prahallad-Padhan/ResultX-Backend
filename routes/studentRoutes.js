const express = require('express');
const router = express.Router();
//const Student = require('../models/studentModel');

// Route to get all students sorted by CGPA in descending order
router.get('/getAllStudents', async (req, res) => {
  try {
    const students = await Student.find().sort({ cgpa: -1 });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students' });
  }
});

module.exports = router;
