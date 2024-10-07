import { useCallback, useEffect, useState } from 'react'

type UseTimerReturn = {
    timer: number,
    start: () => void,
    stop: () => void,
    reset: () => void

}
export const useTimer = (initialTime: number = 0): UseTimerReturn => {
    const [timer, setTime] = useState<number>(initialTime)
    const [isRunning, setIsRunning] = useState<boolean>(false)

    useEffect(() => {

        let interval: number | null = null

        if(isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1)
            }, 1000) 
        } else if(interval) {
            clearInterval(interval)
        }

        return () => {
            if(interval) clearInterval(interval)
        }
    }, [isRunning])

    const start = useCallback(() => setIsRunning(true), [])
    const stop = useCallback(() => setIsRunning(false), [])
    const reset = useCallback(() => setTime(0), [])

    return {timer, start, stop, reset}
  
}
