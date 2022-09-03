import React, {useState} from 'react';
import classes from "./Switcher.module.scss";

const Switcher = () => {
  const [switcher, setSwitcher] = useState('0')
  const [isPressed, setIsPressed] = useState(false)
  const [pressPoint, setPressPoint] = useState(0)

  const onMouseDown = (event) => {
    setSwitcher(Math.min(Math.max(event.pageY - 18, 0), 22) + 'px');
    setIsPressed(true)
    console.log(event.pageY)
  }
  const onMouseMove = (event) => {
    if (isPressed === false) return false
    setSwitcher(Math.min(Math.max(event.pageY - 18, 0), 22) + 'px');
  }
  const onMouseUp = () => {
    setIsPressed(false)
  }

  return (
    <div className={classes.wrapper}>
      <div
        className={classes.container}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      >

      </div>
      <div
        style={{top: switcher}}
        className={classes.switcher}
      ></div>
    </div>
  );
};

export default Switcher;