const { Employer } = require("../models");


class EmployerController {

  static async getEmployers(req, res) {
    try {
      let employer = await Employer.findAll();
      res.json(employer);
    } catch (err) {
      console.error(err);
    }
  }
  static async create(req, res) {
    try {
      const { name, type, total_employee, city } = req.body;
      let employer = await Employer.create({
        name,
        type,
        total_employee,
        city,
      });
      res.json(employer);
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = Number(req.params.id);
      let result = await Employer.destroy({
        where: { id },
      })
      result
        ? res.json({
          message: "Employer deleted successfully",
        })
        : res.json({
          message: "Employer not delete"
        })
    } catch (err) {
      console.error(err);
    }
  }

  static async update(req, res) {
    const id = Number(req.params.id);
    const { name, type } = req.body;
    let result = await Employer.update({
      name,
      type,
    },
      {
        where: {
          id,
        },
      }
    );
    result[0] === 1
      ? res.json({
        message: "Employer updated successfully",
      })
      : res.json({
        message: "Employer not updated",
      });
  } catch(err) {
    req.json(err)
  }
}

module.exports = EmployerController;