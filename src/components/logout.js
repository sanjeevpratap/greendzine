import React from 'react';
import { useNavigate } from 'react-router-dom';
import logout from '../img/logout.png'

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
      
      <button className='logout1' onClick={handleLogout}>logout</button>
    </div>
  );
};

export default Logout;
