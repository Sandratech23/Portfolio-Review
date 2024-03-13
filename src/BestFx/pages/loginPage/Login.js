import React from 'react'
import './Login.css'
// import { Link } from 'react-router-dom'
import { details } from '../../info/data'


const {id,subject,element}=details

export const Login = () => {
  return (
    < div className='loginContainer'>
        < div>
            <h1 className='welcome'>Welcome Back </h1>
            <p>We have a community of over 20,000 Forex Traders <br />
            where continuous Forex Technical and Fundamental <br /> analysis is being shared</p>
        </div>
        <div div className='loginBox'>
            <h2>Login</h2>
            {details.map(({id,element, subject})=>(
                <div key={id} className='inputWrapper'> 
                 <div><label>{subject}</label></div>
                 <input placeholder={element} className='loginDetails'  />
                 
                  </div>
            ))}

            <p className='forgot'>Forgot password?</p>
            <button className='btn'> Log in </button>
            <p >Don't have an account?
             <span className='forgotten'>Sign Up</span></p>
        </div>
        </div>
   
  )
}


export default Login