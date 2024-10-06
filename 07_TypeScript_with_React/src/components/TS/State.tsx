import { useState } from "react"

export const State: React.FC = () => {

    //* useState<number>(0) :  Yahan ham useState ko batate hai ki count ka type number hoga, aur initial value (0) hai. Agar ham is state variable mei kisi aur type ki value daalne ki koshish karenge to TypeScript erorr degi
    const [count, setCount] = useState<number>(0)
  return (
    <>
        <h1>Count - {count}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>Increase Count</button>
    </>
  )
}
