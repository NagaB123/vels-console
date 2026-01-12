// src/components/Login.js
import React, { useState } from 'react';
import '../../src/styles/Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (username && password) {
      onLogin(username);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-logo">
          {/* Example SVG logo */}
          <svg width="48" height="48" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="22" fill="#6a11cb" />
            <text x="24" y="30" textAnchor="middle" fontSize="20" fill="#fff" fontFamily="Roboto">🔒</text>
          </svg>
        </div>
        <h2 className="login-title">Welcome Back</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="login-input"
        />
        <button type="submit" className="login-btn">Login</button>
        <div className="login-footer">
          <a href="#" className="login-link">Forgot password?</a>
        </div>
      </form>
    </div>
  );
};

export default Login;