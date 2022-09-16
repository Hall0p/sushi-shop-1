import React, {useState} from 'react';
import {rollsSushi} from "../shared/rolls-&-sushi";
import Roll from "./Roll";
import SetLine from "../entities/SetLine";

const Set = ({set}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="set">
      <div className="set-top">
        <div className="set-wrapper">
          <h3 className="roll__header">{set.name}</h3>
          <span className="set__amount">{set.compound.length}</span>
        </div>
        <img src="sushi/src/widgets/Set#" alt="set" className="roll__image set__image"/>
      </div>
      <div
        className="set-rolls-wrapper"
        style={{height: isOpen ? Math.ceil(set.compound.length / 2) * 240 + 20 : 20}}
      >
        <SetLine
          className="set-line__top"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <div
          className={'set-rolls ' + (isOpen ? 'set-rolls--open' : 'set-rolls--closed')}
        >
          {isOpen && set.compound.map((id) => {
            id = Math.trunc(id)
            const intoSet = rollsSushi.find((roll) =>
              roll.id === id
            )
            return <Roll roll={intoSet}/>
          })}
        </div>
        <div
          className="set-rolls-wall"
          style={{height: isOpen ? 0 : Math.ceil(set.compound.length / 2) * 240 + 20}}
        ></div>
        <SetLine
          className="set-line__bottom"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </div>
  );
};

export default Set;