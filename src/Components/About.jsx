import React from 'react';
import aboutimage from '../about.png';

function About() {
  return (
    <div id='about'>
    <div className='about-text'>
        <h1>UPCOMING EVENT</h1>
        <p>happening or appearing soon : forthcoming, approaching a list of upcoming events the upcoming election</p>
        <button>Read More</button>
    </div>
    <div className='about-image'>
        <img src={aboutimage} alt=''/>
    </div>
      
    </div>
  )
}

export default About;
