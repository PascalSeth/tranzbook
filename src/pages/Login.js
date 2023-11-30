import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../picture files/logo.png'
import axios from 'axios'
import {  useNavigate } from 'react-router';
import {  signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";




const Login = ({ handleClose }) => {
  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setdata({ ...data, [input.name]: input.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        toast.success("Logged In Successfully");
        navigate("/");
        handleClose(); // Close the popup after successful login
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(error.message);
      });
  }
    const provider = new GoogleAuthProvider();
  const SignInWithGoogle=()=>{
    const auth = getAuth();
    signInWithRedirect(auth, provider)
      .then((result) => {
        // // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        toast.success("Logged in Sucessfully")
        navigate("/")
        handleClose(); // Close the popup after successful login
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        toast.error(error.message)
        // // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // // ...
      });

  }

  return (
    <>
      <div className='login'>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div className='close'>
            <CloseIcon onClick={handleClose} className='closec' />
          </div>
          <div className='top'>
            <img src={logo} alt='' />
            <h3>Log in to your account</h3>
            <h4>Welcome back! Please enter your details.</h4>
          </div>
          <div className='infields'>
            <label>
              Email:
              <input type="email" name='email' value={data.email} onChange={handleChange} placeholder='Enter your email' />
            </label>
            <label>
              Password:
              <input type="password" name='password' value={data.password} onChange={handleChange} placeholder='Enter your password' />
            </label>
          </div>
          <div className='logincheckbox'>
            <div className='leftcheck'>
              <input type='checkbox' className='checker' />
              <h4 className='text-[1.8vh] ml-1'>Remember for 30 days</h4>
            </div>
            <h5>Forgot password?</h5>
          </div>
          {
            error && <div>
              {error}
            </div>
          }
          <button className='sub' type="submit">Sign in</button>
          <button className='google' type="submit" onClick={SignInWithGoogle}>Sign in with Google</button>
        </form>
      </div>
    </>
  );
};

export default Login;
