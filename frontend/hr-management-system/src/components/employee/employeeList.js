import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/employees`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEmployees(response.data);
      } catch (err) {
        console.error('Failed to fetch employees:', err);
      }
    };
    fetchEmployees();
  }, []);
   console.log("employee<<",employees)
  return (
    <div style={styles.container}>
      <ul style={styles.list}>
        <h2 style={styles.title}>Employee List</h2>
        {employees.map((employee) => (
          <li key={employee._id} style={styles.listItem}>
            <Link to={`/employee/${employee._id}`} style={styles.link}>
              {employee.name} - {employee.email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    display: "flex",
    justifyContent: "center"
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
  link: {
    textDecoration: 'none',
    color: '#007bff',
  },
};

export default EmployeeList;