import React from 'react';
import openImage from "../shared/img/roll-outside/open-roll.svg";
import closedImage from "../shared/img/roll-outside/closed-roll.svg";
import Switcher from "../entities/switcher/Switcher";
import {useState} from "react";

const Roll = ({roll}) => {
  const [switcher, setSwitcher] = useState(false);

  const Open = () => {
    return <img src={openImage} alt="open roll" className="roll-ingredient__circle"/>
  }
  const Closed = () => {
    return <img src={closedImage} alt="closed roll" className="roll-ingredient__circle"/>
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
              roll.inside.map((ingredient,index) => {
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
          <Switcher switcher={switcher} setSwitcher={setSwitcher}/>
          <h3 className="roll__price">
            {switcher ? 150 : 300} ₽
          </h3>
        </div>
      </div>
      {roll.image
        ? <img src={roll.image} alt="roll" className="roll__image"/>
        : <span className="roll__image roll__image--warning">Картинки нет, но вы держитесь</span>
      }
      <span className="roll__weight">
        {switcher ? 150 : 250} г.
      </span>
    </div>
  );
};

export default Roll;