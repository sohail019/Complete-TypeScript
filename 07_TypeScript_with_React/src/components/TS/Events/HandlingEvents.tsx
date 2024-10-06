import React, { useState } from "react";

export const HandlingEvents: React.FC = () => {
  const [text, setText] = useState<string>("");

  const handleClick = (): void => {
    setText("Button Clicked");
  };

  return (
    <>
    <h1>Event Handling</h1>
      <button onClick={handleClick}>{
        text ? "Button Clicked" : "Click Me"
      }</button>
    </>
  );
};
