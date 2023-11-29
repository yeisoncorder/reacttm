import React, { useState } from 'react';
import './Switch.css';

const Switch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`switch ${isChecked ? 'switch--on' : 'switch--off'}`} onClick={handleToggle}>
      <div className={`switch__toggle ${isChecked ? 'switch__toggle--on' : 'switch__toggle--off'}`} />
    </div>
  );
};

export default Switch;
