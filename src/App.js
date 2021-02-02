import "./App.css";
import { useState } from "react";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
};

const stylings = ["bold", "italic", "underline"];
const colors = ["yellow", "blue", "red", "black", "purple"];

function App() {
  const [textStyle, setStyle] = useState([]);
  const [textColor, setColor] = useState("black");

  const changeStyle = (style) => {
    const found = textStyle.find((elemnt) => elemnt.incldes(style));

    if (typeof found === "undefined") {
      setStyle(textStyle.push(styles[style]));
    } else {
      // setStyle(styles[style]);
    }
  };

  const stylingBoxes = stylings.map((style) => (
    <button
      className="btn btn-light"
      style={styles[style]}
      key={style}
      onClick={() => changeStyle(style)}
    >
      {style}
    </button>
  ));

  const colorBoxes = colors.map((color) => (
    <button
      style={{ backgroundColor: color, height: 30, width: 30 }}
      key={color}
      onClick={() => setColor(color)}
    />
  ));

  return (
    <div className="App">
      <div className="my-3">{stylingBoxes}</div>
      <textarea style={{ color: textColor, ...textStyle }} />
      <div className="my-3">{colorBoxes}</div>
    </div>
  );
}

export default App;
