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
        <h2 data-testid = 'counter-header'>Counter</h2>
        <h3 data-testid = 'count'>{count}</h3>
        <button data-testid = 'add-btn 'onClick={handleAdd}>+</button>
        <button data-testid = 'subtract-btn' onClick={handleSub}>-</button>
        <button data-testid = 'double-btn' onClick={handleDouble}>Double</button>
    </div>
  )
}

export default Counter;