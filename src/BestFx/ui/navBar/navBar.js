import React from 'react';
import {Link} from 'react-router-dom';
// import Layout from '../layout'
import './navBar.css';

const navLinks=[
    {link: '/', label: 'Home', id:1,},
    {link: '/about', label: 'About Us', id:2},
    {link: '/calculator', label: 'BestFx Calculator', id:3},
    {link: '/Testimonials', label: 'Testimonials and Reviews', id:4},
    {link: '/loginPage', label: 'Login', id:5},
    {link: '/signUpPage', label: 'Sign Up', id:6}
  ]
 const NavBar = () =>{
    return(
        <header>
            {/* <Layout> */}
            <nav className='link-tag'>
        <div className='name'> 
          <img src='https://yt3.googleusercontent.com/_XC9tmC9Y_q4k4K92qKUGV-YnVSL59Hoj80uaDkY8YBINyCHLUBcmrBRwQhRB_jXBR9Zq0odbQ=s900-c-k-c0x00ffffff-no-rj' className='textme' />
        </div>
        <nav className='icons'>
    {navLinks.map((navLink)=>(
            <Link to={navLink.link} className='iconz'key={navLink.id}> {navLink.label} </Link>
    
    ))} </nav>
    </nav>
            {/* </Layout> */}
        </header>
    
     ); }

 export default NavBar