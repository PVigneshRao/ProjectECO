import React from 'react'
import bgImg from './assect/logo.jpg';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { NavLink   } from "react-router-dom"
import '../App.css';
export default function Form() {
    
    
    const navigate = useNavigate()
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [mobile,setMobile]=useState('');
    const [msg,setMsg]=useState('');
    const handleUsername = (e) => {
        setUsername(e.target.value);
      };
      const handlePassword = (e) => {
        setPassword(e.target.value)
      }
      const handleMobile = (e) => {
        setMobile(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if(username===''||password===''|| mobile===''){
          setMsg("Fill all the details");
        }
        else {
          
          navigate('/')
        
        }
      };
     

  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2><center>Sign In</center></h2>
                <span>register and enjoy the service</span>

                <form id='form' className='flex flex-col' >
                    <input type="text" placeholder='Username' value={username} onChange={handleUsername} required/>
                    <input type="password" placeholder='Password' value={password} onChange={handlePassword} required />
                    <input type="text" placeholder='Mobile number' value={mobile} onChange={handleMobile} required/>
                   <button className='btn' onClick={handleSubmit}>Sign In</button>
                    <span><NavLink to='/registr' className='sign'>Sign Up</NavLink></span>
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
