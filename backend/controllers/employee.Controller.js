const Employee = require('../models/employee.model');
const cloudinary = require('cloudinary').v2;
// Add Employee
exports.addEmployee = async (req, res) => {
  try {
      if (req.file) {
          const cloudData = await cloudinary.uploader.upload(req.file.path);
          req.body.profilePicture = cloudData.secure_url; 
      }
      const employee = new Employee(req.body);
      await employee.save();
      res.status(201).json(employee);
  } catch (err) {
      res.status(400).json({ error: 'Unable to add employee. Try again later!' });
  }
};

exports.getEmployeesList = async (req, res) => {
  try {
    const employees = await Employee.find();
    if (!employees.length) {
      return res.status(404).json({ error: "No employees found" });
    }
    res.status(200).json(employees); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Employees
exports.getEmployees = async (req, res) => {
  try {
    const { id } = req.params; 
    const employee = await Employee.findById(id); 
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.status(200).json(employee); 
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update Employee
exports.updateEmployee = async (req, res) => {
  try {
      if (req.file) {
          const cloudData = await cloudinary.uploader.upload(req.file.path);
          req.body.profilePicture = cloudData.secure_url; 
      }
      const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!employee) {
          return res.status(404).json({ error: 'Employee not found' });
      }
      res.status(200).json(employee);
  } catch (err) {
      res.status(400).json({ error: 'Unable to update employee. Try again later!' });
  }
};

// Delete Employee
exports.deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Employee deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};