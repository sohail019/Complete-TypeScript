import React, { useState } from 'react'

export const State = () => {
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount((prev) => prev + 1 )
    }

  return (
    <div>
        <h1>Count {count}</h1>
        <button onClick={increaseCount}>Increase Count</button>
    </div>
  )
}
