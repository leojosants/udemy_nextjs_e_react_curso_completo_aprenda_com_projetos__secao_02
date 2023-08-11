export default function repetition1() {
  const approvedList = ['Jenny', 'Ryan', 'Maju', 'Kayo', 'Otávio'];

  function renderList() {
    return approvedList.map((name, index) => (
      <li key={index}>{name}</li>
    ));
  }

  return (
    <ul>
      {renderList()}
    </ul>
  )
}

/* solution one
export default function repetition1() {
  const approvedList = ['Jenny', 'Ryan', 'Maju', 'Kayo', 'Otávio'];

  function renderList() {
    const items = [];

    for (let i = 0; i < approvedList.length; i++) {
      items.push(<li key={i}>{approvedList[i]}</li>);  
    }

    return items;
  }

  return (
    <ul>
      {renderList()}
    </ul>
  )
}
*/