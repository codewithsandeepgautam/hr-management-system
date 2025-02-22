import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AccountContext } from '../../utils/accountContext';

const AttendanceReport = () => {
  const [attendance, setAttendance] = useState([]);
  const { userData } = useContext(AccountContext);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/attendance/attendance/${userData}`, // Use userData._id for employeeId
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setAttendance(response.data);
        console.log('Attendance data:', response.data);
      } catch (err) {
        console.error('Failed to fetch attendance:', err);
      }
    };
    fetchAttendance();
  }, [userData]); // Add userData._id as a dependency

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Attendance Report</h2>
      <ul style={styles.list}>
        {attendance.map((record) => (
          <li key={record._id} style={styles.listItem}>
            <p><strong>Check-In:</strong> {new Date(record.checkIn).toLocaleString()}</p>
            <p><strong>Check-Out:</strong> {record.checkOut ? new Date(record.checkOut).toLocaleString() : 'Not checked out'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
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

export default AttendanceReport;