import React from 'react';
import {rollsSushi} from "./rolls-&-sushi";
import Roll from "./Roll";


const RollList = () => {

  return (
    <div className="main">
      {rollsSushi.map(roll =>
        <Roll roll={roll}/>
      )}
    </div>
  );
};

export default RollList;