import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import UserList from './userList';
import Logout from './logout';

const Dashboard = () => {
  const navigate = useNavigate();
  const [log, setLog] = useState(true);

  useEffect(() => {
    
    const authenticated = localStorage.getItem('authenticated');
    if (authenticated !== 'true') {
      
      navigate('/Login');
    }
    else
    setLog(false)
  }, [navigate]);

  const [userPerformance, setUserPerformance] = useState([]);

  // Function to generate random performance data
  const generateRandomPerformanceData = () => {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    
    // Generate random performance for each day
    const randomData = daysOfWeek.map((day) => ({
      day,
      performance: Math.floor(Math.random() * 100), // Generate a random performance value (you can replace this with your logic)
    }));

    return randomData;
  };

  useEffect(() => {
    // Set random performance data when the component mounts
    setUserPerformance(generateRandomPerformanceData());
  }, []);

  return (
    <div>
      <div style={{display:'flex'}}>
      
      <Logout/>
      </div>
      <h1>{log ? 'Navigating to Login...' : 'Dashboard'}</h1>

      <h2 style={{textAlign:'center'}}>Productivity</h2>
      {userPerformance.map((day, index) => (
        <div key={index}>
          {day.day}: {day.performance}
        </div>
      ))}

      
      <div className='footer' style={{bottom:'0'}}>
        <Footer/>
      </div>
    </div>
  );
};

export default Dashboard;
