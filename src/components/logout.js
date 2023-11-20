import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication status (assuming you set it in local storage)
    localStorage.removeItem('authenticated');
    
    // Navigate to the login page
    navigate('/login');
  };

  return (
    <div>
      
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
