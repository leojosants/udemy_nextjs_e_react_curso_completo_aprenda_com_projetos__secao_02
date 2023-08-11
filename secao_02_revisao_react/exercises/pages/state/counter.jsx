import { useState } from "react"
import NumberDisplay from "../../components/NumberDisplay";

export default function counter() {
  const [number, setNumber] = useState(0);
  const increment = () => setNumber(number + 1);
  const decrement = () => setNumber(number - 1);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h1>Counter</h1>
      <NumberDisplay number={number} />
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}

/* import { useState } from "react"

export default function counter() {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber(number + 1);
  }

  function decrement() {
    setNumber(number - 1);
  }

  return (
    <div>
      <h1>Counter</h1>
      <div>Value: {number}</div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  )
}
*/