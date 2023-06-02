import { useState } from "react";
import { Content, InputItem } from "./Input.styles";

const Input = () => {

  const [value, setValue] = useState("");

  return (
    <Content>
      <InputItem id="inputOnList" value={value} onChange={(content) => {setValue(content.target.value); console.log(value)}} />
    </Content>
  )
}

export default Input;