// const jwt = require("jsonwebtoken");
// const secretCode = "bebas";

// const tokenGenerator = (data) => {
//   const { id, name, job, age, city } = data;
//   const token = jwt.sign(
//     {
//       id,
//       name,
//       job,
//       age,
//       city,
//     },
//     secretCode
//   );

//   return token;
// };

// const tokenVerifier = (data) => {
//   const verifiedToken = jwt.verify(data, secretCode);

//   return verifiedToken;
// };

// module.exports = {
//   tokenGenerator,
//   tokenVerifier,
// };