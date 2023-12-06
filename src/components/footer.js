// App.js
import React from 'react';
import '../css/footer.css'
import { BrowserRouter as Router, Route, Link ,Routes} from 'react-router-dom';
import home from '../img/home.png'
import user from '../img/user.png'

const Footer = () => {
  return (
    
      <div>
        <nav >
          <ul style={{display:'flex'}}>

            <div className='footer2'>
            
            <li className='list'>
              <Link to="/"><img className='img_foot' src={home}></img></Link>
            </li>
            <li className='list'>
              <Link to="/userList"><img className='img_foot' src={user}></img></Link>
            </li>
            </div>
          </ul>
        </nav>

        <hr />
        
      </div>
  
  );
};

export default Footer;
