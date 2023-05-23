import React from 'react'
import { useState } from 'react'

export const UpDownCounter = () => {
    let [count, setCount]= useState(0)
    
    const onHandleClick = (direction) => {
    
        if (direction === "Up!"){
          setCount(++count)
        } else {
          setCount(--count)
        }
      }

      
    return (
    <div>
        <button onClick={() => onHandleClick("Down") }>Down</button> {count}<span><button onClick={() => onHandleClick("Up") }>Up</button></span>
    </div>
  )
}
