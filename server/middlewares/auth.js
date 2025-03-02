// const { Employer } = require("../models/");
// const { Job } = require("../models/");
// const { tokenVerifier } = require("../helpers/jwt");

// const authentication = (req, res, next) => {
//   console.log("Authentication");
//   const { access_token } = req.headers;
//   if (access_token) {
//     const decoded = tokenVerifier(access_token);
//     req.employeeData = decoded;
//     next();
//   } else {
//     res.send({
//       message: "Token not found",
//     });
//   }
// };

// const authorization = async (req, res, next) => {
//   console.log("Authorization");
//   try {
//     const id = +req.params.id;
//     const EmployeeId = req.employeeData.id;
//     const employee = await Employee.findOne({
//       where: { id },
//     });
//     if (employee) {
//       if (employee.EmpolyeeId === EmployeeId) {
//         next();
//       } else {
//         throw {
//           message: "You are not allowed.",
//         };
//       }
//     } else {
//       throw {
//         message: "Item not found",
//       };
//     }
//   } catch (err) {
//     res.send(err);
//   }
// };

// module.exports = {
//   authentication,
//   authorization,
// };