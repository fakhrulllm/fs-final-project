const express = require('express');
const employeeRouter = express.Router();
const EmployeeController = require("../controllers/EmployeeController");

employeeRouter.get("/", EmployeeController.getEmployees);
employeeRouter.post("/create", EmployeeController.create);
employeeRouter.delete("/delete/:id", EmployeeController.delete);
employeeRouter.put("/update/:id", EmployeeController.update);


module.exports = employeeRouter;















































// const express = require('express');
// const Employee = require('../models/Employee');
// const router = express.Router();

// // GET /employees: Mendapatkan data semua karyawan
// router.get('/', async (req, res) => {
//   try {
//     const employees = await Employee.findAll();
//     res.json({ message: 'Employees fetched successfully', data: employees });
//   } catch (error) {
//     res.json({ message: 'Error fetching employees', error });
//   }
// });

// // POST /employees/create: Menambahkan karyawan baru
// router.post('/create', async (req, res) => {
//   const { name, job, age, city, job_id, employer_id } = req.body;
//   try {
//     const employee = await Employee.create({
//       name,
//       job,
//       age,
//       city,
//       job_id,
//       employer_id,
//     });
//     res.json({ message: 'Employee added successfully', data: employee });
//   } catch (error) {
//     res.json({ message: 'Error adding employee', error });
//   }
// });

// // GET /employees/delete/:id: Menghapus karyawan berdasarkan ID
// router.get('/delete/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const employee = await Employee.destroy({ where: { id } });
//     res.status(200).json({ message: `Employee with id ${id} deleted successfully`, data: employee });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting employee', error });
//   }
// });

// // POST /employees/update/:id: Update data karyawan berdasarkan ID
// router.post('/update/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name, job, age, city, job_id, employer_id } = req.body;
//   try {
//     const employee = await Employee.update(
//       { name, job, age, city, job_id, employer_id },
//       { where: { id } }
//     );
//     res.status(200).json({ message: `Employee with id ${id} updated successfully`, data: employee });
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating employee', error });
//   }
// });

// module.exports = router;
