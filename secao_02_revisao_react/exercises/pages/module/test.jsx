import Default, {
  Component1 as Other,
  Component2, Component4, Component5, Component6, Component7,
} from '../../components/module/functional';

export default function test() {
  return (
    <div>
      <Other />
      <Component2 />
      <Default />
      <Component4 />
      <Component5 />
      <Component6 msg='msg Component6' />
      <Component7 msg='msg Component7' />
    </div>
  )
}