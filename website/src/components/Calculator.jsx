import React, { useState, useEffect } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (input !== '') {
      setAnimationClass('fade-in');
      const timer = setTimeout(() => setAnimationClass(''), 500); // Match the animation duration
      return () => clearTimeout(timer);
    }
  }, [input]);

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        // Safely evaluate the expression
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      // Prevent multiple operators
      if (/[+\-*/]$/.test(input) && /[+\-*/]/.test(value)) return;
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className={`display ${animationClass}`}>{input || '0'}</div>
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((btn) => (
          <button 
            key={btn} 
            onClick={() => handleButtonClick(btn)} 
            className={btn === 'C' ? 'clear-btn' : ''}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
