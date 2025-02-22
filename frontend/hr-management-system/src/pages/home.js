import React from 'react';

function Home() {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '80vh',
      backgroundColor: '#f3f4f6',
    },
    card: {
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '16px',
    },
    text: {
      color: '#4b5563',
      marginBottom: '20px',
    },
    button: {
      backgroundColor: '#c19b57',
      color: 'white',
      padding: '10px 24px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome to HRMS Admin</h1>
        <p style={styles.text}>Manage your HRMS efficiently with our dashboard.</p>
        <button style={styles.button}>Get Started</button>
      </div>
    </div>
  );
}

export default Home;
