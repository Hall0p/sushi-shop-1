import React from 'react';
import {useSelector} from "react-redux";

const Cart = () => {
  const sum = useSelector(state => state.sum.sum)

  return (
    <div className="main">
      <div className="main-wrapper container">
        <div className="cart">
          <div className="cart-left">
            <h1 className="cart__header">
              Моя корзина
            </h1>
            <div className="cart-products">
                <div className="cart-item">
                  <img src="#" alt="cart item" className="cart__image"/>
                  <div className="cart-item-wrapper">
                    <div className="cart-item__left">
                      <h3 className="cart-item__header">Name</h3>
                      <div className="cart-item__weight">250г.</div>
                    </div>
                    <div className="cart-item__right">
                      <button className="cart-item__counter"></button>
                      <span className="cart-item__price">300р.</span>
                      <button className="cart-item__cancel"></button>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="cart-right-wrapper">
            <div className="sticky">
              <div className="cart-right">
                <div className="cart-center">
                  <ul className="cart-sum">
                    <li className="cart-sum--left">Товары:</li>
                    <li className="cart-sum--right">{sum}</li>
                  </ul>
                  <ul className="cart-sum">
                    <li className="cart-sum--left">Доставка:</li>
                    <li className="cart-sum--right color--green">бесплатно</li>
                  </ul>
                  <ul className="cart-sum cart-sum__total">
                    <li className="cart-sum--left">Итого</li>
                    <li className="cart-sum--right">{sum}</li>
                  </ul>
                </div>
                <div className="cart-right-bottom">
                  <button className="cart__button cart__button--left">Самовывоз</button>
                  <button className="cart__button cart__button--right">Доставка</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;