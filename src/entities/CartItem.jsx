import React from 'react';
import Counter from "./Counter";
import plus from "../shared/img/plus.svg";

const CartItem = ({item, amount}) => {
  return (
      <div className="cart-item">
        <img src={'#' && item.image} alt="cart item" className="cart-item__image"/>
        <div className="cart-item-wrapper">
          <div className="cart-item__left">
            <h3 className="cart-item__header">{item.name}</h3>
            <div className="cart-item__weight">250г.</div>
          </div>
          <div className="cart-item__right">
            <Counter count={amount}/>
            <span className="cart-item__price">{item.price}</span>
            <button className="cancel">
              <img className="cancel__image" src={plus} alt="cancel"/>
            </button>
          </div>
        </div>
      </div>
  );
};

export default CartItem;