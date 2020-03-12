import React from 'react';
import './header.style.css';
import Clock from '../clock/clock.component';

function Header() {
  return (
    <div className="header">
      <div className="flightboard">
        Flightboard <span className="locations">Locations</span>
      </div>
      <div>
        <Clock />
      </div>
      <div>by Logo</div>
    </div>
  );
}

export default Header;
