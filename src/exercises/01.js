// useState: counter

// http://localhost:3000/isolated/exercises/01

import React, {useState} from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <>
      <p>You clicked this:{count} times</p>
      <button
        style={{
          backgroundColor: 'red',
          height: '40px',
          width: '120px',
        }}
        onClick={() => setCount(count + 1)}
      >
        Don't Click!
      </button>
    </>
  )
}

////////////////////////////////////////////////////////////////////
//                                                                //
//                 Don't make changes below here.                 //
// But do look at it to see how your code is intended to be used. //
//                                                                //
////////////////////////////////////////////////////////////////////

function Usage() {
  return <Counter />
}

export default Usage
