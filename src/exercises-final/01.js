// useState: counter

// http://localhost:3000/isolated/exercises-final/01

import React from 'react'

function Counter() {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount(count + 1)
  return <button onClick={increment}>{count}</button>
}

function Usage() {
  return <Counter />
}

export default Usage
