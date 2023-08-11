function action1() {
  console.log('action1');
}

export default function button() {
  function action2() {
    console.log('action2');
  }
  
  function action5(e) {
    console.log(e);
  }

  return (
    <div>     
      <button onClick={action1}>
        Click here #01
      </button><br />
      
      <button onClick={action2}>
        Click here #02
      </button><br />
      
      <button onClick={function () { console.log('action3'); }}>
        Click here #03
      </button><br />

      <button onClick={() => console.log('action4')}>
        Click here #04
      </button><br />

      <button onClick={action5}>
        Click here #05
      </button><br />

      <button onClick={e => action5(e.altKey)}>
        Click here #05.1
      </button>

      <div>
        <input
        type="text"
        placeholder="Type and watch the console."
        onChange={(e) => console.log(e.target.value)}
      />
      </div>
    </div>
  )
}