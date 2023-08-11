import If from "../../components/If"

export default function conditional1() {
  const number = 3;

  return (
    <div>
      <If test={number % 2 === 0}>
        <h1>The number {number} is even.</h1>
      </If>
      <If test={number % 2 === 1}>
        <h1>The number {number} is odd.</h1>
      </If>
    </div>
  )
}