import React, { useState } from "react";
import Decrement from "./decrement";
import Increment from "./increment";
import Input from "./input";

const Counter2 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Increment count={count} setCount={setCount} />
      <h1>{count}</h1>
      <Decrement count={count} setCount={setCount} />
      <Input count={count} setCount={setCount} />
    </div>
  );
};

export default Counter2;
