import React, {useContext} from 'react';
import {sets} from '../shared/sets'
import Set from "../widgets/Set";
import {FilterContext} from "../shared/context";

const SetsList = () => {
  const filter = useContext(FilterContext)

  return (
    <div className="main">
      <div className="main-wrapper container">
        {sets.filter((set) =>
          set.name.toLowerCase().includes(filter.toLowerCase()))
          .map((set) =>
            <Set key={set.id} set={set}/>)
        }
      </div>
    </div>
  );
};

export default SetsList;