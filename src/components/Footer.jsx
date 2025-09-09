import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
    <div className="about">
        <h3>About</h3>
        <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Flipkart Stories</li>
            <li>Press</li>
            <li>Corporate Information</li>
        </ul>
    </div>   
    <div className="companies">
        <h3>Group Companies</h3>
        <ul>
            <li>Myntra</li>
            <li>Cleartrip</li>
            <li>Shopsy</li>
            
        </ul>
    </div>  
    <div className="help">
        <h3>Help</h3>
        <ul>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
        </ul>
    </div>  
    <div className="policy">
        <h3>Consumer Policy</h3>
        <ul>
            <li>Cancellation & Returns</li>
            <li>Terms of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>Grievance Redressal</li>
            <li>EPR Compliance</li>
        </ul>
    </div>  
    
    </div>
  )
}

export default Footer
