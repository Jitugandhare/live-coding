import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)


    const handleAdd=()=>{
        setCount(prev=>prev+1)
    }
    const handleSub=()=>{
        setCount(prev=>prev-1)
    }
    const handleDouble=()=>{
        setCount(prev=>prev*2)
    }

  return (
    <div>
        <h2>Counter</h2>
        <p>{count}</p>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSub}>-</button>
        <button onClick={handleDouble}>Double</button>
    </div>
  )
}

export default Counter;