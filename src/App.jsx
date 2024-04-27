import React, { useState } from "react";
import Stars from "./Stars";
import Options from "./Options";

function App() {
  const defaultRating = localStorage.getItem("starRating");

  const [iconSize, setIconSize] = useState(50);
  const [icon, setIcon] = useState("★");
  const [color, setColor] = useState("#f6b73c");
  const [count, setCount] = useState(5);

  const handleIconSizeChange = (event) => {
    setIconSize(parseInt(event.target.value));
  };

  const handleIconChange = (event) => {
    setIcon(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleCountChange = (event) => {
    setCount(parseInt(event.target.value));
  };

  return (
    <div>
      <Options
        iconSize={iconSize}
        icon={icon}
        color={color}
        count={count}
        onIconSizeChange={handleIconSizeChange}
        onIconChange={handleIconChange}
        onColorChange={handleColorChange}
        onCountChange={handleCountChange}
      />
      <Stars
        iconSize={iconSize}
        icon={icon}
        color={color}
        count={count}
        defaultRating={defaultRating}
      />
    </div>
  );
}

export default App;
