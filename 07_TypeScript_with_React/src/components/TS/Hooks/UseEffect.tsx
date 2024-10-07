import React, { useEffect, useState } from 'react'

//? UseEffect ko TS ke sath type karna simple hai, kyunki iska return type hamesha void hota hai, ya clean-up ke liye ek function return karta hai.

export const UseEffect: React.FC = () => {
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => prev + 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [] )    
  return (
    <>
    <h1>useEffect Hook</h1>
        <h2>Timer: {count} Seconds</h2>
    </>
  )
}
