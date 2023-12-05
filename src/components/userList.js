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


  const randomdata = [
    {
      username: 'abc',
      email: 'abc@gmail.com',
      dob: '1990-01-01'
    },
    {
      username: 'pratap',
      email: 'pratap@gmail.com',
      dob: '2002-02-02'
    },
    {
      username: 'john_doe',
      email: 'john.doe@example.com',
      dob: '1985-05-15'
    },
    {
      username: 'alice_wonder',
      email: 'alice.wonder@example.com',
      dob: '1992-09-30'
    },
    {
      username: 'coding_ninja',
      email: 'ninja@codeland.com',
      dob: '1988-11-20'
    },
    {
      username: 'web_developer',
      email: 'web.dev@example.com',
      dob: '1995-03-08'
    },
    {
      username: 'test_user',
      email: 'test.user@example.com',
      dob: '1998-07-12'
    }
  ];
  let filteredEmployees=[...randomdata,...employeeList]
   filteredEmployees = filteredEmployees.filter((employee) =>
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
          <p>Emp Id : {index}</p>
          <p>Username: {employee.username}</p>
          <p>Email: {employee.email}</p>
          <p>DOB: {employee.dob}</p>
          
        </div>
      ))}
  
     

<div>
  <Footer/>
</div>
    </div>
  );
};

export default UserList;
