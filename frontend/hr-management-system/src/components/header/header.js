import React from 'react';

const Header = () => { 
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        width: "100%",
        backgroundColor: "#334023",
        boxShadow: "0px 2px 8px #E2E8F0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
      }}
    >
        <h3
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#fff",
            margin: 0,
          }}
        >
          HR-Management System
        </h3>
     
    </header>
  );
};

export default Header;