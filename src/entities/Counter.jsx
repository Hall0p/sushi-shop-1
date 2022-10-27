import React from 'react';
import minus from '../shared/img/minus.svg'
import plus from '../shared/img/plus.svg'

const Counter = () => {
  return (
    <div className="counter">
      <button className="remove counter__button">
        <img className="counter__image" src={minus} alt=""/>
      </button>
      <span className="count">1</span>
      <button className="add counter__button">
        <img className="counter__image" src={plus} alt=""/>
      </button>
    </div>
  );
};

export default Counter;