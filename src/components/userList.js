import React, { useState, useEffect } from 'react';
import Footer from './footer';
const UserList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [employeeList, setEmployeeList] = useState([]);

  // Fetch user data from local storage
  const fetchEmployeeData = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setEmployeeList(storedUsers);
  };

  // Update employeeList when the component mounts
  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const filteredEmployees = employeeList.filter((employee) =>
  {

  console.log(employee.username)
  return employee.username && employee.username.toLowerCase().includes(searchTerm.toLowerCase())
  });



  const changeInput= (e)=>{
    setSearchTerm(e.target.value);
    console.log(searchTerm)
  }

  return (
    <div>
      <h2>User List</h2>
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by employee name"
        value={searchTerm}
        onChange={changeInput}
      />
      
      {filteredEmployees.map((employee,index) => (
        <div key={index}>
        
          <p>Username: {employee.username}</p>
          
        </div>
      ))}
  
     

<div>
  <Footer/>
</div>
    </div>
  );
};

export default UserList;
