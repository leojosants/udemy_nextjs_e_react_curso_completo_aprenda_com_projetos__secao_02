import { useEffect, useState } from "react";
import { mega } from '../../functions/mega';
import NumberDisplay from "../../components/NumberDisplay";

export default function megasena() {
  const [amount, setAmount] = useState(6);
  const [numbers, setNumbers] = useState([]);
  const style = [
    {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    }
  ]

  useEffect(() => {
    setNumbers(mega())
  }, []);

  function renderNumbers() {
    return numbers.map(
      number => <NumberDisplay key={number} number={number} />
    );
  }

  return (
    <div style={style[0]}>
      <h1>Mega Sena</h1>
      <div style={style[1]}>
        {renderNumbers()}
      </div>

      <div>
        <input
          type="number"
          min={6}
          max={20}
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <button onClick={() => setNumbers(mega(amount))}>
          Generate bet
        </button>
      </div>
    </div>
  )
}