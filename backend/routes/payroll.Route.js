const express = require('express');
const router = express.Router();
const payrollController = require('../controllers/payroll.Controller');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

router.post('/generate-payroll', payrollController.generatePayroll);
router.get('/payroll-report/:employeeId', payrollController.getPayrollReport);

module.exports = router;