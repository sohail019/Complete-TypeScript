import React, { useState } from 'react'

export const UseState:React.FC = () => {

    const [count, setCount] = useState<number>(0)

    const handleClick = (): void => {
        setCount((prev) => prev + 1)
    }
  return (
    <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Click Me (Inline Logic) - {count}</button>
        <br />
        <br />
        <button onClick={handleClick}>Click Me (Function Call) - {count}</button>
    </div>
  )
}
