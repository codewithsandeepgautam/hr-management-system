const mongoose = require('mongoose');

const payrollSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee', required: true
    },
    month: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    baseSalary: {
        type: Number,
        required: true
    },
    presentDays: {
        type: Number,
        required: true
    },
    totalDays: {
        type: Number,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
});

const Payroll = mongoose.model('Payroll', payrollSchema);
module.exports = Payroll;