import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AccountContext } from '../../utils/accountContext';

const ApplyLeave = () => {
  const [type, setType] = useState('CL');
  const { userData } = useContext(AccountContext);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        `${process.env.REACT_APP_API_URL}/leave/apply-leave`,
        { employeeId: userData, type, startDate, endDate }, 
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage('Leave applied successfully');
    } catch (err) {
      setMessage(err.response?.data?.error || 'Leave application failed');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Apply Leave</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={styles.input}
        >
          <option value="CL">Casual Leave</option>
          <option value="SL">Sick Leave</option>
          <option value="EL">Earned Leave</option>
        </select>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Apply Leave</button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
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
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  message: {
    marginTop: '10px',
    color: 'green',
  },
};

export default ApplyLeave;