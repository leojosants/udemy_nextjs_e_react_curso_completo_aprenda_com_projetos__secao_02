export default function List(props) {
  return (
    <div>
      <h1>Título da lista</h1>
      
      <ul style={{
        listStyle: 'none',
      }}>
        {props.children}
      </ul>
    </div>
  )
}