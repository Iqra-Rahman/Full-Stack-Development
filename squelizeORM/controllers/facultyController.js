const { Faculty, Departments } = require("../models");

exports.getFacultyWithDepartment = async (req, res) => {
  try {
    const data = await Faculty.findAll({
      attributes: ["firstName", "lastName", "department"],
      include: [
        {
          model: Departments,
          attributes: ["DeptHead"]
        }
      ]
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
