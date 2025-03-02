const express = require('express');
const employerRouter = express.Router();
const EmployerController = require("../controllers/EmployerController");

employerRouter.get("/", EmployerController.getEmployers);
employerRouter.post("/create", EmployerController.create);
employerRouter.delete("/delete/:id", EmployerController.delete);
employerRouter.put("/update/:id", EmployerController.update);


module.exports = employerRouter;























































// const express = require('express');
// const Employer = require('../models/Employer');
// const router = express.Router();

// // GET /employers: Mendapatkan data semua employer
// router.get('/', async (req, res) => {
//   try {
//     const employers = await Employer.findAll();
//     res.status(200).json({ message: 'Employers fetched successfully', data: employers });
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching employers', error });
//   }
// });

// // POST /employers/create: Menambahkan employer baru
// router.post('/create', async (req, res) => {
//   const { name, type, total_employee, city } = req.body;
//   try {
//     const employer = await Employer.create({ name, type, total_employee, city });
//     res.status(201).json({ message: 'Employer added successfully', data: employer });
//   } catch (error) {
//     res.status(500).json({ message: 'Error adding employer', error });
//   }
// });

// // GET /employers/delete/:id: Menghapus employer berdasarkan ID
// router.get('/delete/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const employer = await Employer.destroy({ where: { id } });
//     res.status(200).json({ message: `Employer with id ${id} deleted successfully`, data: employer });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting employer', error });
//   }
// });

// // POST /employers/update/:id: Update data employer berdasarkan ID
// router.post('/update/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name, type, total_employee, city } = req.body;
//   try {
//     const employer = await Employer.update(
//       { name, type, total_employee, city },
//       { where: { id } }
//     );
//     res.status(200).json({ message: `Employer with id ${id} updated successfully`, data: employer });
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating employer', error });
//   }
// });

// module.exports = router;
