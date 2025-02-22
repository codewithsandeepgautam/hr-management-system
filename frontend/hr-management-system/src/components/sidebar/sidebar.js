import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { IoHome, IoNewspaper } from 'react-icons/io5';
import { MdContacts, MdAccessTime, MdOutlineLocalLaundryService, MdLogout } from 'react-icons/md';
import { GrGallery } from 'react-icons/gr';
import { BiSolidCategory } from 'react-icons/bi';
import { TbLogs } from 'react-icons/tb';
import { AccountContext } from '../../utils/accountContext';

const SideBar = () => {
  const { setLogin } = useContext(AccountContext);
  const location = useLocation();

  const handleLogout = () => {
    setLogin(false);
    localStorage.removeItem('token');
  };

  const isActive = (path) => location.pathname === path ? { backgroundColor: '#c19b57' } : {};

  return (
    <aside style={{
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '220px',
      overflowY: 'hidden',
      backgroundColor: '#334023',
      color: '#fff',
      transition: '0.3s ease-in-out'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px' }}>
        <Link to="/home"> {/* <img style={{ width: '90px' }} src={Img} alt='logo' /> */} </Link>
        <button style={{ display: 'block' }}>
          <FaArrowLeftLong size={20} style={{ color: '#fff' }} />
        </button>
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <nav style={{ marginTop: '20px', padding: '10px' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.to} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  color: '#fff',
                  borderRadius: '4px',
                  transition: '0.3s',
                  ...isActive(item.to)
                }}>
                  {item.icon} {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px',
                fontWeight: '500',
                textDecoration: 'none',
                color: '#fff',
                transition: '0.3s'
              }} onClick={handleLogout}>
                <MdLogout size={28} /> Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

const navItems = [
  { to: '/employee', icon: <MdContacts size={28} />, label: 'AddEmployee' },
  { to: '/employees', icon: <IoNewspaper size={28} />, label: 'EmployeeList' },
  { to: '/attendance', icon: <BiSolidCategory size={28} />, label: 'CheckInOut' },
  { to: '/attendance-report', icon: <MdAccessTime size={28} />, label: 'AttendanceReport' },
  { to: '/apply-leave', icon: <MdOutlineLocalLaundryService size={28} />, label: 'ApplyLeave' },
  { to: '/leave-status', icon: <MdOutlineLocalLaundryService size={28} />, label: 'LeaveStatus' },
  { to: '/payroll-report/:employeeId', icon: <TbLogs size={28} />, label: 'PayrollReport' },
];

export default SideBar;
