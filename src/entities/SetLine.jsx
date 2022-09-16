import React from 'react';

const SetLine = ({className, isOpen, setIsOpen}) => {

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={className + ' ' + 'set-line'}
    >
    </button>
  );
};

export default SetLine;