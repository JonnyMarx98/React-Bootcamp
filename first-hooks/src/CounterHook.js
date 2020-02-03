import React, {useState} from 'react'

export default function CounterHook() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count * 2)}>Add 1</button>
    </div>
  )
}
