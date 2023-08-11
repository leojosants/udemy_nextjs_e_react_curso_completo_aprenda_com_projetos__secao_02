import Son from "./Son";

export default function Father(props) {

  function talkToMe(param) {
    console.log(param);
  }

  return (
    <div>
      <Son func={talkToMe} />
    </div>
  );
}