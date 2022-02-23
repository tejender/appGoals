import React from 'react'
import { useState,useEffect } from 'react'
import { FaSignInAlt, FaUser } from 'react-icons/fa';

function Login() {
    const [formData,setFormData]= useState({
       
        email:'',
        password:'',
     
    })
    const {email,password}=formData;

    const onChange = (e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
        
    }
    const onSubmit = ()=>{
        
    }
  return (
    <>
        <section className="heading">
            <h1>
                <FaSignInAlt/> Register
            </h1>
            <p>Login and start setting goals</p>
        </section>
        <section className="form">
            <form onSubmit={onSubmit}>
                
              <div className="form-group">
                <input type='text' type="text" className="form-control" 
                id='emai' name='email' value={email} placeholder = 'Enter your email' onChange={onChange}/>
            </div>
              <div className="form-group">
                <input type='password' type="text" className="form-control" 
                id='password' name='password' value={password} placeholder = 'Enter your password' onChange={onChange}/>
            </div>              
                <div className="form-group">
                    <button type='submit'className='btn btn-block'>Register</button>
                </div>
            </form>
            
        </section>
    </>
  )
}

export default Login