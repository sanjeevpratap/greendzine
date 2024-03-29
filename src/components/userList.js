import React, { useState, useEffect } from 'react';
import Footer from './footer';
import Logout from './logout';
import '../css/userList.css'
import userlist_pic from '../img/moptro logo.png'
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
  let filteredEmployees = [...randomdata, ...employeeList]
  filteredEmployees = filteredEmployees.filter((employee) => {

    console.log(employee.username)
    return employee.username && employee.username.toLowerCase().includes(searchTerm.toLowerCase())
  });



  const changeInput = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm)
  }

  return (
    // <div className='user5_img'>

    // </div>


    

    <div className='main_block'>
    <div style={{ display: 'block' }}>

    <Logout />
    </div>
      {<img src={userlist_pic} className='userlist_pic' alt='leaf' />}

      {/* <h2>User List</h2> */}
      {/* Search bar */}
      <input
        type="text" className='input3'
        placeholder="Search by employee name"
        value={searchTerm}
        onChange={changeInput}
      />

      {filteredEmployees.map((employee, index) => (
        <div className='user_input' key={index}>
          <p className='para'>Emp Id : {index}</p>
          <p className='para'>Username: {employee.username}</p>
          <p className='para'>Email: {employee.email}</p>
          <p className='para'>DOB: {employee.dob}</p>
        </div>



      ))}





      <div>
        <Footer />
      </div>
    </div>
  );
};

export default UserList;
