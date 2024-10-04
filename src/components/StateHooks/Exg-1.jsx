import { useState } from "react"

const State_Example_1 = () => {
  const [color, setColor] = useState('Red');

  const changeColor = () => {
    const colorArray = ['Purple', 'Yellow', 'Orange', 'Blue', 'Green', 'Maroon', 'Black', 'White'];

    // for (let color in colorArray) {
    //   colorFunction(colorArray[color])
    // }

    const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    setColor(randomColor);
  }

  return (
    <>
      <h1>My favourite color is {color}!</h1>
      <button type="button" className="btn btn-outline-success" onClick={changeColor}>Change Color</button>
    </>
  )
}

export default State_Example_1