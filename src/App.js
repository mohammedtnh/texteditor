import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
};

const stylings = ["bold", "italic", "underline"];

const colors = ["yellow", "blue", "red", "black", "purple"];

let userText = "";

function App() {
  const [text, setStyle] = useState();

  const changeStyle = (style) => {
    setStyle(userText.bold());
    console.log(userText);
    // if (fon) {
    //   ReactDOM.render(element, document.getElementById("root"));
    //   setStyle("dark");
    // } else {
    //   setStyle("light");
    // }
  };

  const stylingBoxes = stylings.map((style) => (
    <button
      className="btn btn-light"
      style={styles[style]}
      key={style}
      onClick={changeStyle(styles[style])}
    >
      {style}
    </button>
  ));

  const colorBoxes = colors.map((color) => (
    <button
      style={{ backgroundColor: color, height: 30, width: 30 }}
      key={color}
    />
  ));

  return (
    <div className="App">
      <div className="my-3">{stylingBoxes}</div>
      <textarea />
      <div className="my-3">{colorBoxes}</div>
    </div>
  );
}

export default App;
