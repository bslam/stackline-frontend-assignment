import React from 'react';
import stackline from '../assets/stackline_logo.svg';
import './Header.css';

export const Header = () => {
  return (
    <div className="header">
      <img src={stackline} alt="Stackline Logo" />
    </div>
  );
};

export default Header;