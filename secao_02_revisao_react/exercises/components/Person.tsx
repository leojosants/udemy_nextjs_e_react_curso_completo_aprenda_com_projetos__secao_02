interface PersonProps {
  name: string,
  age?: number,
}

export default function Person(props: PersonProps) {
  return (
    <div>
      <div>Name: {props.name}</div>
      <div>Age: {props.age ?? 'Uninformed data.'}</div>
    </div>
  )
}