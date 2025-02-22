const Attendance = require('../models/attendence.model');

// Check-In
exports.checkIn = async (req, res) => {
  try {
    const { employeeId } = req.params; // Get employeeId from route parameters
    const { date } = req.body; // Get date from the request body
    const attendance = new Attendance({ employeeId, checkIn: new Date(), date });
    await attendance.save();
    res.status(201).json({ message: 'Checked in successfully', attendance });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Check-Out
exports.checkOut = async (req, res) => {
  try {
    const { employeeId } = req.params; // Get employeeId from route parameters
    const { date } = req.body; // Get date from the request body
    const attendance = await Attendance.findOne({ employeeId, date, checkOut: null });
    if (!attendance) {
      return res.status(404).json({ error: 'No active check-in found for the selected date' });
    }
    attendance.checkOut = new Date();
    await attendance.save();
    res.status(200).json({ message: 'Checked out successfully', attendance });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get Attendance Report
exports.getAttendanceReport = async (req, res) => {
  try {
    const { employeeId } = req.params; // Get employeeId from route parameters
    const attendance = await Attendance.find({ employeeId });
    res.status(200).json(attendance);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};