import React from 'react'
import { useState } from 'react'

export const DateFetcher = () => {
  const [date, setDate]= useState("Unknown")
   
  return (
    <div className="Main">
      <button onClick={()=>setDate(new Date().toUTCString()) }>Push </button>
      UTC date: {date}
    </div>
  )
}
