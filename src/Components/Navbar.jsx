import React, { useState } from 'react';

const Navbar = ({ setCategory }) => {
  const [activeItem, setActiveItem] = useState('general'); // Set default active tab
  const [hoveredItem, setHoveredItem] = useState(null);
  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  const handleClick = (item) => {
    setActiveItem(item);
    setCategory(item);
  };

  const linkStyle = (item) => ({
    padding: '10px 15px',
    cursor: 'pointer',
    color: activeItem === item ? 'black' : hoveredItem === item ? 'black' : 'white',
    backgroundColor: activeItem === item ? '#ddd' : hoveredItem === item ? '#ddd' : 'transparent',
    borderRadius: '8px',  // Rounded corners for the background
    transition: 'background-color 0.3s ease, color 0.3s ease',
  });

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">NewsMag</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div
                className="nav-link"
                style={linkStyle('general')}
                onMouseEnter={() => handleMouseEnter('general')}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('general')}
              >
                Home
              </div>
              
            </li>

            <li className="nav-item">
              <div
                className="nav-link"
                style={linkStyle('technology')}
                onMouseEnter={() => handleMouseEnter('technology')}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('technology')}
              >
                Technology
              </div>
              
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                style={linkStyle('business')}
                onMouseEnter={() => handleMouseEnter('business')}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('business')}
              >
                Business
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                style={linkStyle('health')}
                onMouseEnter={() => handleMouseEnter('health')}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('health')}
              >
                Health
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                style={linkStyle('sports')}
                onMouseEnter={() => handleMouseEnter('sports')}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('sports')}
              >
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                style={linkStyle('entertainment')}
                onMouseEnter={() => handleMouseEnter('entertainment')}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('entertainment')}
              >
                Entertainment
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

