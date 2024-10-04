import { useState } from "react";

const State_Example_3 = () => {
    const [count, setCount] = useState(0); 

    const increaseCount = () => {
        // 1
        setCount((prev) => prev + 1);
        // 2
        setCount((prev) => prev + 1);
        // 3
        setCount((prev) => prev + 1);
    }

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={increaseCount}>Increase by 3!</button>
        </>
    )
}

export default State_Example_3;
