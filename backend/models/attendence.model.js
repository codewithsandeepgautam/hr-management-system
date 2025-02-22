const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    employeeId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Employee', required: true 
    },
    checkIn: { 
        type: Date 
    },
    checkOut: { 
        type: Date 
    },
});
const Attendance = mongoose.model('Attendance', attendanceSchema);
module.exports = Attendance;