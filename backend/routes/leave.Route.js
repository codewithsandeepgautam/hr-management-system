const express = require('express');
const router = express.Router();
const leaveController = require('../controllers/leave.Controller');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

router.use(authMiddleware);

router.post('/apply-leave', leaveController.applyLeave);
router.put('/update-leave-status', roleMiddleware(['HR']), leaveController.updateLeaveStatus);
router.get('/leave-requests/:employeeId', leaveController.getLeaveRequests);

module.exports = router;