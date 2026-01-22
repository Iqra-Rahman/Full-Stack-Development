const express = require('express')
const router = express.Router()
const Departments = require('../models/departments');

// get all departments
router.get('/', async (req, res) => {
  try {
    const departments = await Departments.findAll();
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// create new Departments
router.post('/', async (req, res) => {
  try {
    const departments = await Departments.create(req.body);
    res.status(201).json(departments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// search Departments with filters
router.get('/search', async (req, res) => {
  try {
    const filters = req.query;

    const Departments = await Departments.findAll({
      where: filters
    });

    res.json(Departments);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// // update department of Departments based on first name
// app.put('/Departments/department', async (req, res) => {
//   try {
//     const { firstName, department } = req.body;

//     const result = await Departments.update(
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

// update Departments by id
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const [updatedRows] = await Departments.update(
      req.body,          // fields to update
      { where: { id } }
    );

    if (updatedRows === 0) {
      return res.status(404).json({ message: 'Departments not found' });
    }

    const updatedDepartments = await Departments.findByPk(id);

    res.json({
      message: 'Department updated successfully',
      data: updatedDepartments,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// delete Departments by id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRows = await Departments.destroy({
      where: { id }
    });

    if (deletedRows === 0) {
      return res.status(404).json({ message: 'Departments not found' });
    }

    res.json({
      message: 'Departments deleted successfully',
      deletedId: id
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// get a single Departments by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const Departments = await Departments.findByPk(id); // <-- using findByPk
    if (!Departments) {
      return res.status(404).json({ message: 'Departments not found' });
    }

    console.log(Departments instanceof Departments); 
    res.json(Departments);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router
