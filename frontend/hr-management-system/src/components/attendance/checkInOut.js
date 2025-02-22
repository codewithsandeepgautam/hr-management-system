import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AccountContext } from '../../utils/accountContext';

const CheckInOut = () => {
  const { userData } = useContext(AccountContext);
  const [message, setMessage] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Default to today's date

  const handleCheckIn = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        `${process.env.REACT_APP_API_URL}/attendance/check-in/${userData}`, // Use userData._id for employeeId
        { date }, // Include the date in the request body
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage('Checked in successfully');
    } catch (err) {
      setMessage(err.response?.data?.error || 'Check-in failed');
    }
  };

  const handleCheckOut = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        `${process.env.REACT_APP_API_URL}/attendance/check-out/${userData}`, // Use userData._id for employeeId
        { date }, // Include the date in the request body
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage('Checked out successfully');
    } catch (err) {
      setMessage(err.response?.data?.error || 'Check-out failed');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.datePicker}>
        <label htmlFor="date">Select Date: </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={styles.input}
        />
      </div>
      <button onClick={handleCheckIn} style={styles.button}>Check-In</button>
      <button onClick={handleCheckOut} style={styles.button}>Check-Out</button>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  datePicker: {
    marginBottom: '10px',
  },
  input: {
    padding: '5px',
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

export default CheckInOut;