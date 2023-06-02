import Button from "../Button";
import Input from "../Input";
import { Content } from "./ToDoInput.styles";
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const ToDoInput = () => {

  const [inputValue, setInputValue] = useState("");

  const addCookies = () => {
    Cookies.set("inputValue", inputValue);
    console.log(inputValue)
  }

  useEffect(() => {
    const getInputValue = () => {
      const input = document.getElementById('inputOnList') as HTMLInputElement;
      setInputValue(input.value);
    }

    document.querySelector("#addButton")?.addEventListener("click", () => getInputValue);
  }, []);

  return (
    <Content>
      <Input />
      <Button onClick={addCookies} />
    </Content>
  )
}

export default ToDoInput;