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
    <div className="sushi">
      <h3 className="sushi-name">{roll.name}</h3>
      <div className="sushi-recipe">
        {roll.open
          ? <Open/>
          : <Closed/>
        }
        {
          roll.inside.map(ingredient => {
            return <img src={ingredient} alt="ingredient"/>
          })
        }
      </div>
    </div>
  );
};

export default Roll;