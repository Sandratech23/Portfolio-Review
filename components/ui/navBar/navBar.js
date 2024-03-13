import React from 'react';
import {Link} from 'react-router-dom';
import Layout from '../layout/Layout';
import './navBar.css';

const navLinks=[
    {link: '/', label: 'NUTSHELL', id:1,},
    {link: '/work', label: 'WORK', id:2},
    {link: '/contact', label: 'CONTACT', id:3}
  ]
 const NavBar = () =>{
    return(
        <header>
            <Layout>
            <nav className='navBar'>
          
        <div className='name'> 
          <a href='' className='logo'>callmesandra</a>
        </div>
        <nav className='icons'>
    {navLinks.map((navLink)=>(
            <Link to={navLink.link} className='navBarLinks'key={navLink.id}> {navLink.label} </Link>
    
    ))} </nav>
      
    </nav>
          </Layout>
        </header>
    
     ); }

 export default NavBar