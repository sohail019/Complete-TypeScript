import React, { useEffect, useRef } from 'react'

export const UseRef:React.FC = () => {

    //? useRef<HTMLInputElement>(null) : Ref ko ham <input> element ke sath define karte hai
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        //? Accessing ref.current: inputRef.current DOM element ko refer karta hai, null ka check zaroori hota hai kyunki default value null hoti hai.
        if(inputRef.current){
            inputRef.current.focus() //? Automatically focus input on mount
        }
    }, [])
  return (
    <>
    <h1>useRef Hook</h1>
    <input ref={inputRef} type='text' placeholder='Focus Me!'></input>
    </>
  )
}
