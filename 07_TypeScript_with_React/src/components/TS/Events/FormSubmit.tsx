import React, { useState } from 'react'

export const FormSubmit: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>("")
    const [formValue, setFormValue] = useState<string>("")

    const handleForm = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const tempValue = inputValue
        console.log("Form Submitted")
        setTimeout( () => {
            setFormValue(tempValue)
        }, 400)
        setInputValue("")
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
  return (
    <form onSubmit={handleForm}>
      <h1>Form Submit</h1>
      <input
        type="text"
        value={inputValue}
        placeholder="Enter Value"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      {/* <p>Input Value: {inputValue}</p>  */}
      {inputValue ? <p>Input Value: {inputValue}</p> : null}
      {formValue ? <p>Form Value: {formValue}</p> : null}
    </form>
  );
}
