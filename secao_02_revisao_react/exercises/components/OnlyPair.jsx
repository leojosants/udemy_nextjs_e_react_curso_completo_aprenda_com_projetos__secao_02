export default function OnlyPair(props) {
  const evenNumber = props.number % 2 === 0; 
  
  return (
    <div>
      {evenNumber ?
        <span>{props.number}</span>
        : null
      }
    </div>
  )
}

/* export default function OnlyPair(props) {
  const numberPair = props.number % 2 === 0; 
  return numberPair ? <span>{props.number}</span> : null;
}
*/

/* export default function OnlyPair(props) {
  if (props.number % 2 === 0) {
    return <p>{props.number}</p>;
  } else {
    return null;
  }
}
*/