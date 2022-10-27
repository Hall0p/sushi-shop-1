import React from 'react';
import openImage from "../shared/img/roll-outside/open-roll.svg";
import closedImage from "../shared/img/roll-outside/closed-roll.svg";
import Switcher from "../entities/switcher/Switcher";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Counter from "../entities/Counter";
import {addRollCartAction, removeRollCartAction} from "../shared/store/cartReducer";

const Roll = ({isHalf = false, roll}) => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.rolls)

  const [switcher, setSwitcher] = useState(isHalf);

  const Open = () => {
    return <img src={openImage} alt="open roll" className="roll-ingredient__circle"/>
  }
  const Closed = () => {
    return <img src={closedImage} alt="closed roll" className="roll-ingredient__circle"/>
  }

  const rollsInCart = () => {
    return cart.filter((id) => id === roll.id).length
  }
  const addToCart = () => {
    dispatch(addRollCartAction(roll.id))
  }
  const removeFromCart = () => {
    dispatch(removeRollCartAction(roll.id))
  }

  return (
    <div className="roll">
      <div className="roll-wrapper">
        <h3 className="roll__header">{roll.name}</h3>
        <div className="roll-recipe">
          <div className="roll-recipe__wrapper">
            {roll.outside &&
              <img
                src={roll.outside}
                alt="outside ingredient"
                className="roll-ingredient roll-ingredient--outside"
              />
            }
            <div className="roll-ingredient__circle--wrapper">
              {roll.open
                ? <Open/>
                : <Closed/>
              }
              {switcher &&
                <span className="roll-ingredient__circle--line"/>
              }
            </div>
          </div>
          <div className="roll-recipe__wrapper--inside">
            {
              roll.inside.map((ingredient, index) => {
                return (
                  <img
                    key={index}
                    src={ingredient}
                    alt="inside ingredient"
                    className="roll-ingredient roll-ingredient--inside"
                  />
                )
              })
            }
          </div>
        </div>
        <div className="roll-bottom">
          <div className="roll-bottom-wrapper">
            <Switcher switcher={switcher} setSwitcher={setSwitcher}/>
            <h3 className="roll__price">
              {switcher ? 150 : 300} ₽
            </h3>
          </div>
          {
            rollsInCart()
              ? <Counter
                addAction={() => addToCart()}
                removeAction={() => removeFromCart()}
                count={rollsInCart()}
              />
              : <button
                onClick={() => addToCart()}
                className="buy-button"
              >
                Купить
              </button>
          }
        </div>
      </div>
      {roll.image
        ? <img src={roll.image} alt="roll" className="roll__image"/>
        : <span className="roll__image roll__image--warning">Картинки нет, но вы держитесь</span>
      }
      <span className="weight roll__weight">
        {switcher ? 150 : 250} г.
      </span>
      <div className="set-line roll-line"></div>
    </div>
  );
};

export default Roll;