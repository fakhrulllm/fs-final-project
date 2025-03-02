const express = require('express');
const jobRouter = express.Router();
const JobController = require("../controllers/JobController");

jobRouter.get("/", JobController.getJobs);
jobRouter.post("/create", JobController.create);
jobRouter.delete("/delete/:id", JobController.delete);
jobRouter.put("/update/:id", JobController.update);


module.exports = jobRouter;
































// const express = require('express');
// const Job = require('../models/Job');
// const router = express.Router();

// // GET /jobs: Mendapatkan data semua pekerjaan
// router.get('/', async (req, res) => {
//   try {
//     const jobs = await Job.findAll();
//     res.status(200).json({ message: 'Jobs fetched successfully', data: jobs });
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching jobs', error });
//   }
// });

// // POST /jobs/create: Menambahkan pekerjaan baru
// router.post('/create', async (req, res) => {
//   const { name, category, max_salary, min_salary } = req.body;
//   try {
//     const job = await Job.create({ name, category, max_salary, min_salary });
//     res.status(201).json({ message: 'Job added successfully', data: job });
//   } catch (error) {
//     res.status(500).json({ message: 'Error adding job', error });
//   }
// });

// // GET /jobs/delete/:id: Menghapus pekerjaan berdasarkan ID
// router.get('/delete/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const job = await Job.destroy({ where: { id } });
//     res.status(200).json({ message: `Job with id ${id} deleted successfully`, data: job });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting job', error });
//   }
// });

// // POST /jobs/update/:id: Update data pekerjaan berdasarkan ID
// router.post('/update/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name, category, max_salary, min_salary } = req.body;
//   try {
//     const job = await Job.update({ name, category, max_salary, min_salary }, { where: { id } });
//     res.status(200).json({ message: `Job with id ${id} updated successfully`, data: job });
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating job', error });
//   }
// });

// module.exports = router;
