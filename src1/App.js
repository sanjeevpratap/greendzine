// App.js
import React from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import UserList from './components/userList';

const App = () => {
  return (
    

      
   
    <Router>
      
        <Routes>
        <Route path="/login" exact element={<Login/>} />
        <Route path="/logout" exact element={<Login/>} />
        <Route path="/register" exact element={<Register/>} />
        
        <Route path="/" exact element={<Dashboard/>} />
        <Route path="/userList" exact element={<UserList/>} />
        </Routes>
       
    </Router>

   
  );
};

export default App;
