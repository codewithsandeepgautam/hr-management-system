import React from 'react';
import Header from '../components/header/header';
import SideBar from '../components/sidebar/sidebar';

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <SideBar />
        <div
          style={{
            position: "relative",
            display: "flex",
            flex: 1,
            flexDirection: "column",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <Header />
          <div>
            <div
              style={{
                margin: "0 auto",
                padding: "16px",
                paddingTop: "24px",
                paddingBottom: "40px",
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
