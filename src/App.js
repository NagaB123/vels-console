import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';

const Home = () =><h2>Home</h2>;
const Design = () => <h2>Design Services</h2>;
const Development = () => <h2>Development Services</h2>;
const Marketing = () => <h2>Marketing Services</h2>;
const About = () => <h2>About Us</h2>;
const Contact = () => <h2>Contact Us</h2>;
const Logout = () => <h2>R u sure</h2>;


function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = username => {
    setUsername(username);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setUsername('');
    setLoggedIn(false);
  };

  // If not logged in, show Login screen
  if (!loggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Router> 
      <Navbar />
      <div style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<Design />} />
          <Route path="/development" element={<Development />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
