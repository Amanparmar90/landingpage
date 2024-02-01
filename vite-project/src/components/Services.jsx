/* Services.js */

import React, { useState } from 'react';
import tiffinwala from '../assets/tiffinwala.png';
import streetvendor from '../assets/streetvendor.png';
import restroowner from '../assets/restroowner.png';
import masterchef from '../assets/masterchef.png';
import "./Services.css";

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleServices = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={isOpen ? 'openservices' : 'closedservices'}>
        <div className='services'>
          <ul>
            <li><img src={tiffinwala} alt="" /><a href="#">tiffin<br/>Walla</a></li>
            <li><img src={masterchef} alt="" /><a href="#">Master<br/>Chef</a></li>
            <li><img src={streetvendor} alt="" /><a href="#">Street<br/>Vendor</a></li>
            <li><img src={restroowner} alt="" /><a href="#">Restro<br/>Owner</a></li>
          </ul>
        </div>
        <button onClick={toggleServices}>Services</button>
      </div>
    </div>
  );
}

export default Services;
