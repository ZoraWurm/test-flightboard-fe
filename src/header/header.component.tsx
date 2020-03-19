import React from 'react';
import './header.style.css';
import { Clock } from '../clock/clock.component';

export function Header() {
  return (
    <div className="header">
      <div className="flightboard">Flightboard</div>
      <div>
        <Clock />
      </div>
      <div>by Logo</div>
    </div>
  );
}
