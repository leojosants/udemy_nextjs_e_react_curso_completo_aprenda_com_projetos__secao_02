export default function jsx4() {
  const caption = "I'm on JavaScript!";
  
  return (
    <div>
      <h1>JS and JSX integration</h1>
      <h2>{ caption }</h2>
      <h3>{ 3 * 3 }</h3>
      <h4>{ Math.max(13, 39) }</h4>
      <h5>{ betweenValues(30, 1, 10) }</h5>
      <h6>{ betweenValues(9.3, 1, 10) }</h6>
    </div>
  )
}

function betweenValues(value, min, max) {
  if (value>=min && value<=max) {
    return 'Yes'
  }
  else {
    return 'No'
  }
}