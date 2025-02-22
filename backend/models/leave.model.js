const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
  employeeId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Employee', required: true
 },
  type: {
     type: String, 
     enum: ['CL', 'SL', 'EL'], 
     required: true },
  startDate: {
     type: Date, required: true
     },
  endDate: { 
    type: Date, required: true 
},
  status: { 
    type: String, 
    enum: ['Pending', 'Approved', 'Rejected'], 
    default: 'Pending'
 },
});

const Leave = mongoose.model('Leave', leaveSchema);
module.exports = Leave;