import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/login';
import Register from './components/auth/register';
import EmployeeList from './pages/employeeList';
import EmployeeDetail from './pages/employeeDetail';
import Attendance from './pages/attendance';
import Report from './pages/attendanceReport';
import PayrollReport from './components/payroll/payrollReport';
import ProtectedRoute from './utils/protectedRoute';
import Home from './pages/home';
import Layout from './layout/layout';
import { AccountProvider } from './utils/accountContext';
import Employee from './pages/addEmployee';
import Leave from './pages/applyLeave';
import Status from './pages/leaveStatus';
const App = () => {
  return (
    <AccountProvider>
    <Router>
      <Layout>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      <Route path="" element={<ProtectedRoute/>}>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employee/:id" element={<EmployeeDetail />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/attendance-report" element={<Report />} />
        <Route path="/apply-leave" element={<Leave />} />
        <Route path="/leave-status" element={<Status />} />
        <Route path="/payroll-report/:employeeId" element={<PayrollReport />} />
        </Route>
      </Routes>
      </Layout>
    </Router>
    </AccountProvider>
  );
};

export default App;