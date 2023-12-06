// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link ,Routes} from 'react-router-dom';

const Footer = () => {
  return (
    
      <div>
        <nav >
          <ul style={{display:'flex'}}>
            
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/userList">UserList</Link>
            </li>
          </ul>
        </nav>

        <hr />
        
      </div>
  
  );
};

export default Footer;
