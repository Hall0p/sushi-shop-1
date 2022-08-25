import React from 'react';
import openImage from "../../shared/img/roll-outside/open-roll.svg";
import closedImage from "../../shared/img/roll-outside/closed-roll.svg";

const Roll = ({roll}) => {

  const Open = () => {
    return <img src={openImage} alt="open rolls and sushi" className="open"/>
  }
  const Closed = () => {
    return <img src={closedImage} alt="closed rolls and sushi" className="open"/>
  }

  return (
    <div className="roll">
      <div className="roll-wrapper">
        <h3 className="roll__header">{roll.name}</h3>
        <div className="roll-recipe">
          {roll.open
            ? <Open/>
            : <Closed/>
          }
          {
            roll.inside.map((ingredient, index) => {
              return <img key={index} src={ingredient} alt="ingredient"/>
            })
          }
        </div>
      </div>
      <img src={roll.image} alt="roll" className="roll__image"/>
    </div>
  );
};

export default Roll;