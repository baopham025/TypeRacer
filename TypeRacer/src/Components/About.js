import React from "react";
import "./Stylings/About.css"; 
// Import images from assets
import baoImage from '../assets/bao.jpg';
import aafilImage from '../assets/aafil.jpg';
import renImage from '../assets/ren.jpg';

const About = () => {
  return (
    <div className="about-container">

      {/*Title*/}
      <h1>About TypeRacer</h1>

       {/*Three images*/}
      <div className="about-logos">
        <div className="about-person">
          <img src={baoImage} alt="Pham Bao Quoc" className="about-logo" />
          <div className="person-name">Pham Bao Quoc</div>
          <div className="person-role">Developer</div>
        </div>
        <div className="about-person">
          <img src={aafilImage} alt="Mahammad Aafil" className="about-logo" />
          <div className="person-name">Mahammad Aafil</div>
          <div className="person-role">Developer</div>
        </div>
        <div className="about-person">
          <img src={renImage} alt="Rentaro Kinoshita" className="about-logo" />
          <div className="person-name">Rentaro Kinoshita</div>
          <div className="person-role">Designer</div>
        </div>
      </div>

       {/*Paragraphs*/}
      <p>Welcome to TypeRacer!</p>
      <p>This app is made by Pham Bao Quoc, Mahammad Aafil, and Rentaro Kinoshita.</p>
      <p>Feel free to improve your typing skill😊</p>
      <p>Our team utilized JavaScript, CSS, and HTML💻</p>
    </div>
  );
};

export default About;
