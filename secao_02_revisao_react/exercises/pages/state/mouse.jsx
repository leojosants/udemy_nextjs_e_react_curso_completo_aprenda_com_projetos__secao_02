import { useState } from "react";

export default function mouse() {
  const [axleX,setAxleX] = useState(0);
  const [axleY, setAxleY] = useState(0);

  const style = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#222',
      color: '#fff',
      height: '100vh'
  }

  function whenMove(e) {
    setAxleX(e.clientX);
    setAxleY(e.clientY);
  }
  
  return (
    <div style={style} onMouseMove={whenMove}>
      <div>Axle X: {axleX}</div>
      <div>Axle Y: {axleY}</div>
    </div>
  )
}