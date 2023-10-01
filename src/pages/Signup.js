import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../picture files/logo.png'

const Signup = ({ handleClose }) => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(` Email: ${email}, Password: ${password}, Name: ${name}`);
  };
    // Perform Signup logic here

  

  return (
    <div className='Signup'>
    <form onSubmit={handleSubmit}>
      <div className='close'>
  <CloseIcon onClick={handleClose} className='closec'/>
      </div>
        <div className='top'>
            <img src={logo} alt=''/>
            <h3>Create your account</h3>
            <h4>Start your 30-day free trial.</h4>

        </div>
        <div className='infields'>
        <label>
        Name:
        <input type="name" value={name} onChange={handleNameChange} placeholder='Enter your name'/>
      </label>
      <br/>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} placeholder='Enter your email' />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} placeholder='Enter your password' />
      </label>
      <br />
      </div>
     
      <button className='sub'type="submit">Get Started</button>
      <button className='google' type="submit">Sign Up with Google</button>

    </form></div>
  );
  };

export default Signup;
