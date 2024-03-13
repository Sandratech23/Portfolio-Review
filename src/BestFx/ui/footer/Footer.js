import React from 'react'
import './Footer.css'
import SocialMedia from '../socialMedia/SocialMedia'

export const Footer = () => {
  return (
    <div className='footer'>

        <p>FirePips FX Academy provides general <br></br>
         information and educational materials only.<br></br>
             Please recognize that your ultimate <br></br> 
             success or failure will be the result of your <br></br> 
             own efforts</p>
             <div className='below'>
             <p className='down'>© 2024 BestFx Academy. All Rights Reserved</p>
             <SocialMedia />
             </div>
        </div>
  )
}
 export default Footer