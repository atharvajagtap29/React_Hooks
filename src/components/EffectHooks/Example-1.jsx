import { useEffect, useState } from "react";

const Effect_Example_1 = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => {
                // console.log(count)
                return count+1;
            })
        }, 2000)
    }, /*[count]*/ [])

    return (
        <>
            <h1>This component has been rendered {count} times</h1>
        </>
    )
}

export default Effect_Example_1