import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../picture files/logo.png'
import axios from 'axios'
import {  useNavigate } from 'react-router';
import Login from './Login';

const Signup = ({ handleClose }) => {
const [data,setdata] = useState({
  firstName:"",
  lastName:"",
  email:"",
  password:"",
 
})
const [error, setError] =useState('')
const [showSignInPopup, setShowSignInPopup] = useState(false);

const handleShowSignIn = () => {
  setShowSignInPopup(true);
};
const handleChange =({currentTarget:input}) =>{
  setdata({...data, [input.name]:input.value})
}
  const navigate = useNavigate()


  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const url ="http://localhost:1080/users"
      const {data:res} = await axios.post(url,data)
      console.log(res.message)
      navigate("/")
    }catch(error){
if(error.response &&
  error.response.status>=400 &&
  error.response.status<=500)
{
  setError(error.response.data.message)
}
    }
 
  }


  

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
        First Name:
        <input type="text" value={data.firstName} name='firstName' onChange={handleChange} placeholder=' First Name'/>
      </label>
      <label>
        Last Name:
        <input type="text" name='lastName' value={data.lastName} onChange={handleChange} placeholder=' Last Name'/>
      </label>
      <label>
        Email:
        <input type="email" name='email' value={data.email} onChange={handleChange} placeholder=' Email' />
      </label>
      <label>
        Password:
        <input type="password" name='password' value={data.password} onChange={handleChange} required placeholder=' Password' />
      </label>
      </div>
     {
      error &&<div>
        {error}
      </div>
     }
      { <button /*onClick={handleShowSignIn}*/  className='sub' type="submit">Get Started</button> }
      <button  className='google' type="submit">Sign Up with Google</button>
      {/* {showSignInPopup && <Login />} */}

    </form></div>
  );
  };

export default Signup;
