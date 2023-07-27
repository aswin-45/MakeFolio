import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validation
    if (!validateEmail(email) || password.length < 8) {
      setShowAlert(true);
      return;
    }
    console.log("here")
      const backendUrl = 'http://localhost:8080/api/v1/auth/register';
  
      const registrationData = {
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
  
      // setName('');
      setEmail('');
      // setMobile('');
      setPassword('');
      // setCPassword('');
      navigate('/home');

    // Add your authentication logic here
    // If the credentials are valid, proceed to login
    // If not, show an error message or redirect to a different page
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    try{
      const responce=await axios.post("http://localhost:8080/api/v1/auth/authenticate",{email,password});
      
      navigate('/home');
      let token=responce.data.token;
      let user=responce.data.user;
      localStorage.setItem('token',token);
      console.log(localStorage.getItem("token"));
      console.log(responce.data.user.email);
      localStorage.setItem('user',JSON.stringify(user));
      localStorage.setItem('token', responce.data.token);
    
    //     const Token={
    //       name:responce.data.token
    //     }
    //   axios.post('http://localhost:8081/post',Token,{
    //   headers: {
    //     // "Authorization": `Bearer ${token}`,
    //     'Content-Type': 'application/json',
    //     "Authorization":`Bearer ${responce.data.token}`
    //   },
    //  })
    //  .then((res)=>{
    //     console.log(responce.data)
    //  })
      
      // Handlename();
      // dispatch(login(
      //   {name: responce.data.user.name}
      // ))
      
      
    }
    catch(error){
      console.error("Error: " ,error);
      alert("Username/Password is Incorrect, If Not Registered Please");
    }
    setEmailError('');
    
    
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login to Portfolio Builder</h2>
        {showAlert && (
          <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
            Please enter a valid email and a password with at least 8 characters.
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
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

          <Button variant="primary" type="submit" onClick={handleFormSubmit}>
            Login
          </Button>
          <h5>Create a new account?<Link to="/sign-up">Sign-up</Link></h5>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
