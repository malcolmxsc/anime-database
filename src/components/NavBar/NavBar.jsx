import React from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

const navbarStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '10px 0',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '960px',
  margin: '0 auto',
  padding: '0 20px',
};

const welcomeStyle = {
  fontSize: '18px',
};

const buttonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  textDecoration: 'underline',
};

const logoutStyle = {
  color: '#f44336',
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: 'color 0.3s',
};

const NavBar = ({ user, setUser }) => {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav style={navbarStyle}>
      <div style={containerStyle}>
        <span style={welcomeStyle}>Welcome {user.name}, to Your AnimeDataBank.</span>
        <Link to="/" style={buttonStyle}>
          Home
        </Link>
        <Link to="/" onClick={handleLogOut} style={logoutStyle}>
          Log Out
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;