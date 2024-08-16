import { useState } from "react";
import "./App.css";

function App() {
  const classYellow = ["", "yellow", "", "yellow"];
  const [currentColor, setCurrentColor] = useState(0);

  function colorChange() {
    let indexColor = currentColor;
    console.log(indexColor);
    let nextColor = indexColor + 1;
    if (nextColor === 4) {
      nextColor = 0;
    }
    setCurrentColor(nextColor);
  }

  return (
    <>
      <h1>Traffic Lights</h1>
      <div className="stand">
        <div
          className={`light red-start ${currentColor === 0 ? "red" : ""}`}
        ></div>
        <div
          className={`light yellow-start ${classYellow[currentColor]}`}
        ></div>
        <div
          className={`light green-start ${currentColor === 2 ? "green" : ""}`}
        ></div>
      </div>
      <button className="btn" onClick={colorChange}>
        Switch
      </button>
    </>
  );
}

export default App;
