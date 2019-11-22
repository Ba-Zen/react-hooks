// useCounter: custom hooks

// http://localhost:3000/isolated/exercises/02

import React from 'react'

function useCounter({step = 1, initialCount = 0} = {}) {
  const [count, setCount] = React.useState(initialCount)
  const increment = () => setCount(c => c + step)
  return [count, increment]
}

function Counter({step, initialCount}) {
  const [count, setCount] = useCounter({step, initialCount})
  const increment = () => setCount(c => c + step)
  return (
    <button
      style={{
        backgroundColor: 'red',
        height: '40px',
        width: '120px',
      }}
      onClick={increment}
    >
      {count}
    </button>
  )
}

function Usage() {
  return <Counter />
}

export default Usage
