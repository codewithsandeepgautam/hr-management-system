import React, { useState } from 'react';
import axios from 'axios';

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    aadhaar: '',
    pan: '',
    bankDetails: '',
    emergencyContact: '',
    address: '',
    profilePicture: '',
  });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(`${process.env.REACT_APP_API_URL}/employees/add`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage('Employee added successfully');
    } catch (err) {
      setMessage(err.response?.data?.error || 'Failed to add employee');
    }
  };
  console.log("formdata<<",formData)
  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Add Employee</h2>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={styles.input}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Contact"
          value={formData.contact}
          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          style={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Aadhaar"
          value={formData.aadhaar}
          onChange={(e) => setFormData({ ...formData, aadhaar: e.target.value })}
          style={styles.input}
          required
        />
        <input
          type="text"
          placeholder="PAN"
          value={formData.pan}
          onChange={(e) => setFormData({ ...formData, pan: e.target.value })}
          style={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Bank Details"
          value={formData.bankDetails}
          onChange={(e) => setFormData({ ...formData, bankDetails: e.target.value })}
          style={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Emergency Contact"
          value={formData.emergencyContact}
          onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
          style={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          style={styles.input}
          required
        />
        <input
          type="file"
          placeholder="Profile Picture URL"
          value={formData.profilePicture}
          onChange={(e) => setFormData({ ...formData, profilePicture: e.target.value })}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add Employee</button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
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

export default AddEmployee;