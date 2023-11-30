import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../picture files/logo.png'
import axios from 'axios'
import {  useNavigate } from 'react-router';
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import Login from './Login';

const Signup = ({ handleClose }) => {
const [data,setdata] = useState({
  firstName:"",
  lastName:"",
  email:"",
  password:"",
  confirmpassword:""
 
})
const [error, setError] =useState('')
const [showSignInPopup, setShowSignInPopup] = useState(false);

const handleShowSignIn = () => {
  setShowSignInPopup(true);
};
const handleChange =({currentTarget:input}) =>{
  setdata({...data, [input.name]:input.value})
}
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (data.password !== data.confirmpassword) {
      toast.error("Passwords do not match");
      return;
    }
    console.log(data.email, data.password)
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
  
      const user = userCredential.user;
   console.log(user)
      navigate("/"); // Assuming you want to navigate to a new page after successful registration
         toast.success("Registered Successfully");
         handleClose(); // Close the popup after successful login

 } catch (error) {
      console.error("Error registering user:", error);
      toast.error("Registration failed");
    }
  };
  
  


  

  return (
    <>
    <ToastContainer/>
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
      <label>
        Confirm Password:
        <input type="password" name='confirmpassword' value={data.confirmpassword} onChange={handleChange} required placeholder=' Confirm Password' />
      </label>
      </div>
     
      <button /*onClick={handleShowSignIn}*/  className='sub' type="submit">Get Started</button> 
      <button  className='google' type="submit">Sign Up with Google</button>
      {/* {showSignInPopup && <Login />} */}

    </form></div></>
  );
  };

export default Signup;
