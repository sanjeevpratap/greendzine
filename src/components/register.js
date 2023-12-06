// Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/register.css'
import leaf from '../img/Group 3.png'
const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('')


  const handleRegister = () => {
    // Basic validation (you can add more validation logic)
    if (!username || !password) {
      alert('Please enter both username and password');
      return;
    }

    // Get existing users from local storage or initialize an empty array
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the username is already taken
    if (existingUsers.some((user) => user.username === username)) {
      alert('Username is already taken. Please choose another.');
      return;
    }

    // Add the new user to the array
    const newUser = { username, password, email, dob };
    const updatedUsers = [...existingUsers, newUser];

    // Store the updated users array in local storage
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    navigate('/login');
    alert('Registration successful! Now you can login.');

  };

  return (
    <div className='main'>
      <div className='main1'>
        <div className='image21'>

          {<img src={leaf} className='registration_leaf' alt='leaf' />}
        </div>
        <h2 className='title1'>Register</h2>
        <label className='label'>
          Username: <br />
          <input className='input1'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <label className='label'>
          Email: <br />
          <input className='input1'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label className='label'>
          DOB: <br />
          <input type="date" className='input1'
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </label>
        <br />
        <label className='label'>
          Password: <br />
          <input
            type="password" className='input1'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button className='register' onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default Register;
