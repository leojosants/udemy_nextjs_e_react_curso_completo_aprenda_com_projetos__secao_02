import List from "../../components/List";
import Item from "../../components/Item";

export default function componentWithChild() {
  return (
    <div>
      <List>
        <Item content='item #1' />
        <Item content='item #2' />
        <Item content='item #3' />
        <Item content='item #11' />
        <Item content='item #12' />
        <Item content='item #13' />
      </List>
    </div>
  )
}