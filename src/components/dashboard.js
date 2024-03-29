import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import UserList from './userList';
import Logout from './logout';
import '../css/dashboard.css'
import logout from '../img/logout.png'
import dashboard_pic from '../img/moptro logo.png'

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
    <div className='main3'>
      <div className='dash1'>
        <div style={{ display: 'block' }}>

          <Logout />
        </div>
        <h1 className='logout'>{log ? 'Navigating to Login...' : 'Dashboard'}</h1>

        <div className='image1'>

          {<img src={dashboard_pic} className='dashboard_pic' alt='leaf' />}
        </div>

        

          <h2 className='title24' style={{ textAlign: 'center' }}>Productivity</h2>
          <div className='main_dashboard'>
          {userPerformance.map((day, index) => (
            <div className='content' key={index}>
              {day.day}: {day.performance}<br></br> <br></br> <br></br>
            </div>
          ))}


          <div className='footer' style={{ bottom: '0' }}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
