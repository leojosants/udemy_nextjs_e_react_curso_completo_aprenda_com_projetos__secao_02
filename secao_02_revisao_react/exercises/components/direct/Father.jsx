import Son from "./Son";

export default function Father(props) {
  return (
    <div>
      <h1>Family {props.family}</h1>
      <Son name='Leonardo' family={props.family} /><br />
      <Son name='João' family={props.family} /><br />
      <Son name='Miriam' family={props.family} /><br />
      <Son {...props} name='José' /><br />
    </div>
  );
}