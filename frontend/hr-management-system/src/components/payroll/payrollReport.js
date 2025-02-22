import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PayrollReport = ({ employeeId }) => {
  const [payroll, setPayroll] = useState([]);

  useEffect(() => {
    const fetchPayroll = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/payroll/payroll-report/${employeeId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPayroll(response.data);
      } catch (err) {
        console.error('Failed to fetch payroll:', err);
      }
    };
    fetchPayroll();
  }, [employeeId]);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Payroll Report</h2>
      <ul style={styles.list}>
        {payroll.map((record) => (
          <li key={record._id} style={styles.listItem}>
            <p><strong>Month:</strong> {record.month}</p>
            <p><strong>Year:</strong> {record.year}</p>
            <p><strong>Salary:</strong> ₹{record.salary.toFixed(2)}</p>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    display:'flex',
    justifyContent:'center'
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  list: {
    listStyle: 'none',
    padding: '0',
  },
  listItem: {
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
};

export default PayrollReport;