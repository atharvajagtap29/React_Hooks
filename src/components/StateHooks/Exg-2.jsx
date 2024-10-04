import { useState } from "react";

const State_Example_2 = () => {
    const [car, setCar] = useState({
        brand: "Toyota",
        model: "Camry",
        year: "2017",
        color: "White"
    })

    const updateColor = () => {
        // We pass the entire previous object to this setCar function. And while returning we return the same object, but updating the color parameter of the object
        setCar((prev) => {
            return {
                ...prev,
                color: "Black"
            }
        })
    }

    return (
        <>
            <h1>My Car: {car.brand}</h1>
            <h2>My Car Details</h2>
            <h3>Model: {car.model} | Manufacturing Year: {car.year} | Car Color: {car.color}</h3>
            <button onClick={updateColor}>Change Color</button>
        </>
    )
}

export default State_Example_2