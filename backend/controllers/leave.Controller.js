const Leave = require('../models/leave.model');

// Apply for Leave
exports.applyLeave = async (req, res) => {
  try {
    const { employeeId, type, startDate, endDate } = req.body;
    const leave = new Leave({ employeeId, type, startDate, endDate });
    await leave.save();
    res.status(201).json({ message: 'Leave applied successfully', leave });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Approve/Reject Leave (HR Only)
exports.updateLeaveStatus = async (req, res) => {
  try {
    const { leaveId, status } = req.body;
    const leave = await Leave.findByIdAndUpdate(leaveId, { status }, { new: true });
    res.status(200).json({ message: 'Leave status updated', leave });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get Leave Requests
exports.getLeaveRequests = async (req, res) => {
  try {
    const { employeeId } = req.params; // Get employeeId from route parameters
    const leaves = await Leave.find({ employeeId });
    res.status(200).json(leaves);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};