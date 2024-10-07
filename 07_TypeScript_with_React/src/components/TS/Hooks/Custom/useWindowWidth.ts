import React, { useEffect, useState } from 'react'


//? Hook ka return type hamne number specify kiya hai kyunki width ek number hoga
export const useWindowWidth:React.FC<{refreshInterval: number}> = ():number => {

    //* useState<number>(window.innerWidth): State ko type-safe banane ke liye hamne useState<number> ka use kiya hai.
    const [width, setWidth] = useState<number>(window.innerWidth)


    //* useEffect: side effect ke liye, Hum window resize ko listen kar rahe hai aur event listener ko clean-up kar rahe hai jab component unmount hoga 
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return width
}

