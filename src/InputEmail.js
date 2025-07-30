// src/components/InputEmail.js
import React from 'react';
import Input from './Input';

const InputEmail = React.forwardRef((props, ref) => {
  return <Input type="email" ref={ref} {...props} />;
});

export default InputEmail;