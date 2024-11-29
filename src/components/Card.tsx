import { useState } from "react";

export const Card = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Card</button>
      <br />
      {count}
    </>
  );
};
