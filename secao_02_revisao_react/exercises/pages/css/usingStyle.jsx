import Style from "../../components/Style";

export default function usingStyle() {
  return (
    <div>
      <Style
        number={-1}
        color={'#FFF'}
        direction={true}
      />
      
      <Style
        number={9}
        color={'#a72121'}
      />
    </div>
  )
}