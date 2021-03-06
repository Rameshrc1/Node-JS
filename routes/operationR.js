const express = require("express");
const router = express.Router();

const operationsC = require('../controllers/operationsC');
router.post('/add',operationsC.validate,operationsC.add);
router.post('/sub',operationsC.validate,operationsC.sub);
router.post('/multi',operationsC.validate,operationsC.multi);
router.post('/div',operationsC.validate,operationsC.div);
router.post('/det',operationsC.validate,operationsC.div);
router.post('/min',operationsC.validate,operationsC.div);
router.post('/max',operationsC.validate,operationsC.div);
router.post('/del',operationsC.validate,operationsC.div);

module.exports = router;


