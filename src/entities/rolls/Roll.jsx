import React from 'react';
import openImage from "../../shared/img/roll-outside/open-roll.svg";
import closedImage from "../../shared/img/roll-outside/closed-roll.svg";

const Roll = ({roll}) => {

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
              {roll.open
                ? <Open/>
                : <Closed/>
              }
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
        <h3 className="roll__price">
          300 ₽
        </h3>
      </div>
      <img src={roll.image} alt="roll" className="roll__image"/>
    </div>
  );
};

export default Roll;