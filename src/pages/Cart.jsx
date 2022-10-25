import React from 'react';
import {useSelector} from "react-redux";

const Cart = () => {
  const sum = useSelector(state => state.sum.sum)

  return (
    <div className="main">
      <div className="main-wrapper container">
        <div className="cart">
          <div className="cart-left">
            <h2 className="cart__header">
              Моя корзина
            </h2>
            <div className="cart-wrapper">
              {/*Сюда массив с содержимым корзины*/
                <div className="cart__product"></div>}
            </div>
          </div>
          <div className="cart-right">
            <div className="sticky"><div className="cart-center">
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
              </div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;