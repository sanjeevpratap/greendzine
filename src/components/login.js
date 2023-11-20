import React, { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import '../css/auth.css'
import leaf from '../img/leaf.jfif'

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
  const handleRegister=()=>{
    navigate('/register');
  }

  return (
    <div className='login_main'>

      <img src={leaf} className='login_leaf' alt='leaf' />
      <div className='login_container'>

      
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>

      {/* <Link to="/register">Sign Up</Link> */}
     <button onClick={handleRegister}>Sign Up</button>
     </div>
    </div>
  );
};

export default Login;
