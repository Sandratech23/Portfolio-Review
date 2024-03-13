import React from 'react'
import './SignUp.css'
// import { Link } from 'react-router-dom'
import { information } from '../../info/data'


const {id,subject,element}=information

export const Login = () => {
  return (
    < div className='loginForm'>
        < div >
            <h1 className='welcomeNote'>Welcome To BestFx Academy</h1>
            <p>We have a community of over 20,000 Forex Traders <br />
            where continuous Forex Technical and Fundamental <br /> analysis is being shared</p>
        </div>
        <div div className='loginBox'>
            <h2>Sign Up</h2>
            {information.map(({id,element, subject})=>(
                <div key={id}> 
                 <div><label>{subject}</label></div>
                 <input placeholder={element} className='loginDetails'  />
                  </div>
            ))}
            <div>
           <p> <input type='checkbox'/> I accept the <span className='forgotten'>Terms & privacy policy </span> </p>
            </div>

            <button className='btn'> Sign Up </button>
            <p >Already have an account?
             <span className='forgotten'>Log in</span></p>
        </div>
        </div>
   
  )
}


export default Login