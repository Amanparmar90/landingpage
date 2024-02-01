// Hero.js
import React from 'react';
import Typed from 'react-typed';
import './Hero.css'; // Import the CSS file
import healthy from '../assets/healthy.png';
import burger from '../assets/burger.png';
const Hero = () => {
  return (
    <div className='text-white'>
      <div className='container'>
        <p className='greenText'>Welcome To India's First Platform Providing</p>
          <span className='financingText'>
            One Stop Solution to
            <Typed
              className='typedText'
              strings={['Aspiring Chef', 'Nilesh Chef', 'Aman chef']}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </span>
          <div className='searchContainer'>
            <input type='text' className='searchBar' placeholder='Enter name of Restaurent,Chef,Dish or any Street food....' />
          </div>
      </div>
      <div className='images-container'>
        <img src={healthy} alt="" className='img1'/>
        <img src={burger} alt="" className='img2'/>
      </div>
    </div>
  );
};

export default Hero;
