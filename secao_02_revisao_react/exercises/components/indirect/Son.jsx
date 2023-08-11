export default function Son(props) {
  const msg = 'Child component sending message to Parent component';
  console.log(props.func);

  return (
    <div>
      <h1>Son</h1>
      <button onClick={() => props.func(msg)}>
        Talk to Parent component
      </button>
    </div>
  );
}