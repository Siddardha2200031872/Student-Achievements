// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import './Login.css'; // Optional: import your CSS file for styles

function Login() {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page refresh

    if (!studentId || !password) {
      setErrorMessage('Please enter both Student ID and Password');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/login', { studentId, password });

      // Assuming the API responds with a success status
      if (response.data.success) {
        navigate('/charanhome'); // Use useNavigate for routing
      } else {
        setErrorMessage('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage('An error occurred during login. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          placeholder="Enter Student ID"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
