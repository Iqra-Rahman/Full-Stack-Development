const express = require('express')
const router = express.Router()
const {Faculty} = require('../models/faculty');
const facultyController = require("../controllers/facultyController");

router.get("/faculty&Dept", facultyController.getFacultyWithDepartment);

// get all faculty
router.get('/', async (req, res) => {
  try {
    const faculty = await Faculty.findAll();
    res.status(200).json(faculty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// create new faculty
router.post('/', async (req, res) => {
  try {
    const faculty = await Faculty.create(req.body);
    res.status(201).json(faculty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// search faculty with filters
router.get('/search', async (req, res) => {
  try {
    const filters = req.query; // e.g., /faculty/search?department=CS&firstName=Iqra

    const faculty = await Faculty.findAll({
      where: filters
    });

    res.json(faculty);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// // update department of faculty based on first name
// app.put('/faculty/department', async (req, res) => {
//   try {
//     const { firstName, department } = req.body;

//     const result = await Faculty.update(
//       { department},
//       { where: { firstName } }
//     );

//     res.json({
//       message: 'Department updated successfully',
//       result,
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// update faculty by id
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const [updatedRows] = await Faculty.update(
      req.body,          // fields to update
      { where: { id } }
    );

    if (updatedRows === 0) {
      return res.status(404).json({ message: 'Faculty not found' });
    }

    const updatedFaculty = await Faculty.findByPk(id);

    res.json({
      message: 'Faculty updated successfully',
      data: updatedFaculty,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// delete faculty by id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRows = await Faculty.destroy({
      where: { id }
    });

    if (deletedRows === 0) {
      return res.status(404).json({ message: 'Faculty not found' });
    }

    res.json({
      message: 'Faculty deleted successfully',
      deletedId: id
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// get a single faculty by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const faculty = await Faculty.findByPk(id); // <-- using findByPk
    if (!faculty) {
      return res.status(404).json({ message: 'Faculty not found' });
    }

    console.log(faculty instanceof Faculty); 
    res.json(faculty);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router
