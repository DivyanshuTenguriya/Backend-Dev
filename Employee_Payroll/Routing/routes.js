const express = require("express");
const router = express.Router();
const controller = require("../functions/functions");

router.get("/", controller.getEmployees);

// ✅ ADD THIS
router.get("/add", (req, res) => {
  res.render("form"); // your file is form.ejs
});
router.get("/edit/:id", controller.getEditPage);

router.post("/", controller.addEmployee);
router.put("/:id", controller.updateEmployee);
router.delete("/:id", controller.deleteEmployee);

router.get("/payroll/:id", controller.getPayroll);

module.exports = router;
