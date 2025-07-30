import React from 'react';

const Input = React.forwardRef(({ type = 'text', placeholder, value, onChange, className }, ref) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      ref={ref}
      className={`form-control ${className || ''}`}
    />
  );
});

export default Input;