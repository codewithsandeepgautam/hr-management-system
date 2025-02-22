import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/employees/${id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setEmployee(response.data);
      } catch (err) {
        setError("Failed to load employee details.");
        console.error("Error fetching employee details:", err);
      }
    };
    fetchEmployee();
  }, [id]);

  if (error) return <p style={styles.error}>{error}</p>;
  if (!employee) return <p style={styles.loading}>Loading employee details...</p>;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>{employee.name}</h2>
        <div style={styles.details}>
          <p><strong>Email:</strong> {employee.email}</p>
          <p><strong>Contact:</strong> {employee.contact}</p>
          <p><strong>Aadhaar:</strong> {employee.aadhaar}</p>
          <p><strong>PAN:</strong> {employee.pan}</p>
          <p><strong>Bank Details:</strong> {employee.bankDetails}</p>
          <p><strong>Emergency Contact:</strong> {employee.emergencyContact}</p>
          <p><strong>Address:</strong> {employee.address}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    backgroundColor: "#f4f4f4",
    padding: "20px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "400px",
    textAlign: "center",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  },
  title: {
    fontSize: "22px",
    color: "#333",
    marginBottom: "10px",
  },
  details: {
    textAlign: "left",
  },
  loading: {
    textAlign: "center",
    fontSize: "18px",
    color: "#555",
  },
  error: {
    color: "red",
    textAlign: "center",
  },
};

export default EmployeeDetails;
