// Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css'
const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Show an alert
    alert('You have been logged out.');

    // You can add your logout logic here
    // For example, clear local storage or perform other cleanup

    // Navigate to the login page
    navigate('/'); // Replace '/' with the path of your login page
  };

  return (
    <div>
      <h2 className='Heding'>Logout</h2>
      <center> <button onClick={handleLogout} >Logout</button></center>
    </div>
  );
};

export default Logout;

