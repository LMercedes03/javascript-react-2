import React, { useState } from 'react'

export const RandomNumber = () => {
    let [number, setNumber] = useState(0)

    const onHandleClick = () => {
        setNumber(Math.floor(Math.random() * 10)+1)
    }

  return (
    <div className="Main">
        Random Number: {number}
        <br />
        <button onClick={() => onHandleClick(number)}>Generate</button>
    </div>
  )
}
