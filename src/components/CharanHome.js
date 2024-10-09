import React from 'react';
import { Link } from 'react-router-dom';
import '../CharanHome.css'; // Ensure this path is correct

function CharanHome() {
  return (
    <div className="charanhome-container">
      {/* Left Sidebar */}
      <div className="left-column">
        {/* Profile Section - Image and Name */}
        <div className="profile-section">
          <img src="path-to-your-image.jpg" alt="Profile" />
          <div className="profile-name">
            Profile Name {/* Replace with actual name if needed */}
          </div>
        </div>

        {/* Block 1 - Home */}
        <Link to="/" className="block">
          <i className="fas fa-home"></i> {/* Icon for Home */}
          Home
        </Link>

        {/* Block 2 - Events */}
        <Link to="/events" className="block">
          <i className="fas fa-calendar"></i> {/* Icon for Events */}
          Events
        </Link>

        {/* Block 3 - Achievements */}
        <Link to="/achievements" className="block">
          <i className="fas fa-trophy"></i> {/* Icon for Achievements */}
          Achievements
        </Link>

        {/* Block 4 - Compare */}
        <Link to="/compare" className="block">
          <i className="fas fa-balance-scale"></i> {/* Icon for Compare */}
          Compare
        </Link>

        {/* Block 5 - Student Info */}
        <Link to="/student-info" className="block">
          <i className="fas fa-user"></i> {/* Icon for Student Info */}
          Student Info
        </Link>
      </div>
    </div>
  );
}

export default CharanHome;
