import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import logo from '../picture files/logo.png'


export default function Reset() {
    const [data, setdata] = useState({
        email: "",
    });
    
      const [error, setError] = useState('');
      const navigate = useNavigate();
    
      const handleChange = ({ currentTarget: input }) => {
        setdata({ ...data, [input.name]: input.value });
      }
      const handleReset = (event) => {
        event.preventDefault();
    
    }
  return (
    <div>
              <form onSubmit={handleReset}>
          <div className='top'>
            <img src={logo} alt='' />
            <h3>Reset Password</h3>
          </div>
          <div className='infields'>
            <label>
              Email:
              <input type="email" name='email' value={data.email} onChange={handleChange} placeholder='Enter your email' />
            </label>
            <button className='sub' type="submit">Reset Password</button>

          </div>
        </form>
    </div>
  )
}
