import { useEffect, useRef, useState } from "react";

const Ref_Example_1 = () => {
  const [value, setValue] = useState(0);
  const count = useRef(0);
  //   console.log(count);

  const increaseValue = () => {
    setValue((prev) => prev + 1);
  };

  const decreaseValue = () => {
    setValue((prev) => prev - 1);
  };

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <button onClick={decreaseValue}>-1</button>
      <h2>{value}</h2>
      <button onClick={increaseValue}>+1</button>
      <h1 style={{ padding: "20px" }}>{count.current}</h1>
    </>
  );
};

export default Ref_Example_1;
