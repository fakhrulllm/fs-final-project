const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Home Page");
});

const employeeRouters = require("./employee");
const jobRouters = require("./job");
const employerRouters = require("./employer");

router.use("/employees", employeeRouters);
router.use("/jobs", jobRouters);
router.use("/employers", employerRouters);

module.exports = router;