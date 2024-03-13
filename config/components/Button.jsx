import { FwButton } from "@freshworks/crayons/react";
import React from 'react';

const Button = () => {
  const handleClick = (ev) => alert('Clicked' + JSON.stringify(ev));
  return (
    <FwButton color="primary" onFwClick={handleClick}>
        Click me.................
    </FwButton>
  )
}

export default Button;