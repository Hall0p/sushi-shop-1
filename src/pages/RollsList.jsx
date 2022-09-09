import React from 'react';
import {rollsSushi} from "../entities/rolls/rolls-&-sushi";
import Roll from "../entities/rolls/Roll";


const RollsList = () => {

  return (
    <div className="main">
      <div className="main-wrapper container">
        {rollsSushi.map((roll) =>
          <Roll roll={roll} key={roll.name}/>
        )}
      </div>
    </div>
  );
};

export default RollsList;