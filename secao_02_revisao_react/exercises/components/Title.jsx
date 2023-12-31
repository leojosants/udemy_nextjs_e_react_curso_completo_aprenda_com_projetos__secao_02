export default function Title(props) {
    return props.small ? (
      <>
        <p>{props.title}</p>
        <p>{props.subtitle}</p>
      </>
    ) : (
      <>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </>
    )
}