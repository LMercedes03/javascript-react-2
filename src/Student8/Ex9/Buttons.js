import React from 'react'
import { useState } from 'react'

export const Buttons = () => {
    let [button1, setButton1]  = useState("Push")
    let [button2, setButton2]  = useState("Push")
    
    const onHandleClick = (pushed) => {
        switch (pushed) {
          case 1:
            setButton1("Pushed");
            break;
          case 2:
            setButton2("Pushed");
            break;
          case 3:
            setButton1("Push");
            setButton2("Push");
            break;
          default:
            break;
        }
      };
  
    return (
    <div className='Buttons'>
        <button onClick={() => onHandleClick(1)}>{button1}</button>
        <br />
        <button onClick={() => onHandleClick(2)}>{button2}</button>
        <br />
        <button onClick={() => onHandleClick(3)}>Reset</button>
    </div>
  )
}
