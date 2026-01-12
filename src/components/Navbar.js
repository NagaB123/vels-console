// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope, FaCogs, FaPaintBrush, FaCode, FaBullhorn, FaAngleRight } from 'react-icons/fa';
import '../../src/styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <ul className="nav-list">
      <li>
        <Link to="/"><FaHome /> Home</Link>
      </li>
      <li className="has-submenu">
        <span><FaCogs /> Services</span>
        <ul className="submenu">
          <li><Link to="/design"><FaPaintBrush /> Design</Link></li>
          <li><Link to="/development"><FaCode /> Development</Link></li>
          <li><Link to="/marketing"><FaBullhorn /> Marketing</Link></li>
        </ul>
      </li>
      <li>
        <Link to="/about"><FaInfoCircle /> About</Link>
      </li>
      <li>
        <Link to="/contact"><FaEnvelope /> Contact</Link>
      </li>
      <li>
        <Link to="/logout"><FaAngleRight /> Logout</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;