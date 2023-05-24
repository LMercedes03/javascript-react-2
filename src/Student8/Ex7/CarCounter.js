import React from 'react'
import { useState } from 'react'

export const CarCounter = () => {
    let [ford, setFord] = useState(0)
    let [toyota, setToyota] = useState(0)
    let [chevy, setChevy] = useState(0)
    let [total, setTotal] = useState(0)
    
    const onHandleClick = (car) => {
        switch (car) {
          case 'Ford':
            setFord(ford + 1);
            break;
          case 'Toyota':
            setToyota(toyota + 1);
            break;
          case 'Chevy':
            setChevy(chevy + 1);
            break;
          default:
            break;
        }
        setTotal(total + 1);
      };
  
    return (
    <div>
        <button onClick={() => onHandleClick('Ford')}>Ford</button>
        <button onClick={() => onHandleClick('Toyota')}>Toyota</button>
        <button onClick={() => onHandleClick('Chevy')}>Chevy</button>
        <br />
        Ford: {ford}
        <br />
        Toyota: {toyota}
        <br />
        Chevy: {chevy}
        <br />
        TOTAL: {total}
        <br />

    </div>
  )
}
