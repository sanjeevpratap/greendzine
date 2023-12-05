// Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Register = () => {
const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email,setEmail]=useState('');
  const [dob,setDob]=useState('')
  

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
    const newUser = { username, password ,email,dob};
    const updatedUsers = [...existingUsers, newUser];

    // Store the updated users array in local storage
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    navigate('/login');
    alert('Registration successful! Now you can login.');
    
  };

  return (
    <div>
      <h2>Register</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <br />
      <label >
        Email:
        <input 
          type="email" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
            />
      </label>
      <br />
      <label >
        DOB:
        <input type="date"
        value={dob}
        onChange={(e)=> setDob(e.target.value)}
        required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
