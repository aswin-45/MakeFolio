import React from 'react';
import { MainNav } from './NavBar';
import './about.css';

function About() {
  return (
    <>
    <MainNav/>
    <section className="about-us">
      
      <div className="container1">
        <h2>About Us</h2>
        <p>
          We are a team of passionate developers dedicated to providing you with the best online portfolio building experience. With our intuitive interface and customizable templates, you can showcase your work in a professional and visually stunning way.
        </p>
        <p>
          Our mission is to empower individuals and businesses to create impressive portfolios that effectively represent their skills and achievements. Whether you are a freelancer, designer, photographer, or any other professional, our platform is designed to meet your unique needs.
        </p>
        <p>
          Join our community today and start building your online portfolio with ease. Let your work speak for itself and make a lasting impression on potential clients and employers.
        </p>
        <h3>Contact Us</h3>
        <p>
          For any inquiries or assistance, please feel free to reach out to us at:
        </p>
        <p>
          Email: <a href="mailto:contact@example.com">support@MakeFolio.com</a>
        </p>
        <p>
          Mobile: 9876543210
        </p>
        <p>
          Connect with us on social media:
        </p>
        <div className="social-links">
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </section>
    
  </>
  );
}

export default About;