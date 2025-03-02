const { Job } = require("../models");


class JobController {

  static async getJobs(req, res) {
    try {
      let job = await Job.findAll();
      res.json(job);
    } catch (err) {
      console.error(err);
    }
  }

  static async create(req, res) {
    try {
      const { name, category, max_salary, min_salary } = req.body;
      let job = await Job.create({
        name,
        category,
        max_salary,
        min_salary,
      });
      res.json(job);
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = Number(req.params.id);
      let result = await Job.destroy({
        where: { id },
      })
      result
        ? res.json({
          message: "Job deleted successfully",
        })
        : res.json({
          message: "Job not delete"
        })
    } catch (err) {
      console.error(err);
    }
  }

  static async update(req, res) {
    const id = Number(req.params.id);
    const { name, category } = req.body;
    let result = await Job.update({
      name,
      category,
    },
      {
        where: {
          id,
        },
      }
    );
    result[0] === 1
      ? res.json({
        message: "Job updated successfully",
      })
      : res.json({
        message: "Job not updated",
      });
  } catch(err) {
    req.json(err)
  }
}

module.exports = JobController;




















































// // controllers/JobController.js
// const Job = require('../models/Job');

// const createJob = async (req, res) => {
//   try {
//     const { name, category, max_salary, min_salary } = req.body;
//     const job = await Job.create({ name, category, max_salary, min_salary });
//     res.json(job);
//   } catch (error) {
//     res.json(error);
//   }
// };

// const getAllJobs = async (req, res) => {
//   try {
//     const jobs = await Job.findAll();
//     res.json(jobs);
//   } catch (error) {
//     res.json(error);
//   }
// };

// module.exports = { createJob, getAllJobs };
