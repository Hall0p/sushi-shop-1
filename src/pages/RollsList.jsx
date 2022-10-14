import React from 'react';
import {rollsSushi} from "../shared/rolls-&-sushi";
import Roll from "../widgets/Roll";
import {useContext} from "react";
import {FilterContext} from "../shared/context";


const RollsList = () => {
  const filter = useContext(FilterContext)

  return (
    <div className="main">
      <div className="main-wrapper container">
        {rollsSushi.filter((roll) =>
          roll.name.toLowerCase().includes(filter.toLowerCase()))
          .map((roll) =>
          <Roll roll={roll} key={roll.name}/>
        )}
      </div>
    </div>
  );
};

export default RollsList;