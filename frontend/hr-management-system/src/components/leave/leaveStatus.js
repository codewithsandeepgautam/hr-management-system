import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AccountContext } from '../../utils/accountContext';

const LeaveStatus = () => {
  const [leaves, setLeaves] = useState([]);
  const { userData } = useContext(AccountContext);

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/leave/leave-requests/${userData}`, 
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setLeaves(response.data);
        console.log('Leave requests:', response.data);
      } catch (err) {
        console.error('Failed to fetch leave requests:', err);
      }
    };
    fetchLeaves();
  }, [userData._id]); 

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Leave Status</h2>
      <ul style={styles.list}>
        {leaves.map((leave) => (
          <li key={leave._id} style={styles.listItem}>
            <p><strong>Type:</strong> {leave.type}</p>
            <p><strong>Start Date:</strong> {new Date(leave.startDate).toLocaleDateString()}</p>
            <p><strong>End Date:</strong> {new Date(leave.endDate).toLocaleDateString()}</p>
            <p><strong>Status:</strong> {leave.status}</p>
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

export default LeaveStatus;