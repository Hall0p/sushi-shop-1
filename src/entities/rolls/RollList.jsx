import React from 'react';
import {rollsSushi} from "./rolls-&-sushi";
import Roll from "./Roll";


const RollList = () => {

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

export default RollList;