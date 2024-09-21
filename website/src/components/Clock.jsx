// src/components/Clock.js
import React, { useState, useEffect } from 'react';
import './Clock.css';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock">
      <h1>{time.toLocaleTimeString()}</h1>
      <p>{time.toLocaleDateString()}</p>
    </div>
  );
}

export default Clock;
