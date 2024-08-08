import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Topbar.scss';

const Topbar = () => (
  <header className="topbar">
    <div className="brand">Logoiipsum</div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/about">About Us</Link>
      <Link to="/login" className="login-btn">Login / Sign Up</Link>
    </nav>
  </header>
);

export default Topbar;
