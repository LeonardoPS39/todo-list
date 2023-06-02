import { ButtonItem, Content } from "./Button.styles";

const Button = ({onClick}: any) => {
  return (
    <Content>
      <ButtonItem id="addButton" onClick={onClick}>Adicionar</ButtonItem>
    </Content>
  )
}

export default Button;