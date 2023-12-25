import React from "react";
import { useState } from "react";

const Input = ({count,setCount}) => {
    const [inpValue, setInpValue] = useState(0)
  return (
    <div>
      <input
        type="number"
        value={inpValue}
        onChange={(e) => setInpValue(e.target.valueAsNumber)}
      />
      <button onClick={() => setCount(count + inpValue)}>Inc by Value</button>
    </div>
  );
};

export default Input;
