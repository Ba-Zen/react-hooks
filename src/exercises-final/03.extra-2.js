// useEffect: persistent state
// 💯 effect dependencies

// http://localhost:3000/isolated/exercises-final/03.extra-1

import React from 'react'

function Counter({step = 1, initialCount = 0}) {
  const [count, setCount] = React.useState(() =>
    Number(window.localStorage.getItem('count') || initialCount),
  )

  React.useEffect(() => {
    window.localStorage.setItem('count', count)
  }, [count])

  const increment = () => setCount(c => c + step)

  return <button onClick={increment}>{count}</button>
}

function Usage() {
  return <Counter />
}

export default Usage
