import React from 'react';
import minus from '../shared/img/minus.svg'
import plus from '../shared/img/plus.svg'

const Counter = ({addAction, removeAction, count}) => {

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="counter"
    >
      <button
        onClick={() => removeAction()}
        className="remove counter__button"
      >
        <img className="counter__image" src={minus} alt=""/>
      </button>
      <span className="count">
        {count}
      </span>
      <button
        onClick={() => addAction()}
        className="add counter__button"
      >
        <img className="counter__image" src={plus} alt=""/>
      </button>
    </div>
  );
};

export default Counter;