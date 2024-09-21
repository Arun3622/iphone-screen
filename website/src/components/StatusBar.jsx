// src/components/StatusBar.js
import React from 'react';
import './StatusBar.css';
import batteryIcon from '../assets/battery.svg';

function StatusBar() {
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).replace(/ AM| PM/, '');
  
  return (
    <div className="status-bar">
      <div className="status-center">
        {currentTime}
      </div>
      <div className="status-right">
        <img src={batteryIcon} alt='battery' />
      </div>
    </div>
  );
}

export default StatusBar;
