export function Component1() {
  return (
    <div>
      <h2>Component1</h2>
    </div>
  )
}

export const Component2 = function () {
  return (
    <div>
      <h2>Component2</h2>
    </div>
  )
};

export default function Component3() {
  return (
    <div>
      <h2>Component3</h2>
    </div>
  )
}

export const Component4 = () => {
  return <h2>Component4</h2>
};

export const Component5 = () => <h2>Component5</h2>;

export const Component6 = (props) => (
  <div>
    <h2>Component6 - {props.msg}</h2>
  </div>
);

export const Component7 = props => (
  <div>
    <h2>Component7 - {props.msg}</h2>
  </div>
);