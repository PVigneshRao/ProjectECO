import React from 'react'
import bgImg from './assect/logo.jpg';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { NavLink   } from "react-router-dom"

export default function Registration() {
    
    
    const navigate = useNavigate()
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [Confirmpassword,setConfirmPassword]=useState('');
    const [mobile,setMobile]=useState('');
    const [msg,setMsg]=useState('');
    const handleUsername = (e) => {
        setUsername(e.target.value);
      };
      const handlePassword = (e) => {
        setPassword(e.target.value)
      }
      const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
      }
      const handleMobile = (e) => {
        setMobile(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if(username===''||password===''|| mobile===''||Confirmpassword===''){
          setMsg("Fill all the details");
        }
        else {
          
          navigate('/Navbar')
        
        }
      };
     

  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Sign Up</h2>
                <span>register and enjoy the service</span>

                <form id='form' className='flex flex-col' >
                    <input type="text" placeholder='Username' value={username} onChange={handleUsername} required/>
                    <input type="text"  placeholder='Mobile number' value={mobile} onChange={handleMobile} required/>
                    <input type="password" placeholder='Password' value={password} onChange={handlePassword} required />
                    <input type="password" placeholder='Confirm password' value={Confirmpassword} onChange={handleConfirmPassword} required />
                   <button className='btn' onClick={handleSubmit}>Sign Up</button>
                   <span><NavLink to='/'>Sign In</NavLink></span>
                   <h3>{msg}</h3>  
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}
