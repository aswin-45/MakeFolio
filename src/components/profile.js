import React from 'react';
import './profile.css';
import { MainNav } from './NavBar';
import Feedback from './feedback';
import { Link } from 'react-router-dom';
function ProfilePage() {
      return (
        <div>
            <MainNav/>
        <div className="dashboard-container">
          <div className="profile-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile Avatar"
              className="profile-avatar"
            />
            <h1 className="profile-name">John Doe</h1>
            <p className="profile-description">
              Frontend Developer | UI/UX Enthusiast
            </p>
            <div className="profile-social-links">
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" />
              </a>
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin" />
              </a>
              <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter" />
              </a>
            </div>
          </div>
          <div className="skills-card">
            <h2 className="section-heading">Skills</h2>
            <ul className="skills-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="projects-card">
            <h2 className="section-heading">Projects</h2>
            <div className="project">
              <h3>Project 1</h3>
              <p>Description of Project 1</p>
            </div>
            <div className="project">
              <h3>Project 2</h3>
              <p>Description of Project 2</p>
            </div>
            {/* Add more projects as needed */}
          </div>
        </div>
        <div className="personal-details-container">
      <div className="personal-details-section">
        <h2 className="section-heading">Personal Details</h2>
        <div className="personal-info">
          <p>Name: John Doe</p>
          <p>Educational Qualification: Bachelor of Engineering</p>
          <p>University: XYZ University</p>
          <p>Certification: React Developer</p>
          <p>Address: 123 Main Street, City, Country</p>
          <p>Mobile Number: +1 123-456-7890</p>
          <p>Email ID: john.doe@example.com</p>
          <p>Nationality: Country</p>
          <p>Achievements: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="social-links">
          <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" />
          </a>
          <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" />
          </a>
          <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter" />
          </a>
        </div>
      </div>
    </div>
<Link to='/feedback'>feedback</Link>
        </div>
      );
}

export default ProfilePage;


