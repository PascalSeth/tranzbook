import React, { useState } from 'react';
import './login.css'
import CloseIcon from '@mui/icons-material/Close';
import logo from '../picture files/logo.png'
const Login = ({ handleClose }) => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(` Email: ${email}, Password: ${password}`);
  };
    // Perform login logic here
    const check=useState(true);

  

  return (
    <div className='login'>
    <form onSubmit={handleSubmit}>
      <div className='close'>
  <CloseIcon onClick={handleClose} className='closec'/>
      </div>
        <div className='top'>
            <img src={logo} alt=''/>
            <h3>Log in to your account</h3>
            <h4>Welcome back! Please enter your details.</h4>

        </div>
        <div className='infields'>
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
      <div className='checkbox'>
        <div className='leftcheck'>
      <input type='checkbox' value={check} className='checker'/>
      <h4>Remember for 30days</h4></div>
      <h5>Forgot password</h5>
      </div>
      <button className='sub'type="submit">Sign in</button>
      <button className='google' type="submit">Sign in with Google</button>

    </form></div>
  );
  };

export default Login;
