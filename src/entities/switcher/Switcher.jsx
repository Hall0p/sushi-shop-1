import React from 'react';
import classes from "./Switcher.module.scss";

const Switcher = ({switcher, setSwitcher}) => {
  const onClick = () => {
    setSwitcher(switcher === false)
  }

  return (
    <div className={classes.wrapper}>
      <div
        className={classes.container}

        onClick={onClick}
        onDragStart={() => false}
      >
      </div>
      <div
        style={{top: switcher === true? 20 : 1}}
        className={classes.switcher}
      ></div>
    </div>
  );
};

export default Switcher;