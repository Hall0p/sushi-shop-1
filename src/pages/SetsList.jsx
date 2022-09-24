import React from 'react';
import {sets} from '../shared/sets'
import Set from "../widgets/Set";

const SetsList = () => {
  return (
    <div className="main">
      <div className="main-wrapper container">
        {sets.map((set) =>
          <Set key={set.id} set={set}/> )
        }
      </div>
    </div>
  );
};

export default SetsList;