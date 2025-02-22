const Payroll = require('../models/payroll.model');

// Generate Payroll
exports.generatePayroll = async (req, res) => {
  try {
    const { employeeId, month, year, baseSalary, presentDays, totalDays } = req.body;
    const salary = (baseSalary / totalDays) * presentDays;
    const payroll = new Payroll({ employeeId, month, year, baseSalary, presentDays, totalDays, salary });
    await payroll.save();
    res.status(201).json({ message: 'Payroll generated successfully', payroll });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get Payroll Report
exports.getPayrollReport = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const payroll = await Payroll.find({ employeeId });
    res.status(200).json(payroll);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};