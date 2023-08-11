/*
  Desafio
    <div>
      <span>1,</span>
      <span>2,</span>
      <span>3,</span>
      <span>4,</span>
      <span>5,</span>
      <span>6,</span>
      <span>7,</span>
      <span>8,</span>
      <span>9,</span>
      <span>10,</span>
    </div>
*/
function generateList(initial=1, final=10) {
  const list = [];

  for (let i = initial; i <= final; i++) {
    return list.push(<span>{ i }, </span>);
  }

  return list;
}

export default function list() {
  return (
    <div>
      { generateList() }
    </div>
  )
}