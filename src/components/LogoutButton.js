// src/components/LogoutButton.js
import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import '../../src/styles/LogoutButton.css';

const LogoutButton = ({ onClick }) => (
  <button className="logout-btn" onClick={onClick}>
    <FiLogOut style={{ marginRight: '8px', fontSize: '1.2em' }} />
    Logout
  </button>
);

export default LogoutButton;