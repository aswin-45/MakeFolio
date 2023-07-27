import axios from 'axios';
import React, { useState } from 'react';
import './feedback.css';
import { MainNav } from './NavBar';

const Feedback = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const Token = {
    name: name,
    feedback: feedback
  }

  const Submit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8181/api/v1/demo/send', Token, {
      headers: {
        // "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
    })
      .then((res) => {
        console.log(res.data);
        setShowAlert(true);
      })
      .catch((error) => {
        console.error('Error submitting feedback:', error);
      });
  }

  return (
    <div>
      <MainNav/>
      <div className='bod'>
        <div className='body-in'>
          <h1>Give your Feedback</h1>
          <div className='area'>
            <form onSubmit={Submit}>
              <input value={name} onChange={(e) => { handleChange(e, setName) }} required placeholder='Enter Your User Name' className='input' />
              <textarea value={feedback} onChange={(e) => { handleChange(e, setFeedback) }} required placeholder='Enter Your Feedback' className='text' />
              <div>
                <button type='submit'>Submit</button>
              </div>
            </form>
          </div>
          {showAlert && (
            <div className="alert">
              <p>Feedback submitted successfully.</p>
              <p>Thank You.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Feedback;