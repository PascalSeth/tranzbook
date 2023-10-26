import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../picture files/logo.png'
import axios from 'axios'
import {  useNavigate } from 'react-router';



const Login = ({ handleClose }) => {
  const [data,setdata] = useState({
    email:"",
    password:"",
   
  })
 
  const [error, setError] =useState('')
  const handleChange =({currentTarget:input}) =>{
    setdata({...data, [input.name]:input.value})
  }
const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const url ="mongodb+srv://pascalelikem:Supersonic15@tranzbook.fuchd5p.mongodb.net/auth"
      const {data:res} = await axios.post(url,data)
            localStorage.setItem("token",res.data)
navigate("/")
handleClose()
console.log(res.message) 

}catch(error){
if(error.response &&
  error.response.status>=400 &&
  error.response.status<=500)
{
  setError(error.response.data.message)
}
}}
   
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
        <input type="email" name='email' value={data.email} onChange={handleChange} placeholder='Enter your email' />
      </label>
      <label>
        Password:
        <input type="password" name='password' value={data.password} onChange={handleChange} placeholder='Enter your password' />
      </label>
      </div>
      <div className='logincheckbox'>
        <div className='leftcheck'>
      <input type='checkbox' value={check} className='checker'/>
      <h4 className='text-[1.8vh] ml-1'>Remember for 30days</h4></div>
      <h5>Forgot password?</h5>
      </div>
      {
      error &&<div>
        {error}
     </div> }
      <button  className='sub'type="submit">Sign in</button>
      <button className='google' type="submit">Sign in with Google</button>

    </form></div>
  );
  };

export default Login;
