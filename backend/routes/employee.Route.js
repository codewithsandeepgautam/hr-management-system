const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee.Controller');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// Protect all employee routes
router.use(authMiddleware);

// Only HR can add, update, or delete employees
router.post('/add', roleMiddleware(['HR']), employeeController.addEmployee);
router.put('/:id', roleMiddleware(['HR']), employeeController.updateEmployee);
router.delete('/:id', roleMiddleware(['HR']), employeeController.deleteEmployee);
router.get('/', roleMiddleware(['HR', 'Employee']), employeeController.getEmployeesList);

// Both HR and Employees can view employees
router.get('/:id', roleMiddleware(['HR', 'Employee']), employeeController.getEmployees);

module.exports = router;