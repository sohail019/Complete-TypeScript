import React, { useState } from "react";

export const FormHandling: React.FC = () => {

  const [name, setName] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
    setName(e.target.value)
  }

  return (
  <div>
    <h1>Form Handling</h1>
    <input type="text" placeholder="Enter Name" onChange={handleChange} />
    <p>Name: {name}</p>
  </div>
  );
};
