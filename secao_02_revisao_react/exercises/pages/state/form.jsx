import { useState } from "react"

export default function form() {
  const [value, setValue] = useState('initial');

  function changeInput() {
    setValue(value + '!');
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={changeInput}>Click here</button>
    </div>
  )
}