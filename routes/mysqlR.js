const express = require("express");
const router = express.Router();

const mysqlC = require('../controllers/mysqlC');
router.get('/phoneNumber',mysqlC.validate,mysqlC.getAll);
router.get('/all-student',mysqlC.findAll);

module.exports = router;