const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();
const app = express();

// Middleware
app.use(cors()); 
app.use(express.json()); 

// Routes
const authRoutes = require('./routes/auth.Route');
const employeeRoutes = require('./routes/employee.Route');
const attendanceRoutes = require('./routes/attendance.Route');
const leaveRoutes = require('./routes/leave.Route');
const payrollRoutes = require('./routes/payroll.Route');

// Use Routes
app.use('/api/auth', authRoutes); 
app.use('/api/employees', employeeRoutes); 
app.use('/api/attendance', attendanceRoutes);
app.use('/api/leave', leaveRoutes); 
app.use('/api/payroll', payrollRoutes); 

app.get('/', (req, res) => {
  res.send('HRMS System API is running...');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});