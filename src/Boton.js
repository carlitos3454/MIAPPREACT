import React from 'react';

const Boton = ({ texto, onClick, type = 'button' }) => {
  return (
    <button type={type} className="btn btn-primary" onClick={onClick}>
      {texto}
    </button>
  );
};

export default Boton;