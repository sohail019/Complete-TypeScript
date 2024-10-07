import React from 'react'
import { useTimer } from './useTimer'

export const TimerComponent: React.FC = () => {

    const {timer, start, stop, reset} = useTimer(0)
  return (
    <>
    <h1>Custom Hook with Parameter</h1>
        <p>Timer: {timer}</p>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
    </>
  )
}
