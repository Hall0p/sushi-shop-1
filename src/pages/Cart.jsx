import React, {useEffect, useState} from 'react';
import CartItem from "../entities/CartItem";
import {useSelector} from "react-redux";
import {rollsSushi} from "../shared/rolls-&-sushi";
import {sets} from "../shared/sets";


const Cart = () => {
  const cart = useSelector(state => state.cart)
  const [cartSets, setCartSets] = useState([])
  const [cartRolls, setCartRolls] = useState([])

  const rollsList = rollsSushi
  const setsList = sets

  const sum = 100

  const grouper = (arr) => {
    if (!arr) return
    let arrCopy = arr.slice(0)
    const result = []
    const group = () => {
      if (!arrCopy.length) return
      const firstId = arrCopy[0]
      const amount = arrCopy.filter((id) => firstId === id).length
      result.push([firstId, amount])
      arrCopy = arrCopy.filter((id) => firstId !== id)
      group()
    }
    group()

    console.log(result);

    return result
  }

  useEffect(() => {
    setCartRolls(grouper(cart.rolls))
  },[cart.rolls])

  useEffect(() => {
    setCartSets(grouper(cart.rolls))
  },[cart.sets])

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
              <h2 className="cart__empty">
                {
                  cartRolls.length || cartSets.length
                  ? ''
                  : 'Ваша корзина пуста'
                }
              </h2>
              {cartSets && cartSets.map(arr => {
                  const id = arr[0]
                  const amount = arr[1]
                  const set = setsList.find((item) => item.id === id)
                  return <CartItem key={id} item={set} amount={amount}/>
                }
              )}
              {cartRolls && cartRolls.map(arr => {
                const id = arr[0]
                const amount = arr[1]
                const roll = rollsList.find((item) => item.id === id)
                  return <CartItem key={id} item={roll} amount={amount}/>
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