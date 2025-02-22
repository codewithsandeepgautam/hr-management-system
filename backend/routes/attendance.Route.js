const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendance.Controller');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

// Pass employeeId in the route for check-in and check-out
router.post('/check-in/:employeeId', attendanceController.checkIn);
router.post('/check-out/:employeeId', attendanceController.checkOut);
router.get('/attendance/:employeeId', attendanceController.getAttendanceReport);

module.exports = router;