export default function Style(props) {
  return (
    <div>
      <h1 style={{
          backgroundColor: props.number >= 0 ? '#2D2' : '#D22',
          color: props.color,
          textAlign: props.direction ? 'right' : 'left',
        }}>
        Text #01
      </h1>
      <h2 className={props.number >= 0 ? 'blue' : 'red'}>
        Text #02
      </h2>
    </div>
  )
}