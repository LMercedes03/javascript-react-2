import React from "react";
import { useState } from "react";

export const Buttons = () => {
  let [buttonText1, setButtonText1] = useState("Push");
  let [buttonText2, setButtonText2] = useState("Push");

  const onHandleClick = (number) => {
    switch (number) {
      case 1:
        setButtonText1("Pushed");
        break;
      case 2:
        setButtonText2("Pushed");
        break;
      case 3:
        setButtonText1("Push");
        setButtonText2("Push");
        break;
      default:
        break;
    }
  };

  return (
    <div className="Main">
      <button onClick={() => onHandleClick(1)}>{buttonText1}</button>
      <br />
      <button onClick={() => onHandleClick(2)}>{buttonText2}</button>
      <br />
      <button onClick={() => onHandleClick(3)}>Reset</button>
      <br />
    </div>
  );
};
