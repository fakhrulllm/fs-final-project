const { Employee } = require("../models");


class EmployeeController {

  static async getEmployees(req, res) {
    try {
      let employee = await Employee.findAll();
      res.json(employee);
    } catch (err) {
      console.error(err);
    }
  }

  static async create(req, res) {
    try {
      const { name, job, age, city } = req.body;
      let employee = await Employee.create({
        name,
        job,
        age,
        city,
      });
      res.json(employee);
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = Number(req.params.id);
      let result = await Employee.destroy({
        where: { id },
      })
      result
        ? res.json({
          message: "Employee deleted successfully",
        })
        : res.json({
          message: "Employee not delete"
        })
    } catch (err) {
      console.error(err);
    }
  }

  static async update(req, res) {
    const id = Number(req.params.id);
    const { name, job } = req.body;
    let result = await Employee.update({
      name,
      job,
    },
      {
        where: {
          id,
        },
      }
    );
    result[0] === 1
      ? res.json({
        message: "Employee updated successfully",
      })
      : res.json({
        message: "Employee not updated",
      });
  } catch(err) {
    req.json(err)
  }
}
module.exports = EmployeeController;














































// const Employee = require('../models/Employee');

// const createEmployee = async (req, res) => {
//   try {
//     const { name, job, age, city } = req.body;
//     const employee = await Employee.create({ name, job, age, city });
//     res.json(employee);
//   } catch (error) {
//     res.json(error);
//   }
// };

// const getAllEmployees = async (req, res) => {
//   try {
//     const employees = await Employee.findAll();
//     res.json(employees);
//   } catch (error) {
//     res.json(error);
//   }
// };

// module.exports = { createEmployee, getAllEmployees };
