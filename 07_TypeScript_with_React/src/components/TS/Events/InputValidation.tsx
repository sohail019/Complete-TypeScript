import React, { useState } from 'react'

export const InputValidation:React.FC = () => {

    const [email, setEmail] = useState<string>("")
    const [text, setText] = useState<string>("")

    const handleform = (e:React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if(validateEmail(email)) {
            setText("Valid Email Submitted: " + email)
        } else{
            setText("Invalid Email Submitted: " + email)
        }
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value)
    }

    const validateEmail = (email: string): boolean => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email)
    }

  return (
    <form onSubmit={handleform}>
      <h1>Input Validation</h1>
      <input
        type="text"
        value={email}
        onChange={handleChange}
        placeholder="Enter Email"
      />
      <button>Submit</button>
      <p>{text}</p>
    </form>
  );
}
