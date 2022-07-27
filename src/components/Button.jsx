import React from 'react';
import './components.scss';

const Button = ({ type, className, text }) => {
  return (
    <button type={type} className={className}>
      {text}
    </button>
  );
};

export default Button;
