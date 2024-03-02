import { BaseProps } from "../types";
import { useState } from "react";

//let currentCount = 0;
// No good cuz states or something i dunno

export default function StateDemo1({ title }: BaseProps) {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>{title}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}> Decrement</button>
      <h3>{count}</h3>
    </>
  );
}
