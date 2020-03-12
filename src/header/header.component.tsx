import React from 'react';
import './header.style.css';
import Clock from '../clock/clock.component';

function Header() {
  return (
    <div>
      <div className="Header">
        <div>
          Flightboard <br></br> <span className="Subheader">Locations</span>
        </div>
        <div>
          <Clock />
        </div>
        <div>by Logo</div>
      </div>
    </div>
  );
}

export default Header;
