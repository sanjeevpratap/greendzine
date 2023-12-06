import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/auth.css'
import leaf from '../img/Group 3.png'

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem('authenticated', 'true');
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };
  const handleRegister = () => {
    navigate('/register');
  }

  return (
    <div className='login_main'>
      <div className='main2'>

        <div className='image1'>

          {<img src={leaf} className='login_leaf' alt='leaf' />}
        </div>
        <div className='login_container'>


          <label className='label'>
            Username:<br></br>
            <input className='input'
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label><br></br>
          <br />
          <label className='label'>
            Password:<br></br>
            <input className='input'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label><br></br>
          <br />
          <button className='button' onClick={handleLogin}>Login</button><br></br>

          {/* <Link to="/register">Sign Up</Link> */}
          <button className='signup' onClick={handleRegister}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
