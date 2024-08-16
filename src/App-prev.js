import { useState } from "react";
import "./App.css";

function App() {
  const colors = ["red", "yellow", "green", "yellow"];
  const [currentColor, setCurrentColor] = useState(colors[0]);

  function colorChange() {
    let indexColor = colors.indexOf(currentColor);
    console.log(indexColor);
    let nextColor = indexColor + 1;
    if (nextColor === 4) {
      nextColor = 0;
    }
    setCurrentColor(colors[nextColor]);
  }

  return (
    <>
      <h1>Traffic Lights</h1>
      <div className="stand">
        <div
          className={`light red-start ${currentColor === "red" ? "red" : ""}`}
        ></div>
        <div
          className={`light yellow-start ${
            currentColor === "yellow" ? "yellow" : ""
          }`}
        ></div>
        <div
          className={`light green-start ${
            currentColor === "green" ? "green" : ""
          }`}
        ></div>
      </div>
      <button onClick={colorChange}>Switch</button>
    </>
  );
}

export default App;
