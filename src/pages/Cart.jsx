import React from 'react';
import CartItem from "../entities/CartItem";
import {useSelector} from "react-redux";
import {rollsSushi} from "../shared/rolls-&-sushi";
import {sets} from "../shared/sets";


const Cart = () => {
  const cart = useSelector(state => state.cart)
  const cartSets = cart.sets
  const cartRolls = cart.rolls

  const rollsList = rollsSushi
  const setsList = sets

  const sum = 100

  return (
    <main className="main">
      <div className="main-wrapper container">
        <div className="cart">
          <div className="cart-left">
            <h1 className="cart__header">
              Моя корзина
            </h1>
            {/*Нужно сделать так, чтобы элементы стакались, а не выводились отдельно*/}
            <div className="cart-products">
              {cartSets && cartSets.map(id => {
                  const set = setsList.find((item) => item.id === id)
                  return <CartItem key={id} item={set}/>
                }
              )}
              {cartRolls && cartRolls.map(id => {
                console.log('its working');
                const roll = rollsList.find((item) => item.id === id)
                  return <CartItem key={id} item={roll}/>
                }
              )}
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
    </main>
  );
};

export default Cart;