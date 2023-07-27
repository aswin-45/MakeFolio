import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import './SignUp.css'; // Create the SignUpPage.css file for custom styles

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !validateEmail(email) ||
      password.length < 8 ||
      name.trim() === ''
    ) {
      setShowAlert(true);
      return;
    }
      console.log("here")
      const backendUrl = 'http://localhost:8080/api/v1/auth/register';
  
      const registrationData = {
        name: name,
        email: email,
        password: password,
      };
  
      axios.post(backendUrl, registrationData)
        .then(response => {
          const { token } = response.data;
          console.log(response)
          localStorage.setItem('token', token);
         
  
        })
        .catch(error => {
          console.error('Registration error:', error);
        });
  
      setName('');
      setEmail('');
      // setMobile('');
      setPassword('');
      // setCPassword('');
      navigate('/');

    // Add your sign-up logic here
    // If the sign-up is successful, proceed to the next step
    // If not, show an error message or redirect to a different page
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Create an Account</h2>
        {showAlert && (
          <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
            Please enter a valid email, name, and a password with at least 8 characters.
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              isInvalid={showAlert && name.trim() === ''}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={showAlert && !validateEmail(email)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email address.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={showAlert && password.length < 8}
            />
            <Form.Control.Feedback type="invalid">
              Password must be at least 8 characters long.
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign Up
          </Button>
          <h5>Already have an account?<Link to="/login">Login</Link></h5>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
