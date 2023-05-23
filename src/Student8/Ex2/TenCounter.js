import React from 'react'
import { useState } from 'react'

export const TenCounter = () => {
    let [count, setCount]= useState(0)

    let onHandleClick = () => {
        if (count === 10){
            setCount(0)
        } else {
            setCount(++count)
        }
    }

  return (
    <div className='Main'>
        <button onClick={() => onHandleClick()}>Push</button>
        Counter: {count}
    </div>
  )
}
