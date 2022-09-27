import React, {useState} from 'react';
import {rollsSushi} from "../shared/rolls-&-sushi";
import Roll from "./Roll";
import SetLine from "../entities/SetLine";

const Set = ({set}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [height] = useState(Math.ceil(set.compound.length / 2) * 240)


  return (
    <div className="set">
      <div className="set-top">
        <div className="set-wrapper">
          <h3 className="roll__header">{set.name}</h3>
          <span className="set__amount">{set.compound.length}</span>
        </div>
        {set.img
          ? <img src="sushi/src/widgets/Set#" alt="set" className="roll__image set__image"/>
          : <span className="set__image roll__image--warning">Картинки нет, но вы держитесь</span>
        }
      </div>
      <div
        className="set-bottom"
        style={{height: isOpen ? height + 20 : 20}}
      >
        <SetLine
          className="set-line__top"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <div className="set-bottom-wrapper">
        </div>
        <div
          style={{height: height - 20}}
          className={'set-rolls'}>
          {set.compound.map((idIsHalf) => {
            const id = Math.trunc(idIsHalf)

            const isHalf = id !== idIsHalf
            const intoSet = rollsSushi.find((roll) =>
              roll.id === id
            )
            return <Roll key={intoSet.id} isHalf={isHalf} roll={intoSet}/>
          })}
          <div
            style={{height: !isOpen ? height : 0}}
            className="set-wall">
          </div>
        </div>
        <SetLine
          className="set-line__bottom"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
      <span className="weight set__weight">
        {set.compound.length * 250} г.
      </span>
    </div>
  );
};

export default Set;