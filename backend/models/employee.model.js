const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: String,
        required: true
    },
    aadhaar: {
        type: String,
        required: true
    },
    pan: {
        type: String,
        required: true
    },
    bankDetails: {
        type: String,
        required: true
    },
    emergencyContact: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    },
});
const Employee = mongoose.model("Employee", employeeSchema)
module.exports = Employee;